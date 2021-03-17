import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { userActions} from '../../store/ducks/userDuck'
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'

const initialState = {
  email: "",
  password: "",
};

export default function Login() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch()
  const history = useHistory()
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form', form)
    axios
      .post("http://localhost:8000/auth/login", form)
      .then((res) => {
        console.log(res.data);
    
        dispatch(userActions.getSingleUserByEmailThunk(form.email))
        history.push('/chat')
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
          <label style={{ textAlign: "left" }}>Email</label>
          <Input
            placeholder="Email"
            name="email"
            value={form.email}
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
