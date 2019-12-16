import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from "../Main/Main";
import History from "../History/History";

import styles from "./styles";

const App = () => {
  return (
      <Router>
        <div>
        <div style={styles}>
          <Link to="/Main">Главная</Link>
          <Link to="/history">История</Link>
        </div>
          <Switch>
            <Route path="/Main">
              <Main />
            </Route>
            <Route path="/history">
              <History />
            </Route>
          </Switch>
        </div>
      </Router>
  );

};

export default App;
