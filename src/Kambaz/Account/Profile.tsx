import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-4" style={{ maxWidth: 400 }}>
      <h1>Profile</h1>
      <Form>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            defaultValue="alice"
            className="border"
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            defaultValue="123"
            className="border"
            placeholder="ID"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            defaultValue="Alice"
            className="border"
            placeholder="First Name"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            defaultValue="Wonderland"
            className="border"
            placeholder="Last Name"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="date"
            defaultValue=""
            className="border"
            placeholder="Date of Birth"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="email"
            defaultValue="alice@wonderland.com"
            className="border"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            type="text"
            defaultValue="User"
            className="border"
            placeholder="Role"
          />
        </Form.Group>
        <Button
          id="wd-signout-btn"
          variant="danger"
          className="w-100"
        >
          Signout
        </Button>
      </Form>
    </div>
  );
}