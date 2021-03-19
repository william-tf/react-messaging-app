import React, { useEffect } from "react";
import {
  ThemeProvider,
  FixedWrapper,
  darkTheme,
  elegantTheme,
  purpleTheme,
  defaultTheme,
} from "@livechat/ui-kit";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUp";
import ChatDashboard from "./components/chat/ChatDashboard";

const theme = {
  ...purpleTheme,
  TextComposer: {
      ...purpleTheme.TextComposer,
      css: {
          ...purpleTheme.TextComposer.css,
          marginTop: '1em',
      },
  },
  OwnMessage: {
      ...purpleTheme.OwnMessage,
      secondaryTextColor: '#fff',
  },
}


function App() {
  const { push } = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/auth/signup" component={SignUp} />
          <PrivateRoute path="/chat" component={ChatDashboard} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
