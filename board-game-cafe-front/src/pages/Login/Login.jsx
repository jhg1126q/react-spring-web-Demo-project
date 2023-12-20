import React, { useState } from "react";
import Input from "../../components/UI/Input/Input";
import classes from "./Login.module.css";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onIdChangeHandler = (event) => {
    console.log("id test :::: ");
    setId(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    console.log("pass test :::: ");
    setPassword(event.target.value);
  };

  return (
    <>
      <form className={classes.login}>
        <ul>
          <li>
            <label>ID</label>
            <Input value={id} type="text" onChange={onIdChangeHandler} />
          </li>
          <li>
            <label>password</label>
            <Input
              value={password}
              type="password"
              onChange={onPasswordChangeHandler}
            />
          </li>
        </ul>
      </form>
    </>
  );
};

export default Login;
