import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UserDetails from './components/UserDetails';
import ChatSection from './components/ChatSection';
import ActionLauncher from './components/ActionLauncher';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          <div className='button-container'>
          <button className="button-for">
  <div className="div-for">CB</div>
  <span className="name-text">Cheyenne Bergson</span>
</button>
<button className="button-for">
  <div className="div-for">CB</div>
  <span className="name-text">Jonathan Higgins</span>
</button>
<button className="button-for">
  <div className="div-for">CB</div>
  <span className="name-text">Capt. Trunk</span>
</button>
<button className="button-for">
  <div className="div-for">CB</div>
  <span className="name-text">Hannibal Smi..</span>
</button>
<button className="button-for">
  <div className="div-for">CB</div>
  <span className="name-text">Capt. Trunk</span>
</button>

          </div>
          <div className="content-row">
          <UserDetails />
          <ChatSection />
          <ActionLauncher />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
