import { Button, Form, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();

  const assignment = db.assignments.find((a: any) => a._id === aid);

  const title = assignment?.title || "";
  const description = assignment?._id || "";
  const points = assignment?.course ?? 100;

  return (
    <div className="p-4" style={{ maxWidth: 700, margin: "0 auto" }}>
      <Form>
        <Form.Group className="mb-3" controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={title} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assignmentDescription">
          <Form.Control
            as="textarea"
            rows={7}
            defaultValue={description}
            style={{ fontSize: "1rem" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assignmentPoints">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" defaultValue={points} />
        </Form.Group>

        <Form.Label className="mb-2">Assign</Form.Label>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="assignTo">
              <Form.Label>Assign to</Form.Label>
              <Form.Control type="text" defaultValue="Everyone" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="dueDate">
              <Form.Label>Due</Form.Label>
              <Form.Control
                type="datetime-local"
                defaultValue={""}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="availableFrom">
              <Form.Label>Available from</Form.Label>
              <Form.Control
                type="datetime-local"
                defaultValue={""}
              />
            </Form.Group>
          </Col>
        </Row>


        <div className="d-flex justify-content-end gap-2 mt-4">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="secondary">Cancel</Button>
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="danger" type="button">
              Save
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}