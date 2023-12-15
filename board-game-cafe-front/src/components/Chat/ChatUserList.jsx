import React from "react";

import classes from "./ChatUserList.module.css";
import ChatUser from "./ChatUser";

/*  Props 정리 
userName : 해당 메세지 유저 이름
imgSrc : 이미지 경로
lastTxt : 최신전송 메세지
lastTime : 최신발송시간
*/

const ChatUserList = (props) => {
  const DUMMY_USERLIST = [
    {
      imgSrc: "https://goo.gl/1D6wCQ",
      userName: "Marina Braga",
      lastTxt: "Ok. Bye!",
      lastTime: "최근",
    },
    {
      imgSrc: "https://goo.gl/xjYA9J",
      userName: "Isah Cacique",
      lastTxt: "Party tonight, ok?",
      lastTime: "18:52",
    },
  ];

  return (
    <aside>
      <ChatHeader></ChatHeader>
      <ul>
        {DUMMY_USERLIST.map((data) => {
          return (
            <li>
              <ChatUser
                imgSrc={data.imgSrc}
                userName={data.userName}
                lastTxt={data.lastTxt}
                lastTime={data.lastTime}
              ></ChatUser>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ChatUserList;
