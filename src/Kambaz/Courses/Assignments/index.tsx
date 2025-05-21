import { FaSearch, FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Assignments() {
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
        <li className="assignment-item mb-4 border-start border-4 border-success ps-3 py-2 bg-white shadow-sm">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="assignment-link fw-bold fs-5 text-danger text-decoration-none"
          >
            A1 - ENV + HTML
          </a>
          <div className="text-secondary small mt-1">
            Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
            <br />
            <b>Due</b> May 13 at 11:59pm | 100 pts
          </div>
        </li>

        <li className="assignment-item mb-4 border-start border-4 border-success ps-3 py-2 bg-white shadow-sm">
          <a
            href="#/Kambaz/Courses/1234/Assignments/124"
            className="assignment-link fw-bold fs-5 text-danger text-decoration-none"
          >
            A2 - CSS + BOOTSTRAP
          </a>
          <div className="text-secondary small mt-1">
            Multiple Modules | <b>Not available until</b> May 13 at 12:00am |
            <br />
            <b>Due</b> May 20 at 11:59pm | 100 pts
          </div>
        </li>

        <li className="assignment-item mb-4 border-start border-4 border-success ps-3 py-2 bg-white shadow-sm">
          <a
            href="#/Kambaz/Courses/1234/Assignments/125"
            className="assignment-link fw-bold fs-5 text-danger text-decoration-none"
          >
            A3 - JAVASCRIPT + REACT
          </a>
          <div className="text-secondary small mt-1">
            Multiple Modules | <b>Not available until</b> May 20 at 12:00am |
            <br />
            <b>Due</b> May 27 at 11:59pm | 100 pts
          </div>
        </li>
      </ul>
    </div>
  );
}