import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import { setCurrentUser } from "./reducer";
import { Button, Form } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Profile");
  };

  return (
    <div className="mx-auto mt-5" style={{ maxWidth: 320 }}>
      <h4 className="mb-3">Sign In</h4>
      <Form>
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Username"
          value={credentials.username || ""}
          onChange={e =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <Form.Control
          className="mb-3"
          type="password"
          placeholder="Password"
          value={credentials.password || ""}
          onChange={e =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <Button
          variant="danger"
          className="w-100"
          type="button"
          onClick={signin}
        >
          Sign In
        </Button>
      </Form>
    </div>
  );
}