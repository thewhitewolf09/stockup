import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import RegistrationPage from "./pages/Auth/RegistrationPage";
import LoginPage from "./pages/Auth/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import TaskListPage from "./pages/TaskListPage/TaskListPage";
import TaskDetailsPage from "./pages/TaskDetailsPage/TaskDetailsPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<RegistrationPage />} />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/task-list" element={<TaskListPage />} />
        <Route path="/task-details" element={<TaskDetailsPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
