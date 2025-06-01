import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-4">
      <h1>Signup</h1>

      <Form.Control
        id="wd-username"
        placeholder="username"
        className="mb-2"
      />

      <Form.Control
        id="wd-password"
        type="password"
        placeholder="password"
        className="mb-3"
      />

      <Button
        id="wd-signup-btn"
        variant="primary"
        className="w-100 mb-2"
      >
        Signup
      </Button>

      <Link id="wd-signin-link" to="/Kambaz/Account/Signin">
        Signin
      </Link>
    </div>
  );
}
