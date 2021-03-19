import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextComposer,
  TextInput,
  IconButton,
  SendButton,
  Row,
  Column,
} from "@livechat/ui-kit";
import { messageActions } from "../../store/ducks/messageDuck";
import socketIOClient, { io } from "socket.io-client";
const initialState = {
  messageText: "",
  userId: 0,
  chatId: 0,
};

export default function ChatInput() {
  const activeUser = useSelector((state) => state.user.activeUser[0]);
  const activeChat = useSelector((state) => state.chat.chat[0]);
  const [newMessage, setNewMessage] = useState(initialState);
  const socketRef = useRef()
  const dispatch = useDispatch();
  const socket = io("http://localhost:8000");
  const SOCKET_URL = "http://localhost:8000"
  const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNewMessage({ ...newMessage, [name]: value });
    console.log(activeChat);
  };

  const handleSubmit = () => {
    console.log("CHAT ID 1ST LOG", activeChat.id);
    socketRef.current = socketIOClient(SOCKET_URL)
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      messageText: newMessage.messageText,
      userId: activeUser.id,
      chatId: activeChat.id
    })
    
    dispatch(
      messageActions.addMessageThunk({
        ...newMessage,
        userId: activeUser.id,
        chatId: activeChat.id,
      })
    );
    
    // socket.on("connection", (activeUser) => {
    //   console.log("client-side socket", activeUser);
    // });
    // socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
    

    // })
    

    setNewMessage(initialState);
  };

  

  return (
    <TextComposer>
      <Row align="center">
        <input
          value={newMessage.messageText}
          name="messageText"
          onChange={(e) => changeHandler(e)}
        />
        <button onClick={() => handleSubmit()}>submit</button>
      </Row>
    </TextComposer>
  );
}
