import { FaSearch, FaPlus } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import db from "../../Database";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Assignments() {
  const { cid } = useParams();
  
  const assignments = db.assignments.filter(
    (assignment: any) => assignment.course === cid
  );
console.log("cid:", cid, "assignments:", assignments);
  return (
    <div id="assignments" className="p-4">
      <div className="d-flex align-items-center mb-4">
        <div className="flex-grow-1 d-flex align-items-center">
          <span className="me-2 text-secondary">
            <FaSearch />
          </span>
          <input
            placeholder="Search for Assignments"
            id="search-assignment"
            className="form-control w-auto"
            style={{ maxWidth: 300 }}
          />
        </div>
        <button
          id="add-assignment-group"
          className="btn btn-secondary ms-2"
        >
          <FaPlus className="me-1" /> Group
        </button>
        <button
          id="add-assignment"
          className="btn btn-danger ms-2"
        >
          <FaPlus className="me-1" /> Assignment
        </button>
      </div>

      <h3 id="assignments-title" className="mt-4 mb-3 d-flex align-items-center">
        <span className="fw-bold">ASSIGNMENTS</span>
        <span className="ms-2 text-secondary fw-normal fs-5">40% of Total</span>
        <button className="btn btn-light btn-sm ms-2 border">
          <FaPlus />
        </button>
      </h3>

      <ul id="assignment-list" className="list-unstyled">
        {assignments.map((assignment: any) => (
          <li
            key={assignment._id}
            className="assignment-item mb-4 border-start border-4 border-success ps-3 py-2 bg-white shadow-sm"
          >
            <Link
              to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
              className="assignment-link fw-bold fs-5 text-danger text-decoration-none"
            >
              {assignment.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}