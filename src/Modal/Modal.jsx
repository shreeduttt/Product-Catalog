import {useState} from 'react';
import './Modal.css';

const Modal = ({setTasks, setShowModal}) => {
  const [name, setName] = useState("");
  function onSubmit() {
    let task = {
        id: Date.now().toString(),
        name: name
    }
    setTasks(prev => ({
      ...prev,
      started: [...prev.started, task]
    }));
    setName("");
    setShowModal(false);
  }
  return (
    <>
      <div className="modal-backdrop"></div>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Enter Task name:</h2>
        <input className="input-sec" type="text" value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => {console.log(e)}}/>
        <button className="add-task-modal" onClick={() => onSubmit()}>Submit</button>
      </div>
    </>
  );
};

export default Modal;