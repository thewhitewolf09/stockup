import React, { useEffect, useState } from "react";
import "./DashboardPage.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdUpdate } from "react-icons/md";
import { getAllTasks } from "../../api/apiFunctions";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const [updates, setUpdates] = useState([
    {
      id: 1,
      message: "New Feature Release: Task Prioritization",
      timestamp: "2023-07-01 09:30 AM",
    },
    {
      id: 2,
      message: "Milestone Reached: 50% of Project Completion",
      timestamp: "2023-07-02 02:45 PM",
    },
    {
      id: 3,
      message: "Team Meeting Reminder: Tomorrow at 2 PM",
      timestamp: "2023-07-01 09:30 AM",
    },
    {
      id: 4,
      message: "Server Maintenance Notice: Brief Downtime Expected",
      timestamp: "2023-07-02 02:45 PM",
    },
    {
      id: 5,
      message: "Client Feedback Received: Positive Response",
      timestamp: "2023-07-01 09:30 AM",
    },
    // Add more updates as needed
  ]);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "New Task Assigned: Deadline Approaching",
      timestamp: "2023-07-01 09:30 AM",
    },
    {
      id: 2,
      message: "Important Announcement: All Hands Meeting Next Week",
      timestamp: "2023-07-02 02:45 PM",
    },
    {
      id: 3,
      message: "Task Update: In Progress",
      timestamp: "2023-07-01 09:30 AM",
    },
    {
      id: 4,
      message: "Task Comment Added: Please Review",
      timestamp: "2023-07-02 02:45 PM",
    },
    {
      id: 5,
      message: "File Uploaded: Project Documentation",
      timestamp: "2023-07-02 02:45 PM",
    },
    // Add more notifications as needed
  ]);

  useEffect(() => {
    getAllTasks()
      .then((res) => {
        setTasks(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const handleDrop = (e) => {
    const taskId = e.dataTransfer.getData("taskId");
    const newIndex = e.currentTarget.dataset.index;
    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex(
      (task) => task._id.toString() === taskId
    );
    const [task] = updatedTasks.splice(taskIndex, 1);
    updatedTasks.splice(newIndex, 0, task);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Header />
      <div className="dashboard-page">
        <div className="tasks-section">
          <h2>Assigned Tasks</h2>
          {tasks.map((task, index) => (
            <div
              key={task._id}
              className={`task-item ${task.status.toLowerCase()}`}
              draggable
              onDragStart={(e) => handleDragStart(e, task._id.toString())}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              data-index={index}
            >
              <div className="task-details">
                <h3>{task.name}</h3>
                <span className="due-date">
                  Due: {formatTimestamp(task.dueDate)}
                </span>
                <br />
                <span className="priority">Priority: {task.priority}</span>
              </div>
              {task.status === "In Progress" && (
                <div className="task-actions">
                  <button
                    className="complete-button"
                    onClick={() => navigate("/task-details", { state: task._id })}
                  >
                    Complete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="updates-section">
          <h2>Project Updates</h2>
          {updates.map((update) => (
            <div key={update.id} className="update-item">
              <div className="update-details">
                <p>
                  <MdUpdate /> {update.message}
                </p>
                <span className="timestamp">
                  {formatTimestamp(update.timestamp)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="notifications-section">
          <h2>Notifications</h2>
          {notifications.map((notification) => (
            <div key={notification.id} className="notification-item">
              <div className="notification-details">
                <p>
                  <IoMdNotificationsOutline /> {notification.message}
                </p>
                <span className="timestamp">
                  {formatTimestamp(notification.timestamp)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
