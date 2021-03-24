import React, { useState, useEffect } from "react";
import {
  Avatar,
  TitleBar,
  Message,
  AgentBar,
  Title,
  Subtitle,
  Row,
  IconButton,
  CloseIcon,
  Column,
} from "@livechat/ui-kit";
import { useDispatch, useSelector } from "react-redux";
import ChatInput from "./ChatInput";
import useEffectAfterMount from "../hooks/useEffectAfterMount";
import { messageActions } from "../../store/ducks/messageDuck";

function SingleChat({ minimize, props, handleSocketSend }) {
  const arrow = props;
  const activeUser = useSelector((state) => state.user.activeUser[0]);
  const dispatch = useDispatch();
  const name = "seth mc pooper";
  const messages = useSelector((state) => state.message.messages);

  // useEffect(() => {
  //   use;
  // }, [messages]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          border: "5px solid black",
          flexDirection: "column",
          height: "100%",
          maxWidth: "100%",
        }}
      >
        <TitleBar
          rightIcons={[
            <IconButton key="close" onClick={minimize}>
              <CloseIcon />
            </IconButton>,
          ]}
          leftIcons={[
            <IconButton
              onClick={() => {
                arrow(false);
              }}
            >
              <i className="material-icons">arrow_back</i>
            </IconButton>,
          ]}
          title="Welcome to WhosApp"
        />
        <AgentBar>
          <Row flexFill>
            <Column>
              <Avatar />
            </Column>
            <Column flexFill>
              <Title>{name}</Title>
              <Subtitle>gay boy</Subtitle>
            </Column>
          </Row>
        </AgentBar>
        <div>
          {messages.map((message) => {
            if (activeUser.id === message.userId) {
              return <Message isOwn={true}>{message.messageText}</Message>;
            } else {
              return <Message>{message.messageText}</Message>;
            }
          })}
        </div>
        <ChatInput handleSocketSend={handleSocketSend}></ChatInput>
      </div>
    </div>
  );
}

export default SingleChat;
