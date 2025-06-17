import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="mx-auto mt-3" style={{ maxWidth: 320 }}>
      <h1 className="mb-3">Profile</h1>
      <Form>
        <Form.Control className="mb-2" type="text" defaultValue="alice" />
        <Form.Control className="mb-2" type="password" defaultValue="123" />
        <Form.Control className="mb-2" type="text" defaultValue="Alice" />
        <Form.Control className="mb-2" type="text" defaultValue="Wonderland" />
        <Form.Control className="mb-2" type="date" placeholder="mm/dd/yyyy" />
        <Form.Control className="mb-2" type="email" defaultValue="alice@wonderland.com" />
        <Form.Control className="mb-3" type="text" defaultValue="User" />
        <Button variant="danger" className="w-100" type="button">
          <Link to="/Kambaz/Account/Signin" className="text-white text-decoration-none">
            Signout
          </Link>
        </Button>
      </Form>
    </div>
  );
}