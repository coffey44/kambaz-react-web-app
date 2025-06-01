import { Link } from "react-router-dom";

const links = [
  "Home",
  "Modules",
  "Piazza",
  "Zoom",
  "Assignments",
  "Quizzes",
  "Grades",
  "People"
];

export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, idx) => (
        <Link
          key={link}
          to={`/Kambaz/Courses/1234/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item border border-0${idx === 0 ? " active" : " text-danger"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
