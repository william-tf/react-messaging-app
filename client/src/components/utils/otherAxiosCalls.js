import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const baseAxiosCall = () => {
  return axios.create({
    baseURL: "http://localhost:8000",
  });
};

export const login = (credentials) => {
  const { email, password } = credentials;

  return baseAxiosCall()
    .post("/auth/login", {
      email: email,
      password: password,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const register = (newUser) => {
  const {
    username,
    email,
    password,
    firstName,
    lastName,
    profilePic,
  } = newUser;

  return baseAxiosCall()
    .post("/auth/signup", {
      username: username,
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      profilePic: profilePic,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getSingleUserById = (userId) => {
  return axiosWithAuth()
    .get(`/users/${userId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getAllUsers = () => {
  return axiosWithAuth()
    .get("/users/all")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const putExistingUserById = (userId, editedUser) => {
  return axiosWithAuth()
    .put(`/users/${userId}`, editedUser)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteUserById = (userId) => {
  return axiosWithAuth()
    .delete(`/users/${userId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
