import React from 'react';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import Player from './components/Player';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/App.css'




function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <MainSection />
      </div>
      <Player />
    </div>
  );
}

export default App;
