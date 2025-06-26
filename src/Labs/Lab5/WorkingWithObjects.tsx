import { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "M101",
    name: "Introduction to Express",
    description: "Basics of Express.js and routing",
    course: "CS5610",
  });

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary me-2" href={`${ASSIGNMENT_API_URL}`}>
        Get Assignment
      </a>
      <a className="btn btn-primary me-2" href={`${MODULE_API_URL}`}>
        Get Module
      </a>
      <hr />

      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary me-2" href={`${ASSIGNMENT_API_URL}/title`}>
        Get Assignment Title
      </a>
      <a className="btn btn-primary" href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <hr />

      <h4>Modifying Assignment</h4>
      <FormControl
        className="mb-2 w-75"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        className="btn btn-primary float-end mb-2"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>

      <FormControl
        className="mb-2 w-75"
        type="number"
        defaultValue={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })
        }
      />
      <a
        className="btn btn-success float-end mb-2"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>

      <FormCheck
        className="mb-2"
        label="Completed"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <a
        className="btn btn-warning float-end"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>

      <hr />

      <h4>Modifying Module</h4>
      <FormControl
        className="mb-2 w-75"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <a
        className="btn btn-primary float-end mb-2"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Name
      </a>

      <FormControl
        className="mb-2 w-75"
        defaultValue={module.description}
        onChange={(e) =>
          setModule({ ...module, description: e.target.value })
        }
      />
      <a
        className="btn btn-secondary float-end"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Description
      </a>

      <hr />
    </div>
  );
}
