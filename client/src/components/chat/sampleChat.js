import * as React from "react";
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

import ChatCard from './Maximized'
import Minimized from './chatMinimzed'
//import ChatList from './chatList'

const chatSample = () => {
    return(
        <FixedWrapper.Root >
            <FixedWrapper.Maximized style={{
                maxWidth:"400 !important"
            }}>
            <ChatCard />
           
            </FixedWrapper.Maximized >
            <FixedWrapper.Minimized active="false">
            <Minimized />
            </FixedWrapper.Minimized>
        </FixedWrapper.Root>
            
    )
}
{/* <FixedWrapper.Root maximizedOnInit>
            <FixedWrapper.Maximized></FixedWrapper.Maximized>
            </FixedWrapper.Maximized>
        </FixedWrapper.Root> */}
export default chatSample