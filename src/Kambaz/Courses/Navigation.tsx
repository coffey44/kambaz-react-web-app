import "../styles.css";
import { Link, useParams, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const links = [
  "Home",
  "Modules",
  "Piazza",
  "Zoom",
  "Assignments",
  "Quizzes",
  "Grades",
  "People",
];

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((label) => {
        const path = `/Kambaz/Courses/${cid}/${label}`;
        const isActive = pathname.toLowerCase().includes(label.toLowerCase());
        return (
          <Link
            key={label}
            to={path}
            id={`wd-course-${label.toLowerCase()}-link`}
            className={`list-group-item border border-0 ${
              isActive
                ? "active"
                : "text-danger"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}