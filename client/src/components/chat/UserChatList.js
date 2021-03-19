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
import { messageActions } from "../../store/ducks/messageDuck";
import { userActions } from "../../store/ducks/userDuck";
function UserChatList({ minimize, props }) {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.chats);
  const chat = useSelector((state) => state.chat.chat[0]);
  const chatStatus = useSelector((state) => state.chat.status);
  const status = useSelector((state) => state.chat.status);
  const messages = useSelector((state) => state.message.messages);
  const activeUsurper = useSelector((state) => state.user.activeUser);

  useEffect(() => {
    //gets users chats
    dispatch(chatActions.getUserChatsThunk(activeUsurper[0].id));
    console.log(activeUsurper.id);
  }, []);

  const arrow = props;
  //We need to fix this
  const avatarPic = activeUsurper.profilePic;

  return (
    <>
      {status === "idle" ? (
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
                {chats.map((cht) => {
                  return (
                    <ChatListItem
                      onClick={() => {
                        arrow(true);
                        dispatch(
                          messageActions.getChatMessagesThunk(cht.chatId)
                        );
                        console.log(cht);
                        dispatch(chatActions.getSingleChatThunk(cht.chatId));
                      }}
                    >
                      {avatarPic === "" ? (
                        <Avatar letter={cht.firstName[0]} />
                      ) : (
                        <Avatar imgUrl={avatarPic} />
                      )}
                      <Column fill>
                        <Row justify>
                          <Title ellipsis>{cht.firstName}</Title>
                          <Subtitle nowrap></Subtitle>
                        </Row>
                      </Column>
                    </ChatListItem>
                  );
                })}
              </ChatList>
            </div>
          </div>
        </div>
      ) : (
        <p>loading icon filler</p>
      )}
    </>
  );
}

{
  /* <ChatListItem active>
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
          </ChatListItem> */
}
export default UserChatList;
