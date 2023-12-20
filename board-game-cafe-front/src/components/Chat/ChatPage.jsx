import React from "react";
import classes from "./ChatPage.module.css";
import ChatUserList from "./ChatUserList";
import ChatLog from "./ChatLog";

const ChatPage = (props) => {
  return (
    <>
      <section className={classes.container}>
        <ChatUserList></ChatUserList>
        <ChatLog></ChatLog>
      </section>
    </>
  );
};

export default ChatPage;
