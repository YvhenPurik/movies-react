import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/redusers/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBfN7Fo6UJZnejv-p3ILBwiZN6UX8UIWkY",
  authDomain: "movie-react-65403.firebaseapp.com",
  databaseURL: "https://movie-react-65403.firebaseio.com",
  projectId: "movie-react-65403",
  storageBucket: "movie-react-65403.appspot.com",
  messagingSenderId: "217562758344"
};
firebase.initializeApp(config);

const store = configureStore();
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
