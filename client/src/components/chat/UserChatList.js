import React, {useState} from 'react'
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
    ChatListItem
  } from "@livechat/ui-kit";
import {Dropdown} from 'semantic-ui-react'
const options = [
  {key:1, text:'test', value:1},
  {key:2, text: 'testf', value:2}
]

function DroppedDown(){
  return(
    <div>
      <Dropdown clearable options={options} selection/>
    </div>
  )
}


function UserChatList({minimize, props}){
    console.log('PROPS USERCHATLIST', props)
   const arrow = props
   const [drop, setDrop] = useState(false)
    return(
        <div
    style={{
      display: "flex",
      border: '5px solid black',
      flexDirection: "column",
      height: "100%",
      maxWidth: "100%"
    }}
  >
    <TitleBar
      rightIcons={[
        <IconButton key="close" onClick={minimize}>
          <CloseIcon />
        </IconButton>,
      ]}
      leftIcons={[
        
        <IconButton onClick={() => {console.log('to add another conversation')}}>
          <i className="material-icons">add</i>
        </IconButton>,
        <IconButton onClick={() => {setDrop(!drop)}}>
          {
            drop ? <DroppedDown/> : <i className="material-icons">settings</i>
          }   
        </IconButton>
      ]}
      title="Welcome to WhosApp"
    />
        <div style={{
            display:'flex',
            flexDirection:'row'
          }}>
            <div style = {{
            maxWidth: "100%"
          }}>
        <ChatList >
        <ChatListItem onClick={() => arrow(true)}>
          <Avatar letter="K" />
          <Column fill>
            <Row justify>
              <Title ellipsis>{'Konrad'}</Title>
              <Subtitle nowrap>{'14:31 PM'}</Subtitle>
            </Row>
            <Subtitle ellipsis>
              {'Hello, how can I help you? We have a lot to talk about'}
            </Subtitle>
          </Column>
        </ChatListItem>
        <ChatListItem active>
          <Avatar letter="J" />
          <Column fill>
            <Row justify>
              <Title ellipsis>{'Andrew'}</Title>
              <Subtitle nowrap>{'14:31 PM'}</Subtitle>
            </Row>
            <Subtitle ellipsis>{'actually I just emailed you back'}</Subtitle>
          </Column>
        </ChatListItem>
        <ChatListItem>
          <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
          <Column fill>
            <Row justify>
              <Title ellipsis>{'Michael'}</Title>
              <Subtitle nowrap>{'14:31 PM'}</Subtitle>
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
    )
}

export default UserChatList