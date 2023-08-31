import React from 'react'
import { Link, Outlet } from 'react-router-dom';

import "./App.css";
import "./common.styles.css";

function App() {
  return (
    <>
      <div className="flex task-panel">
        <Link to='/task1' className="text-bold text-dec-none">Task 1</Link>
        <Link to='/task2' className="text-bold text-dec-none">Task 2</Link>
      </div>
      <div className="task-view">
        <Outlet/>
      </div>
    </>
  )
}

export default App
