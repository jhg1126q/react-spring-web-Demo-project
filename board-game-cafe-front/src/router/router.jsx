import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Error from "../pages/Error/Error";
import Task1Router from "./Task1/task1Router";
import Task2Router from "./Task2/task2Router";
import Login from "../pages/Login/Login";
import Join from "../pages/Login/Join";
import UserList from "../pages/User/UserList";
import AddUser from "../pages/User/AddUser";

// 업무별 라우터 분리 및 병합
// 태그가 element에 들어가 있어 jsx로 반환해주어야지 인식 가능
// children path에 '/'이 앞에 붙어있다면 절대 경로
// 여기에서 <Main/> 은 래핑 컴포넌트 입니다
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      ...Task1Router,
      ...Task2Router,
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "join", element: <Join /> },
      { path: "user", element: <UserList /> },
      { path: "addUser", element: <AddUser /> },
    ],
  },
]);

export default router;
