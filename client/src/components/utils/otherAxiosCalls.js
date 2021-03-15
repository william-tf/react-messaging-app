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

export const getAllChatMessages = (chatId) => {
  return axiosWithAuth()
    .get(`/messages/chat/${chatId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};


export const getMessageById = (messageId) => {
  return axiosWithAuth()
    .get(`/messages/${messageId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const addMessage = (newMessage) => {
  return axiosWithAuth()
    .post("/messages/messages", newMessage)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const editMessageById = (messageId, editedMessage) => {
  return axiosWithAuth()
    .put(`/messages/${messageId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteMessageById = (messageId) => {
  return axiosWithAuth()
    .delete(`/messages/${messageId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getChatById = (chatId) => {
  return axiosWithAuth()
    .get(`/chats/chat/${chatId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getAllUsersChats = (userId) => {
  return axiosWithAuth()
    .get(`/chats/chat/user/${userId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const addNewChat = (newChat) => {
  return axiosWithAuth()
    .post("/chats/chats", newChat)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const editChatbyId = (chatId, editedChat) => {
  return axiosWithAuth()
    .put(`/chats/chat/${chatId}`, editedChat)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteChatById = (chatId) => {
  return axiosWithAuth()
    .delete(`/chats/chat/${chatId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
