import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import styles from "./Login.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pwd: "",
      success: false,
    };

    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIdChange(event) {
    this.setState((current) => ({
      id: event.target.value,
      pwd: current.pwd,
      success: current.success,
    }));
  }

  handlePwdChange(event) {
    this.setState((current) => ({
      id: current.id,
      pwd: event.target.value,
      success: current.success,
    }));
  }

  handleSubmit(event) {
    const id = this.state.id;
    const pwd = this.state.pwd;

    let url = "api/login";
    let params = { id: id, pwd: pwd };
    axios
      .put(url, params)
      .then((res) => {
        this.setState((current) => ({
          id: current.id,
          pwd: current.pwd,
          success: true,
        }));
        console.log(res);
      })
      .catch((err) => {
        console.log("axios fail!");
      });

    event.preventDefault();
  }

  render() {
    return (
          <div className={cx("wrapper")}>
            <form onSubmit={this.handleSubmit}>
              <div className={cx("frame")}>
                <h1 className={cx("title")}>Log in</h1>
                <input
                  className={cx("box input")}
                  type="text"
                  id="id"
                  placeholder="Email"
                  onChange={this.handleIdChange}
                />
                <input
                  className={cx("box input")}
                  type="password"
                  id="pwd"
                  placeholder="Password"
                  onChange={this.handlePwdChange}
                />
                <input className={cx("box btn")} type="submit" value="Log in"></input>
              </div>
            </form>
          </div>
          // {this.state.success && <Redirect to="/loggedin" />}
    );
  }
}

export default Login;
