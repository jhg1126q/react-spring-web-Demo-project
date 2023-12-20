import AddUser from "../../pages/User/AddUser";
import UserRootLayout from "../../pages/User/UserRootLayout";
import UserDetail, {
  loader as userDetailLoader,
} from "../../pages/User/UserDetail";
import UserList, { loader as userListLoader } from "../../pages/User/UserList";

const UserRouter = [
  {
    path: "user",
    element: <UserRootLayout />,
    children: [
      { index: true, element: <UserList />, loader: userListLoader },
      { path: ":userId", element: <UserDetail />, loader: userDetailLoader },
    ],
  },
  { path: "addUser", element: <AddUser /> },
];

export default UserRouter;
