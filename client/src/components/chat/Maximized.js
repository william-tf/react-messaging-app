import React, {useState} from "react";
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
  ChatListItem
} from "@livechat/ui-kit";
import UserBar from './UserBar'
import UserChatList from './UserChatList'
function Maximized({minimize}) {
  const [arrow, setArrow] = useState(true)



  return(
    
    <div style={{ maxWidth: '100%', height: 400 }}>
   {
     arrow ? <UserBar props={setArrow}/> : <UserChatList props={setArrow}/>
   }
    
    
  </div>
  
  ) 
}
export default Maximized