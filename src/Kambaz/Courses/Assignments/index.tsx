import { Button, Form, InputGroup } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { CiSearch } from "react-icons/ci";
import { FaPlus } from 'react-icons/fa';


export default function Assignments() {
  return (
    <div id="wd-assignments" className="text-nowrap">
      <div id="wd-assignments-controls" className="d-flex gap-2 mb-3">
          <div style={{ flex: 2 }}>
            <InputGroup size="lg">
              <InputGroup.Text id="wd-search-assignment">
                <CiSearch />
              </InputGroup.Text>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Search"
                id="wd-search-assignment"
              />
            </InputGroup>
          </div>

          <div style={{ flex: 1 }}>
            <Button variant="secondary" size="lg" id="wd-add-assignment-group" className="w-100">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Group
            </Button>
          </div>

          <div style={{ flex: 1 }}>
            <Button variant="danger" size="lg" id="wd-add-assignment" className="w-100">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Assignment
            </Button>
          </div>
        </div>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
            A1 - ENV + HTML
          </a>
          <div>
            Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
            <br />
            <b>Due</b> May 13 at 11:59pm | 100 pts
          </div>
        </li>

        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/124" className="wd-assignment-link">
            A2 - CSS + BOOTSTRAP
          </a>
          <div>
            Multiple Modules | <b>Not available until</b> May 13 at 12:00am |
            <br />
            <b>Due</b> May 20 at 11:59pm | 100 pts
          </div>
        </li>

        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/125" className="wd-assignment-link">
            A3 - JAVASCRIPT + REACT
          </a>
          <div>
            Multiple Modules | <b>Not available until</b> May 20 at 12:00am |
            <br />
            <b>Due</b> May 27 at 11:59pm | 100 pts
          </div>
        </li>
      </ul>
    </div>
  );
}
