import React, { useState } from "react";
import UserBar from "./SingleChat";
import UserChatList from "./UserChatList";
function Maximized(props) {
  const { handleSocketSend } = props;
  const [arrow, setArrow] = useState(false);

  return (
    <div style={{ maxWidth: "100%", height: 400 }}>
      {arrow ? (
        <UserBar handleSocketSend={handleSocketSend} props={setArrow} />
      ) : (
        <UserChatList props={setArrow} />
      )}
    </div>
  );
}
export default Maximized;
