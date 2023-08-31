import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Generics from './Generics';
import GenericsFunct from './GenericFunct';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Q: when did destructuring assignment get added to JS?
// A: ES6
const unDestructured = { a: 1, b: 2 };
const { a, b } = unDestructured;

const unDestructuredArray = [1, 2, 3];
const [first, second, third] = unDestructuredArray;

root.render(
  <React.StrictMode>
    <Generics/>
    <GenericsFunct/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
