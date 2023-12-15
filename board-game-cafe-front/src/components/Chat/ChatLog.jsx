import React from "react";
import classes from "./ChatLog.module.css";
import ChatFooter from "../UI/Footer/ChatFooter";

const ChatLog = (props) => {
  const DUMMY_CHAT_DATA = [
    {
      selfCheck: false,
      msgTxt: "안녕하세요",
      imgSrc: "https://goo.gl/1D6wCQ",
    },
    {
      selfCheck: true,
      msgTxt: "Hello sweetheart. I'm coming home sooner today.",
      imgSrc: "https://goo.gl/oZRdgO",
    },
    {
      selfCheck: false,
      msgTxt: "Sure",
      imgSrc: "https://goo.gl/1D6wCQ",
    },
    {
      selfCheck: true,
      msgTxt: "Yaaaay! Bring me some chocolate!",
      imgSrc: "https://goo.gl/oZRdgO",
    },
    {
      selfCheck: false,
      msgTxt: "Ok. Bye!",
      imgSrc: "https://goo.gl/1D6wCQ",
    },
  ];

  return (
    <section className={classes.main}>
      <section className={classes.messages}>
        {DUMMY_CHAT_DATA.map((data) => {
          return (
            <ChatMsg
              selfCheck={data.selfCheck}
              msgTxt={data.msgTxt}
              imgSrc={data.imgSrc}
            />
          );
        })}
      </section>
      <ChatFooter></ChatFooter>
    </section>
  );
};

export default ChatLog;
