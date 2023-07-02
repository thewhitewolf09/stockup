import React from 'react';
import './TaskItem.scss';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const TaskItem = ({ task }) => {
  const navigate = useNavigate();
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div onClick={() => navigate("/task-details", { state: task._id })} className={`task-item-card ${task.status}`}>
      <h3>{task.name}</h3>
      <div className="details">
        <div className="icon">
          <FaUser />
          <span>{task.assignee[0]}</span>
        </div>
        <div className="icon">
          <FaCalendarAlt />
          <span>{formatTimestamp(task.dueDate)}</span>
        </div>
      </div>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskItem;
