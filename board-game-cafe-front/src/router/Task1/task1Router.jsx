import Task1Detail from "../../pages/Task1/Task1Detail";
import Task1Page from "../../pages/Task1/Task1Page";
import Task1RootLayout from "../../pages/Task1/Task1RootLayout";
import Test from "../../pages/Test/Test";

// Task1 을 감싸게 되는 Root 레이아웃을 선언하고 해당 라우터 기준으로 상대 주소를 부여
const Task1Router = [
  {
    path: "task1",
    element: <Task1RootLayout />,
    children: [
      { index: true, element: <Task1Page /> },
      { path: ":taskNumber", element: <Task1Detail /> },
    ],
  },
  { path: "test", element: <Test /> },
];

export default Task1Router;
