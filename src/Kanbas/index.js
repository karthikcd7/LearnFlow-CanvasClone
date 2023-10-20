import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./css/menu.css";
import "./css/sections.css";
import "./css/index.css";

function Kanbas() {
  return (
    <div className="wd-flex-row-container">
      <KanbasNavigation />
      <div class="col" style={{paddingRight:20}}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/" element={<Navigate to="/Kanbas/Courses/RS101/" />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
