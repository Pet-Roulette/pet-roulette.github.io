import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// var element = React.createElement('h1', { className: 'greeting' }, 'Hello, World!');
// ReactDOM.render(element, document.getElementById('root'));

const myFirstElement = <h1>Hello Rasgct!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
