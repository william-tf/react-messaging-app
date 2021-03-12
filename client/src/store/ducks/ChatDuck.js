import {
  getAllUsersChats,
  getChatById,
  addNewChat,
  editChatbyId,
  deleteChatById,
} from "../../components/utils/otherAxiosCalls";

export const types = {
  GET_USER_CHATS_START: "GET_USER_CHATS_START",
  GET_USER_CHATS_SUCCESS: "GET_USER_CHATS_SUCCESS",
  GET_USER_CHATS_ERROR: "GET_USER_CHATS_ERROR",
  GET_USER_CHATS_RESOLVE: "GET_USER_CHATS_RESOLVE",
  GET_CHAT_START: "GET_CHAT_START",
  GET_CHAT_SUCCESS: "GET_CHAT_SUCCESS",
  GET_CHAT_ERROR: "GET_CHAT_ERROR",
  GET_CHAT_RESOLVE: "GET_CHAT_RESOLVE",
  POST_CHAT_START: "POST_CHAT_START",
  POST_CHAT_SUCCESS: "POST_CHAT_SUCCESS",
  POST_CHAT_ERROR: "POST_CHAT_ERROR",
  POST_CHAT_RESOLVE: "POST_CHAT_RESOLVE",
  PUT_CHAT_START: "PUT_CHAT_START",
  PUT_CHAT_SUCCESS: "PUT_CHAT_SUCCESS",
  PUT_CHAT_ERROR: "PUT_CHAT_ERROR",
  PUT_CHAT_RESOLVE: "PUT_CHAT_RESOLVE",
  DELETE_CHAT_START: "DELETE_CHAT_START",
  DELETE_CHAT_SUCCESS: "DELETE_CHAT_SUCCESS",
  DELETE_CHAT_ERROR: "DELETE_CHAT_ERROR",
  DELETE_CHAT_RESOLVE: "DELETE_CHAT_RESOLVE",
};

export const chatActions = {
  getUserChatsThunk: (userId) => (dispatch) => {
    dispatch({ type: GET_USER_CHATS_START });
    getAllUsersChats(userId)
      .then((res) => {
        dispatch({ type: GET_USER_CHATS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_USER_CHATS_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: GET_USER_CHATS_RESOLVE });
      });
  },

  getSingleChatThunk: (chatId) => (dispatch) => {
    dispatch({ type: GET_CHAT_START });
    getChatById(chatId)
      .then((res) => {
        dispatch({ type: GET_CHAT_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_CHAT_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: GET_CHAT_RESOLVE });
      });
  },

  addChatThunk: (newChat) => (dispatch) => {
    dispatch({ type: POST_CHAT_START });
    addNewChat(newChat)
      .then((res) => {
        dispatch({ type: POST_CHAT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: POST_CHAT_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: POST_CHAT_RESOLVE });
      });
  },

  editChatThunk: (chatId, newChat) => (dispatch) => {
    dispatch({ type: PUT_CHAT_START });
    editChatbyId(chatId, newChat)
      .then((res) => {
        dispatch({ type: PUT_CHAT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: PUT_CHAT_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: PUT_CHAT_RESOLVE });
      });
  },

  deleteChatThunk: (chatId) => (dispatch) => {
    dispatch({ type: DELETE_CHAT_START });
    deleteChatById(chatId)
      .then((res) => {
        dispatch({ type: DELETE_CHAT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: DELETE_CHAT_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: DELETE_CHAT_RESOLVE });
      });
  },
};

const chatInitialState = {
  chats: [],
  chat: {},
  status: "idle",
  error: "",
};

const chatReducer = (state = chatInitialState, action) => {
  switch (action.type) {
    case types.GET_USER_CHATS_START:
      return {
        ...state,
        status: "get/pending",
      };
    case types.GET_USER_CHATS_SUCCESS:
      return {
        ...state,
        chats: action.payload,
        status: "get/success",
      };
    case types.GET_USER_CHATS_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "get/error",
      };
    case types.GET_USER_CHATS_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.GET_CHAT_START:
      return {
        ...state,
        status: "get/pending",
      };
    case types.GET_CHAT_SUCCESS:
      return {
        ...state,
        chat: action.payload,
        status: "get/success",
      };
    case types.GET_CHAT_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "get/error",
      };
    case types.GET_CHAT_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.POST_CHAT_START:
      return {
        ...state,
        status: "post/pending",
      };
    case types.POST_CHAT_SUCCESS:
      return {
        ...state,
        status: "post/success",
      };
    case types.POST_CHAT_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "post/error",
      };
    case types.POST_CHAT_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.PUT_CHAT_START:
      return {
        ...state,
        status: "put/pending",
      };
    case types.PUT_CHAT_SUCCESS:
      return {
        ...state,
        status: "put/success",
      };
    case types.PUT_CHAT_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "put/error",
      };
    case types.PUT_CHAT_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.DELETE_CHAT_START:
      return {
        ...state,
        status: "delete/pending",
      };
    case types.DELETE_CHAT_SUCCESS:
      return {
        ...state,
        status: "delete/success",
      };
    case types.DELETE_CHAT_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "delete/error",
      };
    case types.DELETE_CHAT_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    default:
      return state;
  }
};

export default chatReducer;
