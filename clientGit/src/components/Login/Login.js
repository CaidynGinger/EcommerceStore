import React, { useEffect, useState } from "react";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";
import classes from "./Login.module.css";
import axios from "axios";

export const Login = (props) => {
  const [LoginCss, setLoginCss] = useState(`${classes.login}`);
  const [LoginCardCss, setLoginCardCss] = useState(`${classes.login_card}`);

  const [FormDetails, setFormDetails] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (props.ShowLogin) {
      setLoginCss(`${classes.login} ${classes.show}`);
      setLoginCardCss(`${classes.login_card} ${classes.show_card}`);
    } else {
      setLoginCss(`${classes.login}`);
      setLoginCardCss(`${classes.login_card}`);
    }
    console.log("effect");
  }, [props.ShowLogin]);

  const LoginHandler = () => {
    console.log(FormDetails);
    const options = {
      method: "POST",
      url: "http://localhost:5000/api/login-user",
      headers: { "Content-Type": "application/json" },
      data: { username: FormDetails.username, password: FormDetails.password },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        if (!response.data) {
          setErrorMessage("Username or password is incorrect!");
        } else {
          setErrorMessage("");
          setLoginCss(`${classes.login}`);
          setLoginCardCss(`${classes.login_card}`);
          props.setUserDetails(response.data);
          setFormDetails({
            username: "",
            password: "",
          });
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <div onClick={props.showLoginHandler} className={LoginCss}></div>
      <div className={LoginCardCss}>
        <h1>Login</h1>
        <div className={classes.inputs}>
          <Input
            type="string"
            label="Username"
            name="username"
            value={FormDetails.username}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            value={FormDetails.password}
            onChange={handleInputChange}
          />
        </div>
        <br></br>
        <p className={classes.login_error}>{errorMessage}</p>
        <br></br>
        <div className={classes.login_btn_container}>
          <Button onClick={LoginHandler}>Login</Button>
        </div>
      </div>
    </div>
  );
};
