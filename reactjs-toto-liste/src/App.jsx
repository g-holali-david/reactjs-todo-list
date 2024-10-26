// src/App.jsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [duration, setDuration] = useState("");
  const [isEditing, setIsEditing] = useState(null);

  const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D"]; // Couleurs pour les étiquettes

  const handleAddTask = () => {
    if (task.trim() && startDate && duration) {
      const newTask = {
        id: Date.now(),
        name: task,
        startDate: startDate,
        duration: duration,
        addedDate: new Date(),
        completed: false,
        color: colors[Math.floor(Math.random() * colors.length)], // Couleur aléatoire pour chaque tâche
      };
      setTasks([...tasks, newTask]);
      setTask("");
      setStartDate(null);
      setDuration("");
    }
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleEditTask = (task) => {
    setTask(task.name);
    setStartDate(task.startDate);
    setDuration(task.duration);
    setIsEditing(task.id);
  };

  const handleSaveEdit = () => {
    setTasks(tasks.map((t) =>
      t.id === isEditing ? { ...t, name: task, startDate, duration } : t
    ));
    setTask("");
    setStartDate(null);
    setDuration("");
    setIsEditing(null);
  };

  return (
    <div className="app">
      <h1>Toto Liste</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nom de la tâche"
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          dateFormat="Pp"
          placeholderText="Date de début"
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Durée (heures)"
          min="1"
        />
        {isEditing ? (
          <button onClick={handleSaveEdit}>Sauvegarder</button>
        ) : (
          <button onClick={handleAddTask}>Ajouter</button>
        )}
      </div>

      <table className="task-table">
        <thead>
          <tr>
            <th>Nom de la tâche</th>
            <th>Date de début</th>
            <th>Durée</th>
            <th>Date d'ajout</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id} className={t.completed ? "completed" : ""}>
              <td>
                <span className="task-label" style={{ backgroundColor: t.color }}>
                  {t.completed ? "Terminé" : "En cours"}
                </span>
                <span className="task-name">{t.name}</span>
              </td>
              <td>{t.startDate.toLocaleString()}</td>
              <td>{t.duration}h</td>
              <td>{t.addedDate.toLocaleString()}</td>
              <td>
                <button onClick={() => handleToggleComplete(t.id)}>✔</button>
                <button onClick={() => handleEditTask(t)}>✏</button>
                <button onClick={() => handleDeleteTask(t.id)}>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
