import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      setTasks([...tasks, { text: task.trim(), done: false }]);
      setTask("");
    }
  };

  const toggleCheck = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newList = tasks.filter((_, i) => i !== index);
    setTasks(newList);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Mi lista de tareas</h3>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Escribe una tarea y presiona Enter"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={addTask}
      />

      <ul className="list-group">
        {tasks.length === 0 ? (
          <li className="list-group-item text-muted">No hay tareas, añadir tareas</li>
        ) : (
          tasks.map((t, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={t.done}
                  onChange={() => toggleCheck(index)}
                />
                <span style={{ textDecoration: t.done ? "line-through" : "none" }}>
                  {t.text}
                </span>
              </div>
              <button className="btn btn-sm btn-danger" onClick={() => deleteTask(index)}>
                Eliminar
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;

