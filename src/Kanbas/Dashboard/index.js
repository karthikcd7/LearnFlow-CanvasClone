import { Link } from "react-router-dom";
import React from "react";
import db from "../Database";
import { useDispatch, useSelector } from "react-redux";

import "../css/menu.css";
import "../css/sections.css";
import "../css/index.css";
import "./dashboard.css";
import { FaPen, FaTrash } from "react-icons/fa";
import { addCourse } from "./dashReducer";

function Dashboard({
  // courses,
  // course,
  // setCourse,
  // addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  const courses = useSelector((state) => state.dashReducer.courses)
  const [course, setCourse] = React.useState(courses[0]);
  console.log("here2", course.term);
  const dispatch = useDispatch();

  return (
    <div>
      <div class="nav-toggle-and-crumbs">
        <h2>Dashboard</h2>
      </div>

      <div className="form-inline d-flex justify-content-between ">
        <div>
          <label>Course Name:</label>
          <input
            placeholder="Name"
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
        </div>

        <div>
          <label>Course Number:</label>
          <input
            placeholder="Course number"
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
        </div>

        <div>
          <label>Course Term:</label>
          <input
            placeholder="fall 2023"
            value={course.term}
            className="form-control"
            onChange={(e) => setCourse({ ...course, term: e.target.value })}
          />
        </div>

        <div>
          <label>Course Start:</label>
          <input
            placeholder="2023-09-10"
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
        </div>

        <div>
          <label>Course End:</label>
          <input
            placeholder="2023-12-31"
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>

        <button
          class="btn btn-primary card-icon card-icon-button"
          // onClick={addNewCourse}
          onClick={() => dispatch(addCourse(course))}
        >
          Add
        </button>

        <button
          class="btn btn-primary card-icon card-icon-button"
          onClick={() => updateCourse(course)}
        >
          Update
        </button>
      </div>

      <hr></hr>

      <h4 class="pub-courses">Published Courses ({courses.length})</h4>

      <div class="d-flex flex-row flex-wrap">
        {courses.map((course) => (
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
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}/Home`}
                className="list-group-item"
              >
                <img
                  src="../../images/course-image.jpeg"
                  class="card-img-top"
                  alt="..."
                ></img>

                <div class="card-body">
                  <a href="#" class="card-link">
                    <h5 class="card-title course-title">{course.name}</h5>
                    <p class="card-text card-between-title">{course.number}</p>
                    <p class="card-last-text">{course.term}</p>
                  </a>
                </div>
              </Link>
              <div>
                <button
                  class="btn btn-primary card-icon card-icon-button button-margin"
                  onClick={() => setCourse(course)}
                >
                  <FaPen />
                </button>

                <button
                  class="btn btn-primary card-icon card-icon-button button-margin"
                  onClick={() => deleteCourse(course._id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
