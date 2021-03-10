import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  userName: "",
};

export default function SignUp() {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New User ==> ", form);
    setForm(initialState);
  };

  return (
    <div style={{ width: "30%", margin: "10% auto auto auto" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Field width={8}>
            <label style={{ textAlign: "left" }}>First Name</label>
            <Input
              placeholder="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field width={8}>
            <label style={{ textAlign: "left" }}>Last Name</label>
            <Input
              placeholder="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label style={{ textAlign: "left" }}>Email</label>
          <Input
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label style={{ textAlign: "left" }}>User Name</label>
          <Input
            placeholder="User Name"
            name="userName"
            value={form.userName}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label style={{ textAlign: "left" }}>Password</label>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
