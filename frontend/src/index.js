import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root')); //This root is the id from the index.html file, what this does is it will display the content we wrote under this "root" id
root.render( //the render() function loads whatever is inside the div tag in the index.html file line 33
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);


