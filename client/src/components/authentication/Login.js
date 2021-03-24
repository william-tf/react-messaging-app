import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { userActions } from "../../store/ducks/userDuck";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
};

export default function Login() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/auth/login", form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setTimeout(function () {
          dispatch(userActions.getUserByUsernameThunk(form.username));
          history.push("/chat");
        }, 30);
      })
      .catch((err) => {
        console.log(err);
      });
    setForm(initialState);
  };

  return (
    <div style={{ width: "30%", margin: "10% auto auto auto" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label style={{ textAlign: "left" }}>Username</label>
          <Input
            placeholder="Username"
            name="username"
            value={form.username}
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label style={{ textAlign: "left" }}>Password</label>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={onChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
