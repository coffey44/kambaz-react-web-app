import { Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4" style={{ maxWidth: 700 }}>
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify..."
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="wd-points">
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" defaultValue={100} />
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
              <Form.Control type="date" defaultValue="2024-05-13" className="mb-2" />
            </Col>
            <Col md={4}>
              <Form.Label>Available from</Form.Label>
              <Form.Control type="date" defaultValue="2024-05-06" className="mb-2" />
            </Col>
            <Col md={4}>
              <Form.Label>Until</Form.Label>
              <Form.Control type="date" defaultValue="2024-05-28" className="mb-2" />
            </Col>
          </Row>
        </Form.Group>

        <div className="mt-4">
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}