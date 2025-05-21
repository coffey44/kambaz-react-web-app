import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={{ marginLeft: 140, padding: 32 }}>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <Row xs={1} md={5} className="g-4">
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  CS1234 React JS
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Full Stack software developer
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/CS5610/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  CS5610 Web Development
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Intro to modern web technologies
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/CSP101/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  Introduction to C++
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Basics of C++ programming
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/CSD200/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  Object Oriented Design
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Principles of OOD
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/FIN310/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  Financial Management
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Corporate finance
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/ACC220/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  Managerial Accounting
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Cost analysi
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
            <Link to="/Kambaz/Courses/MATH250/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  Discrete Structures
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Logic in math
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}