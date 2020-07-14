import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ListView from './ListView';
import store from './redux/store';
import CreateListEntryView from './CreateListEntryView';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/ranker/' exact={true} component={ListView} />
        <Route path='/ranker/create' component={CreateListEntryView} />
      </Router>
    </Provider>
  );
}

export default App;
