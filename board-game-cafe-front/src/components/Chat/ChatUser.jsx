import React from "react";
import classes from "./ChatUser.module.css";
import Avatar from "../Avatar/Avatar";

/*  Props 정리 
userName : 해당 메세지 유저 이름
imgSrc : 이미지 경로
lastTxt : 최신전송 메세지
lastTime : 최신발송시간
*/

const ChatUser = (props) => {
  return (
    <>
      <Avatar
        imgPosition={"left"}
        imgSrc={props.imgSrc}
        isBadge={true}
      ></Avatar>
      <div className={classes.main_li}>
        <div className={classes.username}>{props.userName}</div>
        <div className={classes.text}>{props.lastTxt}</div>
      </div>
      <div className={classes.time}>{props.lastTime}</div>
    </>
  );
};

export default ChatUser;
