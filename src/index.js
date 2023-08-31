import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Task1 from './components/task1/task/task.component';
import Task2 from './components/task2/task2.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App/>}>
          <Route path="/" exact 
            element={
              <p style={{textAlign:"center",fontSize:'32px'}}>
                Click on the links (task1 and task2) above to see the tasks.
              </p>
            }
          />
          <Route path="/task1" exact element={<Task1/>}/>
          <Route path="/task2" exact element={<Task2/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
