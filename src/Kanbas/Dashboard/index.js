import { Link } from "react-router-dom";
import db from "../Database";

import "../css/menu.css";
import "../css/sections.css";
import "../css/index.css";
import "./dashboard.css";
import { FaPen } from "react-icons/fa";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>

      <div class="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}/Home`}
            className="list-group-item"
          >
            <div class="col-sm-3 d-flex d-sm-block mb-4 course-card">
              <div class="card">
                <div class="dropdown card-menu position-absolute top-0 end-0">
                  <button
                    class="card-dots-attributes card-dots-position"
                    type="button"
                  >
                    <i class="fas fa-ellipsis-v"></i>
                  </button>
                </div>

                <img
                  src="../../images/course-image.jpeg"
                  class="card-img-top"
                  alt="..."
                ></img>

                <div class="card-body">
                  <a href="#" class="card-link">
                    <h5 class="card-title course-title">
                      {course.name}
                    </h5>
                    <p class="card-text card-between-title">
                      {course.number}
                    </p>
                    <p class="card-last-text">
                      {course.term}
                    </p>
                  </a>
                  <button class="btn btn-primary card-icon card-icon-button">
                      <FaPen />
                    </button>
                </div>
              </div>
            </div>

            {/* <Card /> */}
            {/* {course.name} */}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
