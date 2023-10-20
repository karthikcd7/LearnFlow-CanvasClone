
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import Assignments from "./Assignments";
import Home from "./Home";
import "../css/menu.css";
import "../css/sections.css";
import "../css/index.css";
import "./courses.css";
import Breadcrumb from "../Utils/Breadcrumb";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
  const location = useLocation();
  const pathname = location.pathname; 
  const lastPath = pathname.slice(pathname.lastIndexOf('/') + 1);
  return (
    <div className="col">
      <Breadcrumb lastPath={lastPath} />

      <div class="row d-flex mt-2">
        <CourseNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route
            path="Assignments/:assignmentId"
            element={<AssignmentEditor/>}
          />
          <Route path="Grades" element={<h1>Grades</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Courses;
