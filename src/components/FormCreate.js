import React, { useState } from "react";
import { Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/usersSlice";

const FormCreate = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const save = () => {
    const data = {
      username: username,
      email: email,
      address: address,
    };
    dispatch(createUser(data));
  };

  return (
    <>
      <Input.Group>
        <Input
          placeholder={"Username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder={"Address"}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Input.Group>
      <Button onClick={save}>Save</Button>
    </>
  );
};

export default FormCreate;
