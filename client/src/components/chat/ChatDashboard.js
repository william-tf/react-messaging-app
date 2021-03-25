import React, { useEffect, useState } from "react";
import { FixedWrapper } from "@livechat/ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/ducks/userDuck";
import { messageActions } from "../../store/ducks/messageDuck";
import ChatCard from "./Maximized";
import Minimized from "./chatMinimzed";

import { io } from "socket.io-client";

const ChatDashboard = () => {
  const activeUser = useSelector((state) => state.user.activeUser);
  const activeChat = useSelector((state) => state.chat.chat);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAllUsersThunk());
  }, []);

  const socket = io("http://localhost:8000");
  socket.on("connection", (activeUser) => {
    console.log("client-side socket", activeUser);
  });
  socket.on("client-message", () => {
    dispatch(messageActions.getChatMessagesThunk(activeChat.id));
  });

  const handleSocketSend = (message) => {
    socket.emit("newChatMessage", message);
  };

  return (
    <FixedWrapper.Root>
      <FixedWrapper.Maximized
        style={{
          maxWidth: "400 !important",
        }}
      >
        <ChatCard handleSocketSend={handleSocketSend} />
      </FixedWrapper.Maximized>
      <FixedWrapper.Minimized active="false">
        <Minimized />
      </FixedWrapper.Minimized>
    </FixedWrapper.Root>
  );
};

export default ChatDashboard;
