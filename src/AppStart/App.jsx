import Modal from "../Modal/Modal";
import { useState } from 'react';
import './App.css';
import DragNDrop from "../Drag_N_Drop/DragNDrop";

const App = () => {
    const [showModal, setShowModal] = useState(false);
    
  return (
    <>
    <div className="app-container" onClick={() => setShowModal(false)}>
        <div className="app-content">
      <h1>Practice Machine Coding</h1>
      <p>Welcome to the Practice Machine Coding App!</p>
    
      </div>
      <DragNDrop showModal={showModal} setShowModal={setShowModal}/>
    </div>
    
    </>
  );
};

export default App;