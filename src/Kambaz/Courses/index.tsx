import CourseNavigation from './Navigation';
import Modules from './Modules';
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { Routes, Route, Navigate, useParams, useLocation, useNavigate } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import { useSelector } from "react-redux";

export default function Courses() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const courses = useSelector((state: any) => state.coursesReducer.courses);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const course = courses.find((course: any) => course._id === cid);

  // Protect route: only enrolled users can view
  const isEnrolled = enrollments.some(
    (e: any) => e.user === currentUser?._id && e.course === cid
  );
  if (!isEnrolled) {
    navigate("/Kambaz/Dashboard");
    return null;
  }

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1"/>
        {course && course.name} &gt; {location.pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/new" element={<AssignmentEditor isNew />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}