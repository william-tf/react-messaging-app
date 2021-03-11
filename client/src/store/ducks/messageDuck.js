import {
  getAllChatMessages,
  getMessageById,
  addMessage,
  editMessageById,
  deleteMessageById,
} from "../../components/utils/otherAxiosCalls";

export const types = {
  GET_CHAT_MESSAGES_START: "GET_CHAT_MESSAGES_START",
  GET_CHAT_MESSAGES_SUCCESS: "GET_CHAT_MESSAGES_SUCCESS",
  GET_CHAT_MESSAGES_ERROR: "GET_CHAT_MESSAGES_ERROR",
  GET_CHAT_MESSAGES_RESOLVE: "GET_CHAT_MESSAGES_RESOLVE",
  GET_MESSAGE_START: "GET_MESSAGE_START",
  GET_MESSAGE_SUCCESS: "GET_MESSAGE_SUCCESS",
  GET_MESSAGE_ERROR: "GET_MESSAGE_ERROR",
  GET_MESSAGE_RESOLVE: "GET_MESSAGE_RESOLVE",
  POST_MESSAGE_START: "POST_MESSAGE_START",
  POST_MESSAGE_SUCCESS: "POST_MESSAGE_SUCCESS",
  POST_MESSAGE_ERROR: "POST_MESSAGE_ERROR",
  POST_MESSAGE_RESOLVE: "POST_MESSAGE_RESOLVE",
  PUT_MESSAGE_START: "PUT_MESSAGE_START",
  PUT_MESSAGE_SUCCESS: "PUT_MESSAGE_SUCCESS",
  PUT_MESSAGE_ERROR: "PUT_MESSAGE_ERROR",
  PUT_MESSAGE_RESOLVE: "PUT_MESSAGE_RESOLVE",
  DELETE_MESSAGE_START: "DELETE_MESSAGE_START",
  DELETE_MESSAGE_SUCCESS: "DELETE_MESSAGE_SUCCESS",
  DELETE_MESSAGE_ERROR: "DELETE_MESSAGE_ERROR",
  DELETE_MESSAGE_RESOLVE: "DELETE_MESSAGE_RESOLVE",
};

export const messageActions = {
  getChatMessagesThunk: (chatId) => (dispatch) => {
    dispatch({ type: types.GET_CHAT_MESSAGES_START });
    getAllChatMessages(chatId)
      .then((res) => {
        dispatch({ type: types.GET_CHAT_MESSAGES_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_CHAT_MESSAGES_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.GET_CHAT_MESSAGES_RESOLVE });
      });
  },

  getMessageThunk: (messageId) => (dispatch) => {
    dispatch({ type: types.GET_MESSAGE_START });
    getMessageById(messageId)
      .then((res) => {
        dispatch({ type: types.GET_MESSAGE_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_MESSAGE_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.GET_MESSAGE_RESOLVE });
      });
  },

  addMessageThunk: (newMessage) => (dispatch) => {
    dispatch({ type: types.POST_MESSAGE_START });
    addMessage(newMessage)
      .then((res) => {
        dispatch({ type: types.POST_MESSAGE_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.POST_MESSAGE_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.POST_MESSAGE_RESOLVE });
      });
  },

  editMessageThunk: (messageId, editedMessage) => (dispatch) => {
    dispatch({ type: types.PUT_MESSAGE_START });
    editMessageById(messageId, editedMessage)
      .then((res) => {
        dispatch({ type: types.PUT_MESSAGE_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.PUT_MESSAGE_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.PUT_MESSAGE_RESOLVE });
      });
  },

  deleteMessageThunk: (messageId) => (dispatch) => {
    dispatch({ type: types.DELETE_MESSAGE_START });
    addMessage(messageId)
      .then((res) => {
        dispatch({ type: types.DELETE_MESSAGE_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.DELETE_MESSAGE_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.DELETE_MESSAGE_RESOLVE });
      });
  },
};

const messageInitialState = {
  messages: [],
  message: {},
  status: "idle",
  error: "",
};

const messageReducer = (state = messageInitialState, action) => {
  switch (action.type) {
    case types.GET_CHAT_MESSAGES_START:
      return {
        ...state,
        status: "get/pending",
      };
    case types.GET_CHAT_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        status: "get/success",
      };
    case types.GET_CHAT_MESSAGES_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "get/error",
      };
    case types.GET_CHAT_MESSAGES_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.GET_MESSAGE_START:
      return {
        ...state,
        status: "get/pending",
      };
    case types.GET_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
        status: "get/success",
      };
    case types.GET_MESSAGE_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "get/error",
      };
    case types.GET_MESSAGE_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.POST_MESSAGE_START:
      return {
        ...state,
        status: "post/pending",
      };
    case types.POST_MESSAGE_SUCCESS:
      return {
        ...state,
        status: "post/success",
      };
    case types.POST_MESSAGE_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "post/error",
      };
    case types.POST_MESSAGE_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.PUT_MESSAGE_START:
      return {
        ...state,
        status: "put/pending",
      };
    case types.PUT_MESSAGE_SUCCESS:
      return {
        ...state,
        status: "put/success",
      };
    case types.PUT_MESSAGE_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "put/error",
      };
    case types.PUT_MESSAGE_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.DELETE_MESSAGE_START:
      return {
        ...state,
        status: "delete/pending",
      };
    case types.DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        status: "delete/success",
      };
    case types.DELETE_MESSAGE_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "delete/error",
      };
    case types.DELETE_MESSAGE_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    default:
      return state;
  }
};

export default messageReducer;
