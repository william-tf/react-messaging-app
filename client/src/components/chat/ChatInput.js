import React, { useState } from "react";
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

const initialState = {
  messageText: "",
  userId: 0,
  chatId: 0,
};

export default function ChatInput() {
  const activeUser = useSelector((state) => state.user.activeUser[0]);
  const activeChat = useSelector((state) => state.chat.chat[0]);
  const [newMessage, setNewMessage] = useState(initialState);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNewMessage({ ...newMessage, [name]: value });
    console.log(activeChat);
  };

  const handleSubmit = () => {
    console.log("here", activeUser, activeChat);
    dispatch(
      messageActions.addMessageThunk({
        ...newMessage,
        userId: activeUser.id,
        chatId: activeChat.id,
      })
    );
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
