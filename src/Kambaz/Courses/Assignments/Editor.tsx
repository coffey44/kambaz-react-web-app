import { Button, Form, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as assignmentClient from "./client";

export default function AssignmentEditor({ isNew }: { isNew?: boolean }) {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState<any>({
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  });

  useEffect(() => {
    const fetchAssignment = async () => {
      if (!isNew && aid) {
        const assignment = await assignmentClient.findAssignmentById(aid);
        setForm(assignment);
      }
    };
    fetchAssignment();
  }, [aid, isNew]);

  const handleChange = (field: string, value: any) => {
    setForm({ ...form, [field]: value });
  };

  const handleSave = async () => {
    if (isNew || aid === "new") {
      await assignmentClient.createAssignment({ ...form, course: cid });
    } else {
      await assignmentClient.updateAssignment(form);
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div className="p-4" style={{ maxWidth: 700, margin: "0 auto" }}>
      <Form>
        <Form.Group className="mb-3" controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={form.title}
            onChange={e => handleChange("title", e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assignmentDescription">
          <Form.Control
            as="textarea"
            rows={7}
            value={form.description}
            onChange={e => handleChange("description", e.target.value)}
            style={{ fontSize: "1rem" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="assignmentPoints">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            value={form.points}
            onChange={e => handleChange("points", e.target.value)}
          />
        </Form.Group>

        <Form.Label className="mb-2">Assign</Form.Label>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="assignTo">
              <Form.Label>Assign to</Form.Label>
              <Form.Control type="text" value="Everyone" disabled />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="dueDate">
              <Form.Label>Due</Form.Label>
              <Form.Control
                type="datetime-local"
                value={form.dueDate}
                onChange={e => handleChange("dueDate", e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="availableFrom">
              <Form.Label>Available from</Form.Label>
              <Form.Control
                type="datetime-local"
                value={form.availableFrom}
                onChange={e => handleChange("availableFrom", e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="availableUntil">
              <Form.Label>Until</Form.Label>
              <Form.Control
                type="datetime-local"
                value={form.availableUntil}
                onChange={e => handleChange("availableUntil", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-end gap-2 mt-4">
          <Button
            variant="secondary"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button variant="danger" type="button" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}