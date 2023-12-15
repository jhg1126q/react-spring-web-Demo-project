import React from "react";

import classes from "./ChatUserList.module.css";
import ChatUser from "./ChatUser";
import ChatHeader from "../UI/Header/ChatHeader";

/*  Props 정리 
userName : 해당 메세지 유저 이름
imgSrc : 이미지 경로
lastTxt : 최신전송 메세지
lastTime : 최신발송시간
*/

const ChatUserList = (props) => {
  const DUMMY_USERLIST = [
    {
      id: 1,
      imgSrc: "https://avatarhosting.demolution.net/pics/49034/wolf3.jpg",
      userName: "Marina Braga",
      lastTxt: "Ok. Bye!",
      lastTime: "최근",
    },
    {
      id: 2,
      imgSrc: "https://avatarhosting.demolution.net/pics/20330/DSC00063.jpg",
      userName: "Isah Cacique",
      lastTxt: "Party tonight, ok?",
      lastTime: "18:52",
    },
  ];

  return (
    <aside>
      <ChatHeader
        imgSrc={
          "https://avatarhosting.demolution.net/pics/50736/StoneStepkhkuj.jpg"
        }
        title={"채팅방"}
      ></ChatHeader>
      <ul>
        {DUMMY_USERLIST.map((data) => {
          return (
            <li key={data.id}>
              <ChatUser
                imgSrc={data.imgSrc}
                userName={data.userName}
                lastTxt={data.lastTxt}
                lastTime={data.lastTime}
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ChatUserList;
