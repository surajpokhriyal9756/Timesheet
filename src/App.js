import Sidebar from './components/Sidebar'
import './App.css';
import Mainbar from './components/Mainbar';
import React from 'react';

function App() {
  return (
    <div className="container">
        <div className="col-3">
            <Sidebar />
        </div>
        <div className="col-9">
            <Mainbar />
        </div>
    </div>   
  );
}

export default App;
