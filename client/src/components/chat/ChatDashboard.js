import React, {useEffect} from "react";
import {
  Avatar,
  TitleBar,
  TextInput,
  MessageList,
  Message,
  MessageText,
  AgentBar,
  Title,
  Subtitle,
  MessageGroup,
  MessageButtons,
  MessageButton,
  MessageTitle,
  MessageMedia,
  TextComposer,
  Row,
  Fill,
  Fit,
  IconButton,
  FixedWrapper,
  SendButton,
  EmojiIcon,
  CloseIcon,
  Column,
  RateGoodIcon,
  RateBadIcon,
  Bubble,
} from "@livechat/ui-kit";
import { useSelector } from "react-redux";
import ChatCard from "./Maximized";
import Minimized from "./chatMinimzed";

import { io } from "socket.io-client";

const ChatDashboard = () => {
  const activeUser = useSelector((state) => state.user.activeUser);

  useEffect(() => {
    const socket = io("http://localhost:8000");
    socket.on("connection", (activeUser) => {
      console.log("client-side socket", activeUser);
    });
  }, []);

  return (
    <FixedWrapper.Root>
      <FixedWrapper.Maximized
        style={{
          maxWidth: "400 !important",
        }}
      >
        <ChatCard />
      </FixedWrapper.Maximized>
      <FixedWrapper.Minimized active="false">
        <Minimized />
      </FixedWrapper.Minimized>
    </FixedWrapper.Root>
  );
};

export default ChatDashboard;
