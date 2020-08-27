import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Courses from './Component/Courses/Courses';
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <header>
        <Header></Header>
        <Courses></Courses>
      </header>
    </div>
  );
} 

export default App;
 