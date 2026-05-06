import Modal from "../Modal/Modal";
import { useState } from 'react';
import './App.css';
import DragNDrop from "../Drag_N_Drop/DragNDrop";
import Header from "../Header/Header";

const AppDnD = () => {
    const [showModal, setShowModal] = useState(false);
    
  return (
    <>
    <div className="app-container" onClick={() => setShowModal(false)}>
        <div className="app-content">
      <Header title="Task Drag and Drop"/>
    
      </div>
      <DragNDrop showModal={showModal} setShowModal={setShowModal}/>
    </div>
    
    </>
  );
};

export default AppDnD;