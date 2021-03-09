import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from '@livechat/ui-kit'
import {Route, Switch} from 'react-router-dom'
import Login from './components/authentication/Login'
import SignUp from './components/authentication/SignUp'
// import Maximized from '../components./Maximized'
// import Minimized from '../components./Minimized'
import { ThemeProvider, FixedWrapper, darkTheme, elegantTheme, purpleTheme, defaultTheme } from '@livechat/ui-kit'
function App() {
  return (
    <div className="App">
      <Switch>
     <Route path="/login" component={Login}/>
     <Route path ="/signup" component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
