import { Link, useParams, useLocation } from "react-router-dom";
import "../../css/menu.css";
import "../../css/sections.css";
import db from "../../Database";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import { useSelector } from "react-redux";
function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Ponapto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const courses = useSelector((state) => state.dashReducer.courses)
  const course  = courses[0];
  return (
    <div
      id="side-bar"
      className="d-none d-md-block col-md-1 ms-4"
    >
      <p className="ellipsis pt-3">{course.term}</p>
      {links.map((link, index) => (
        <div className="section">
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`section-item ${
              pathname.includes(link) && "section-item-active"
            }`}
          > {index > 7 && (
            <div className="d-flex float-end">
              <AiOutlineEyeInvisible style={{color:"black", fontSize: "23px"}} />
            </div>
          )}
            {link}
          </Link>
        </div>
      ))}
    </div>
  );
}
export default CourseNavigation;
