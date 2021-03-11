import {
  login,
  register,
  getSingleUserById,
  getAllUsers,
  putExistingUserById,
  deleteUserById,
} from "../../components/utils/otherAxiosCalls";

export const types = {
  GET_USERS_START: "GET_USERS_START",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  GET_USERS_ERROR: "GET_USERS_ERROR",
  GET_USERS_RESOLVE: "GET_USERS_RESOLVE",
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGIN_RESOLVE: "LOGIN_RESOLVE",
  GET_USER_START: "GET_USER_START",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_ERROR: "GET_USER_ERROR",
  GET_USER_RESOLVE: "GET_USER_RESOLVE",
  REGISTER_START: "REGISTER_START",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_ERROR: "REGISTER_ERROR",
  REGISTER_RESOLVE: "REGISTER_RESOLVE",
  PUT_USER_START: "PUT_USER_START",
  PUT_USER_SUCCESS: "PUT_USER_SUCCESS",
  PUT_USER_ERROR: "PUT_USER_ERROR",
  PUT_USER_RESOLVE: "PUT_USER_RESOLVE",
  DELETE_USER_START: "DELETE_USER_START",
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_ERROR: "DELETE_USER_ERROR",
  DELETE_USER_RESOLVE: "DELETE_USER_RESOLVE",
};

export const userActions = {
  loginThunk: (credentials) => (dispatch) => {
    dispatch({ type: types.LOGIN_START });
    login(credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: types.LOGIN_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.LOGIN_ERROR, payload: err });
      })
      .finally(() => {
        dispatch({ type: types.LOGIN_RESOLVE });
      });
  },

  registerThunk: (newUser) => (dispatch) => {
    dispatch({ type: types.REGISTER_START });
    register(newUser)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: types.REGISTER_SUCCESS });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: types.REGISTER_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.REGISTER_RESOLVE });
      });
  },

  getAllUsersThunk: () => (dispatch) => {
    dispatch({ type: types.GET_USERS_START });
    getAllUsers()
      .then((res) => {
        dispatch({ type: types.GET_USERS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_USERS_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.GET_USERS_RESOLVE });
      });
  },

  getSingleUserThunk: (userId) => (dispatch) => {
    dispatch({ type: types.GET_USER_START });
    getSingleUserById(userId)
      .then((res) => {
        dispatch({ type: types.GET_USER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_USER_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.GET_USER_RESOLVE });
      });
  },

  editUserThunk: (userId, editedUser) => (dispatch) => {
    dispatch({ type: types.PUT_USER_START });
    putExistingUserById(userId, editedUser)
      .then((res) => {
        dispatch({ type: types.PUT_USER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.PUT_USER_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.PUT_USER_RESOLVE });
      });
  },

  deleteUserThunk: (userId) => (dispatch) => {
    dispatch({ type: types.DELETE_USER_START });
    deleteUserById(userId)
      .then((res) => {
        dispatch({ type: types.DELETE_USER_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: types.DELETE_USER_ERROR, payload: err.message });
      })
      .finally(() => {
        dispatch({ type: types.DELETE_USER_RESOLVE });
      });
  },
};

const userInitialState = {
  user: {},
  users: [],
  status: "idle",
  error: "",
  loggedIn: false,
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        status: "post/pending",
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        status: "post/success",
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "post/error",
      };
    case types.LOGIN_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.REGISTER_START:
      return {
        ...state,
        status: "post/pending",
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        status: "post/success",
      };
    case types.REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "post/error",
      };
    case types.REGISTER_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.GET_USERS_START:
      return {
        ...state,
        status: "get/pending",
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        status: "get/success",
      };
    case types.GET_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "get/error",
      };
    case types.GET_USERS_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.GET_USER_START:
      return {
        ...state,
        status: "get/pending",
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        status: "get/success",
      };
    case types.GET_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "get/error",
      };
    case types.GET_USER_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.PUT_USER_START:
      return {
        ...state,
        status: "put/pending",
      };
    case types.PUT_USER_SUCCESS:
      return {
        ...state,
        status: "put/success",
      };
    case types.PUT_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "put/error",
      };
    case types.PUT_USER_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    case types.DELETE_USER_START:
      return {
        ...state,
        status: "delete/pending",
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        status: "delete/success",
      };
    case types.DELETE_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "delete/error",
      };
    case types.DELETE_USER_RESOLVE:
      return {
        ...state,
        status: "idle",
      };
    default:
      return state;
  }
};

export default userReducer;
