import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUp";
// import Maximized from '../components./Maximized'
// import Minimized from '../components./Minimized'
import {
  ThemeProvider,
  FixedWrapper,
  darkTheme,
  elegantTheme,
  purpleTheme,
  defaultTheme,
} from "@livechat/ui-kit";
function App() {
  const { push } = useHistory();

  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/auth/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
