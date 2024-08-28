import { useState } from 'react';

function TodoList() {
    const [state, setState] = useState({
        titel: '',
        taskList: [],
        counter: 0,
        flagEditing: null,
        showAlert: false,
        selectAll: false,
        deleteAll: []
    });

    const handleCheckboxChange = (taskId) => {
        setState(prevState => ({
            ...prevState,
            deleteAll: prevState.deleteAll.includes(taskId)
                ? prevState.deleteAll.filter(id => id !== taskId)
                : [...prevState.deleteAll, taskId]
                
        }));
    };
    console.log("prevState ",state);
    
    return (
        <>
            <div style={{ display: 'flex' }}>
                <input
                    type='text'
                    placeholder='Enter your text'
                    onChange={(e) => {
                        e.preventDefault();
                        setState(prevState => ({
                            ...prevState,
                            titel: e.target.value
                        }));
                    }}
                    value={state.titel}
                />

                <button onClick={(e) => {
                    e.preventDefault();
                    if (state.titel.trim() === '') {
                        setState(prevState => ({
                            ...prevState,
                            showAlert: true
                        }));
                        return;
                    }
                  
                    if (state.flagEditing) {
                        const updatedTaskList = state.taskList.map(task => 
                            task.id === state.flagEditing.id ? { ...task, taskTitle: state.titel } : task
                        );
                        setState(prevState => ({
                            ...prevState,
                            taskList: updatedTaskList,
                            flagEditing: null,
                            titel: '',
                            showAlert: false
                        }));
                    } else {
                        setState(prevState => ({
                            ...prevState,
                            taskList: [...prevState.taskList, { taskTitle: state.titel, id: prevState.counter }],
                            counter: prevState.counter + 1,
                            titel: '',
                            showAlert: false
                        }));
                    }
                }}>
                    Click Me!
                </button>

                {/* {state.titel && !state.flagEditing && <button onClick={(e) => {
                    e.preventDefault();
                    setState(prevState => ({
                        ...prevState,
                        titel: ''
                    }));
                }}>
                    Remove
                </button>} */}

                {state.showAlert && (
                    <p style={{
                        border: '2px solid black',
                        margin: '10px',
                        color: 'black',
                        top: '40px',
                        right: '30px',
                        position: 'fixed',
                        padding: '10px'
                    }}> Please Enter your text. </p>
                )}

                <button onClick={(e) => {
                    e.preventDefault();
                    setState(prevState => ({
                        ...prevState,
                        selectAll: !prevState.selectAll
                    }));
                }}>
                    Select
                </button>

                {state.selectAll && <button onClick={(e) => {
                    e.preventDefault();
                    const newTaskList = state.taskList.filter(task => !state.deleteAll.includes(task.id));
                    setState(prevState => ({
                        ...prevState,
                        taskList: newTaskList,
                        deleteAll: []
                    }));
                }}>
                    Delete Selected
                </button>}
            </div>

            <div>
                {state.taskList.map((task, index) => (
                    <div key={index + task.id} style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                        {state.selectAll && <input
                            type="checkbox"
                            onChange={() => handleCheckboxChange(task.id)}
                            checked={state.deleteAll.includes(task.id)}
                        />}
                        <h3>{task.taskTitle}</h3>

                        <button onClick={(e) => {
                            e.preventDefault();
                            const newTaskList = state.taskList.filter((_, i) => i !== index);
                            setState(prevState => ({
                                ...prevState,
                                taskList: newTaskList
                            }));
                        }} style={{ width: '8%', height: '25px' }}>
                            Delete
                        </button>

                        <button onClick={(e) => {
                            e.preventDefault();
                            setState(prevState => ({
                                ...prevState,
                                titel: task.taskTitle,
                                flagEditing: task
                            }));
                        }} style={{ width: '8%', height: '30px' }}>
                            Edit
                        </button>

                        {state.flagEditing && state.flagEditing.id === task.id && (
                            <button onClick={(e) => {
                                e.preventDefault();
                                setState(prevState => ({
                                    ...prevState,
                                    titel: '',
                                    flagEditing: null
                                }));
                            }} style={{ width: '8%', height: '30px' }}>
                                Close
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default TodoList;

