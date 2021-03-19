import React, { useState, useEffect } from "react";
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
  ArrowBackIcon,
  FixedWrapper,
  SendButton,
  EmojiIcon,
  CloseIcon,
  Column,
  RateGoodIcon,
  RateBadIcon,
  Bubble,
  ChatList,
  ChatListItem,
} from "@livechat/ui-kit";
import { useDispatch, useSelector } from "react-redux";
import ChatInput from "./ChatInput";

function SingleChat({ minimize, props }) {
  const arrow = props;
  const activeUser = useSelector((state) => state.user.activeUser[0]);
  const dispatch = useDispatch();
  const name = "seth mc pooper";
  const messages = useSelector((state) => state.message.messages);
  console.log(messages);
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
            if(activeUser.id === message.userId){
              return(<Message isOwn={true}>
                {message.messageText}
              </Message>)
            } else{
              return(<Message>{message.messageText}</Message>)
            }
            
              
          })}
         </div>
        <ChatInput></ChatInput>
      </div>
    </div>
  );
}

export default SingleChat;