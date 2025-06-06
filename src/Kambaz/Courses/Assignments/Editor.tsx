import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import db from "../../Database";

type Assignment = {
  _id: string;
  course: string;
  title?: string;
  description?: string;
  points?: number | string;
  dueDate?: string;
  availableDate?: string;
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(
    (a: any) => a._id === aid && a.course === cid
  ) as Assignment | undefined;

  const title = assignment?.title ?? "";
  const description = assignment?.description ?? "";
  const points = assignment?.points ?? "";
  const dueDate = assignment?.dueDate ?? "";
  const availableDate = assignment?.availableDate ?? "";

  return (
    <div id="wd-assignments-editor" className="p-4" style={{ maxWidth: 700 }}>
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={title} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue={description}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="wd-points">
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" defaultValue={points} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="wd-group">
              <Form.Label>Assignment Group</Form.Label>
              <Form.Select>
                <option>ASSIGNMENTS</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="wd-display-grade-as">
              <Form.Label>Display Grade as</Form.Label>
              <Form.Select>
                <option>Percentage</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="wd-submission-type">
              <Form.Label>Submission Type</Form.Label>
              <Form.Select className="mb-2">
                <option>Online</option>
              </Form.Select>
              <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
              <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
              <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
              <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
              <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="wd-assign-to">
          <Form.Label>Assign to</Form.Label>
          <Form.Control type="text" defaultValue="Everyone" className="mb-2" />
          <Row>
            <Col md={4}>
              <Form.Label>Due</Form.Label>
              <Form.Control type="date" defaultValue={dueDate} className="mb-2" />
            </Col>
            <Col md={4}>
              <Form.Label>Available from</Form.Label>
              <Form.Control type="date" defaultValue={availableDate} className="mb-2" />
            </Col>
            <Col md={4}>
              <Form.Label>Until</Form.Label>
              <Form.Control type="date" defaultValue="" className="mb-2" />
            </Col>
          </Row>
        </Form.Group>

        <div className="mt-4">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="secondary" className="me-2">
              Cancel
            </Button>
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="danger">
              Save
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}