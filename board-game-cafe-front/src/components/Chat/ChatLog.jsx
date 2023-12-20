import React from "react";
import classes from "./ChatLog.module.css";
import ChatFooter from "../UI/Footer/ChatFooter";
import ChatMsg from "./ChatMsg";

const ChatLog = (props) => {
  const DUMMY_CHAT_DATA = [
    {
      id: 1,
      selfCheck: false,
      msgTxt: "안녕하세요",
      imgSrc: "https://avatarhosting.demolution.net/pics/49034/wolf3.jpg",
    },
    {
      id: 2,
      selfCheck: true,
      msgTxt: "반갑습니다 저는 뱀입니다.",
      imgSrc: "https://avatarhosting.demolution.net/pics/20330/DSC00063.jpg",
    },
    {
      id: 3,
      selfCheck: false,
      msgTxt: "저는 늑대입니다. 만나서 반가워요!",
      imgSrc: "https://avatarhosting.demolution.net/pics/49034/wolf3.jpg",
    },
    {
      id: 4,
      selfCheck: true,
      msgTxt: "다음 주 모임에 참석하시는지 알고 싶습니다.",
      imgSrc: "https://avatarhosting.demolution.net/pics/20330/DSC00063.jpg",
    },
    {
      id: 5,
      selfCheck: false,
      msgTxt: "회식은 절대 불참합니다. 연락하지 마세요",
      imgSrc: "https://avatarhosting.demolution.net/pics/49034/wolf3.jpg",
    },
  ];

  return (
    <section className={classes.main}>
      <section className={classes.messages}>
        {DUMMY_CHAT_DATA.map((data) => {
          return (
            <ChatMsg
              key={data.id}
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
