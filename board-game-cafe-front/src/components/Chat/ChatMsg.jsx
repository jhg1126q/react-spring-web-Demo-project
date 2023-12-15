import React from "react";
import classes from "./ChatMsg.module.css";

/*  Props 정리 
selfCheck : 자기 자신 판별 여부
imgSrc : 이미지 경로
msgTxt : 메시지 전달
*/

const ChatMsg = (props) => {
  return (
    <article className={props.selfCheck ? "right" : undefined}>
      <div className={classes.avatar}>
        <img alt="avatar" src={props.imgSrc} />
      </div>
      <div className={classes.msg}>
        <div className={classes.tri}></div>
        <div className={classes.msg_inner}>{props.msgTxt}</div>
      </div>
    </article>
  );
};

export default ChatMsg;
