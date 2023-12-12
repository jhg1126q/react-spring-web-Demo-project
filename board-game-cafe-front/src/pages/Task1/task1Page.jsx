import { Link } from "react-router-dom";

const task1Page = () => {
  return (
    <>
      <Link to="/">홈페이지</Link>
      <Link to="/task2">페이지 2로 갑니다</Link>
      <p>Task1Page 입니다</p>;
    </>
  );
};

export default task1Page;
