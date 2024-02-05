import React from 'react';

const TodoApp = () => {
    const tasksRef = React.useRef([]);
    const newTaskRef = React.useRef('');

    const forceUpdate = () => {};

    const handleAddTask = () => {
        const newTask = newTaskRef.current.trim();
        if (newTask !== '') {
            tasksRef.current = [...tasksRef.current, newTask];
            newTaskRef.current = '';
            forceUpdate(); // Принудительное обновление компонента
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>Список задач</h2>
            <ul>
                {tasksRef.current.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newTaskRef.current}
                    onChange={(e) => (newTaskRef.current = e.target.value)}
                    placeholder="Введите новую задачу"
                />
                <button onClick={handleAddTask}>Добавить задачу</button>
            </div>
        </div>
    );
};

export default TodoApp;
