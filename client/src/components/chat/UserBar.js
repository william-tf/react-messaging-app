import React, { useState } from "react";
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

function UserBar({ minimize, props }) {
  const arrow = props;
  const name = "seth mc pooper";
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
            <Column flexFit>
              <Row>
                <IconButton>
                  <RateGoodIcon
                    style={{
                      opacity: "0.5",
                    }}
                  />
                </IconButton>
                <IconButton>
                  <RateBadIcon
                    style={{
                      opacity: "1",
                    }}
                  />
                </IconButton>
              </Row>
            </Column>
          </Row>
        </AgentBar>
        <MessageList active>
          <MessageGroup
            avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
            onlyFirstWithMeta
          >
            <Message authorName={name} date="21:37" showMetaOnClick>
              <MessageMedia>
                <img src="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png" />
              </MessageMedia>
            </Message>
            <Message authorName={name} date="21:37">
              <MessageTitle title="Message title" subtitle="24h" />
              <MessageMedia>
                <img src="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png" />
              </MessageMedia>
              <MessageText>
                The fastest way to help your customers - start chatting with
                visitors
              </MessageText>
              <MessageButtons>
                <MessageButton label="View more" primary />
                <MessageButton label="Cancel" />
              </MessageButtons>
              <MessageText>
                The fastest way to help your customers - start chatting with
                visitors who need your help using a free 30-day trial.
              </MessageText>
              <MessageButtons>
                <MessageButton label="View more" primary />
                <MessageButton label="Cancel" />
              </MessageButtons>
            </Message>
            <Message date="21:38" authorName={name}>
              <MessageText>Hi! I would like to buy those shoes</MessageText>
            </Message>
          </MessageGroup>
          <MessageGroup onlyFirstWithMeta>
            <Message date="21:38" isOwn={true} authorName="Visitor">
              <MessageText>
                I love them
                sooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
                much!
              </MessageText>
            </Message>
            <Message date="21:38" isOwn={true} authorName="Visitor">
              <MessageText>This helps me a lot</MessageText>
            </Message>
          </MessageGroup>
          <MessageGroup
            avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
            onlyFirstWithMeta
          >
            <Message authorName={name} date="21:37">
              <MessageText>No problem!</MessageText>
            </Message>
            <Message
              authorName={name}
              imageUrl="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png"
              date="21:39"
            >
              <MessageText>
                The fastest way to help your customers - start chatting with
                visitors who need your help using a free 30-day trial.
              </MessageText>
            </Message>
            <Message authorName={name} date="21:39">
              <MessageMedia>
                <img src="https://static.staging.livechatinc.com/1520/P10B78E30V/dfd1830ebb68b4eefe6432d7ac2be2be/Cat-BusinessSidekick_Wallpapers.png" />
              </MessageMedia>
            </Message>
          </MessageGroup>
        </MessageList>
      </div>
    </div>
  );
}

export default UserBar;
