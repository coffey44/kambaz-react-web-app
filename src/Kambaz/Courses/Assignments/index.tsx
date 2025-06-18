import { useEffect, useState } from "react";
import { Button, Form, InputGroup, ListGroup, Modal } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { CiSearch } from "react-icons/ci";
import { FaPlus, FaTrash } from 'react-icons/fa';
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from './AssignmentControlButtons';
import { FaCalendarCheck } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons"
import { Link, useParams, useNavigate } from 'react-router-dom';
import * as assignmentClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const [assignments, setAssignments] = useState<any[]>([]);
  const [showDelete, setShowDelete] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);

  const fetchAssignments = async () => {
    const all = await assignmentClient.findAllAssignments();
    setAssignments(all.filter((a: any) => a.course === cid));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const handleDeleteClick = (assignment: any) => {
    setAssignmentToDelete(assignment);
    setShowDelete(true);
  };

  const handleConfirmDelete = async () => {
    if (assignmentToDelete) {
      await assignmentClient.deleteAssignment(assignmentToDelete._id);
      setAssignments(assignments.filter(a => a._id !== assignmentToDelete._id));
    }
    setShowDelete(false);
    setAssignmentToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDelete(false);
    setAssignmentToDelete(null);
  };

  return (
    <div id="wd-assignments-title" className="text-nowrap">
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
        <div style={{ flex: 0.5 }}>
          <Button variant="secondary" size="lg" id="wd-add-assignment-group" className="w-100">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Group
          </Button>
        </div>
        <div style={{ flex: 0.5 }}>
          <Button
            variant="danger"
            size="lg"
            id="wd-add-assignment"
            className="w-100"
            onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}
          >
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Assignment
          </Button>
        </div>
      </div>
      <div id="wd-assignments-list">
        <ListGroup className="rounded-0" id="wd-assignments-list-group">
          <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> <IoMdArrowDropdown /> Assignments <AssignmentControlButtons />
            </div>
            <ListGroup className="wd-assignments rounded-0">
              {assignments.map((assignment: any) => (
                <ListGroup.Item className="wd-assignment p-3 ps-1" key={assignment._id}>
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <FaCalendarCheck className="me-2 fs-3 text-success" />
                    <div>
                      <div className="fw-bold">
                        <Link
                          to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                          className="text-decoration-none text-dark"
                        >
                          {assignment.title}
                        </Link>
                      </div>
                      <div className="wd-assignment-description text-secondary small">
                        <span>Assignment ID: {assignment._id}</span>
                      </div>
                    </div>
                    <div className="ms-auto d-flex align-items-center">
                      <Button
                        variant="link"
                        className="text-danger p-0 ms-2"
                        title="Delete Assignment"
                        onClick={() => handleDeleteClick(assignment)}
                      >
                        <FaTrash />
                      </Button>
                      <LessonControlButtons />
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Modal show={showDelete} onHide={handleCancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the assignment{' '}
          <strong>{assignmentToDelete?.title}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}