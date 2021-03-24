import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextComposer, Row } from "@livechat/ui-kit";
import { messageActions } from "../../store/ducks/messageDuck";
const initialState = {
  messageText: "",
  userId: 0,
  chatId: 0,
};

export default function ChatInput(props) {
  const { handleSocketSend } = props;
  const activeUser = useSelector((state) => state.user.activeUser[0]);
  const activeChat = useSelector((state) => state.chat.chat[0]);
  const [newMessage, setNewMessage] = useState(initialState);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNewMessage({ ...newMessage, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(
      messageActions.addMessageThunk({
        ...newMessage,
        userId: activeUser.id,
        chatId: activeChat.id,
      })
    );

    handleSocketSend({
      ...newMessage,
      chatId: activeChat.id,
      userId: activeUser.id,
    });

    setNewMessage(initialState);
    dispatch(messageActions.getChatMessagesThunk(activeChat.id));
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
