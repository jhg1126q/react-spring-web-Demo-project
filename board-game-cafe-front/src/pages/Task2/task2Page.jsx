import { Link } from "react-router-dom";

const task2Page = () => {
  return (
    <>
      <Link to="/">홈페이지</Link>
      <Link to="/task1">페이지 1로 갑니다</Link>
      <p>Task2Page 입니다 </p>;
    </>
  );
};

export default task2Page;
