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
import { chatActions } from "../../store/ducks/chatDuck";

function UserChatList({ minimize, props }) {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.chats);
  const chat = useSelector((state) => state.chat.chat);
  const chatStatus = useSelector((state) => state.chat.status);
  const status = useSelector((state) => state.chat.status)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    dispatch(chatActions.getUserChatsThunk(1));
    
  }, []);

  console.log("CHATS==> ", chats);
  
  console.log("USERCHATS STatus ====>", status)
  const arrow = props;
  return (
    <>
    {
    status === "idle" ? <div
    style={{
      display: "flex",
      border: "5px solid black",
      flexDirection: "column",
      height: "100%",
      maxWidth: "100%",
    }}
    >
      {console.log("CHATS==> ", chats[0].firstName)}
    <TitleBar
      rightIcons={[
        <IconButton key="close" onClick={minimize}>
          <CloseIcon />
        </IconButton>,
      ]}
      leftIcons={[
        <IconButton
        onClick={() => {
          console.log("to add another conversation");
        }}
        >
          <i className="material-icons">add</i>
        </IconButton>,
      ]}
      title="Welcome to WhosApp"
      />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
      >
      <div
        style={{
          maxWidth: "100%",
        }}
        >
        <ChatList>
          <ChatListItem onClick={() => arrow(true)}>
            <Avatar letter={chats[0].firstName[0]} />
            <Column fill>
              <Row justify>
                <Title ellipsis>{chats[0].firstName}</Title>
                <Subtitle nowrap></Subtitle>
              </Row>
            </Column>
          </ChatListItem>
          <ChatListItem active>
            <Avatar letter={chats[1].firstName[0]} />
            <Column fill>
              <Row justify>
                <Title ellipsis>{chats[1].firstName}</Title>
                <Subtitle nowrap>{"14:31 PM"}</Subtitle>
              </Row>
              <Subtitle ellipsis>
                {"actually I just emailed you back"}
              </Subtitle>
            </Column>
          </ChatListItem>
          <ChatListItem>
            <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
            <Column fill>
              <Row justify>
                <Title ellipsis>{"Michael"}</Title>
                <Subtitle nowrap>{"14:31 PM"}</Subtitle>
              </Row>
              <Subtitle ellipsis>
                {"Ok, thanks for the details, I'll get back to you tomorrow."}
              </Subtitle>
            </Column>
          </ChatListItem>
        </ChatList>
      </div>
    </div>
  </div>
  : <p>loading icon filler</p>
    }
    
          </>
  );
}

export default UserChatList;
