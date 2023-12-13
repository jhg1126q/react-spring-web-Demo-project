import Task1Detail from "../../pages/Task1/Task1Detail";
import Task1Page from "../../pages/Task1/Task1Page";

const Task1Router = [
  { path: "task1", element: <Task1Page /> },
  { path: "task1/:taskNumber", element: <Task1Detail /> },
];

export default Task1Router;
