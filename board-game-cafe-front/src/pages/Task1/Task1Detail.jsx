import React from "react";
import { useParams, Link } from "react-router-dom";

const Task1Detail = () => {
  // useParams에서는 Link 에서 ':' 데이터에 맵핑되어서 넘어온 것들이 담겨져있다.
  const taskNumber = useParams();

  // 절대 경로일 경우에는 상관없습니다. 상대경로일 때만 주의
  // relative 없이 '..' 을 사용하면 상위 부모의 주소로 접근한다
  // 즉 children을 가지고 있는 곳으로 이동합니다
  // relative 에 'path'를 입력하게 된다면 세그먼트 하나만 날려버립니다
  return (
    <>
      <p>안녕하세요 Task1Detail 입니다 {taskNumber.taskNumber}</p>
      <Link to=".." relative="path">
        뒤로가기
      </Link>
    </>
  );
};

export default Task1Detail;
