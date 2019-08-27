import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";

const MessageTimeLine = ({ profileImageUrl, userName }) => {
  return (
    <div className="row">
      <UserAside profileImageUrl={ profileImageUrl } userName={ userName } />
      <MessageList />
    </div>
  )
}

export default MessageTimeLine;