import './DND.css';
import {useState} from 'react';
import Modal from '../Modal/Modal';


const DragNDrop = ({showModal, setShowModal}) => {
const imageUrl = new URL('./delete.png', import.meta.url).href;
    const [picked, setPicked] = useState({});
    const [dropColumn, setDropColomn] = useState("");
    const [startColumn, setStartColumn] = useState("");
    const [tasks, setTasks] = useState({
     started: [
        {
            id:"1",
            name:"Send Email to Facilities"
        },
        {
            id:"2",
            name:"Get headset repaired"
        }
     ], 
     completed: [
        {
            id:"3",
            name:"Evening call with IT"
        }
     ]
    });
    
    function handleClick (e) {
        e.stopPropagation();
        setShowModal(true)
    }

    function handleDelete(taskId, section) {
        setTasks(prev => ({
            ...prev,
            [section]: prev[section].filter(task => task.id !== taskId)
        }))
    }

    function handleOnDrop() { 
         handleDelete(picked.id, startColumn);
         setTasks(prev => ({
            ...prev,
            [dropColumn]: [...prev[dropColumn], picked]
        }))
        setPicked({});
    }
 
    function handleDragStart(task, section) {
        console.log("Started: ", task);
        setStartColumn(section)
        setPicked(task);
    }

    function handleDragEnd(task) {
        console.log("Ended: ",task);
        setStartColumn("");
        setPicked({});
    }

    return (
        <div className="dnd-container">
            <div className="dnd-space" onDragEnter={() => setDropColomn('started')} onDragOver={e => e.preventDefault()} onDrop={() => handleOnDrop()}>
              <div className="dnd-header">
                <h2>Started</h2>
                <button className="add-task" onClick={(e) => {handleClick(e)}}>Add Task</button>
              </div>
              {
                tasks.started.map((task) => (
                    <div className={`task-item ${picked.id === task.id ? 'dragging' : ''}`} key={task.id} draggable={true} onDragStart={() => handleDragStart(task, 'started')} onDragEnd={() => handleDragEnd(task)} >
                        {task.name}
                        <img src={imageUrl} alt="delete" className="delete-icon" onClick={() => handleDelete(task.id, 'started')}/>
                    </div>
                ))
              }
            </div>
            <div className="dnd-space" onDragEnter={() => setDropColomn('completed')} onDragOver={e => e.preventDefault()}  onDrop={() => handleOnDrop()}>
              <h2>Completed</h2>
              {
                tasks.completed.map((task) => (
                    <div className={`task-item ${picked.id === task.id ? 'dragging' : ''}`} key={task.id} draggable={true} onDragStart={() => handleDragStart(task, 'completed')} onDragEnd={() => handleDragEnd(task)} >
                        {task.name}
                        <img src={imageUrl} alt="delete" className="delete-icon" onClick={() => handleDelete(task.id, 'completed')}/>
                    </div>
                ))
              }
            </div>
            {showModal && <Modal setTasks={setTasks} setShowModal={setShowModal}/>}
        </div>
    )
}

export default DragNDrop;