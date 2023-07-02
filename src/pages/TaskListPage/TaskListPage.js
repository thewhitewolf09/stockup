import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import "./TaskListPage.scss";
import Header from "..//..//components/header/header";
import Footer from "..//..//components/footer/footer";
import { getAllTasks } from "../../api/apiFunctions";

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);

  // Filter, sort, and search functionality
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOption, setSortOption] = useState("DueDate");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllTasks()
      .then((res) => {
        setTasks(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === "All") return true;
    return task.status === filterStatus;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortOption === "DueDate") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  const searchedTasks = sortedTasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="task-list-page">
        <div className="controls">
          <div className="filter">
            <label htmlFor="filter">Filter by Status:</label>
            <select
              id="filter"
              value={filterStatus}
              onChange={handleFilterChange}
            >
              <option value="All">All</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="sort">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" value={sortOption} onChange={handleSortChange}>
              <option value="DueDate">Due Date</option>
              <option value="Name">Name</option>
            </select>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="task-list">
          {searchedTasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TaskListPage;
