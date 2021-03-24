import React, { useState, useEffect } from "react";
import useModal from "../hooks/useModal";
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
import { Modal, Button, InputGroup, Form } from "react-bootstrap";
function UserChatList({ minimize, props }) {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.chats);
  const users = useSelector((state) => state.user.users);
  const status = useSelector((state) => state.chat.status);
  const activeUsurper = useSelector((state) => state.user.activeUser);
  const [searchResults, setSearchResults] = useState(users);
  const [searchString, setSearchString] = useState("");
  const [modalActive, openModal, closeModal] = useModal();

  useEffect(() => {
    //gets users chats
    dispatch(chatActions.getUserChatsThunk(activeUsurper[0].id));
  }, []);

  console.log(searchResults);

  const arrow = props;
  //We need to fix this
  const avatarPic = activeUsurper.profilePic;

  const onSearch = (e) => {
    return users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchString.toLowerCase()) ||
        user.firstName.toLowerCase() === searchString.toLowerCase() ||
        user.lastName.toLowerCase().includes(searchString.toLowerCase()) ||
        user.lastName.toLowerCase() === searchString.toLowerCase() ||
        user.username.includes(searchString) ||
        user.username === searchString ||
        user.email.includes(searchString) ||
        user.email === searchString
    );
  };

  return (
    <>
      <Modal show={modalActive} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>New Chat</Modal.Title>
        </Modal.Header>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            onChange={(e) => {
              setSearchString(e.target.value);
              setSearchResults(onSearch(e));
            }}
          />
        </InputGroup>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

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
                  openModal();
                  dispatch(userActions.getAllUsersThunk());
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
                        dispatch(chatActions.getSingleChatThunk(cht.chatId));
                      }}
                    >
                      {/* {avatarPic === "" ? (
                        <Avatar letter={cht.firstName[0]} />
                      ) : (
                        <Avatar imgUrl={avatarPic} />
                      )} */}
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

export default UserChatList;
