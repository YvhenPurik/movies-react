import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

const App = props => (
  <Router basename="/movies/">
    <div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
      </Switch>
    </div>
  </Router>
);

export default App;
