import React from "react";
import classes from "./ChatPage.module.css";
import ChatUserList from "./ChatUserList";

const ChatPage = (props) => {
  return (
    <>
      <section className={classes.container}>
        <ChatUserList></ChatUserList>
      </section>
    </>
  );
};

export default ChatPage;
