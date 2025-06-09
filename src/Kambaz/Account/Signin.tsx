import { Link } from "react-router-dom"

export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3> Sign in</h3>
            <input placeholder="username" className="wd-username"/> <br/>
            <input placeholder="password" className="wd-password"/> <br/>
            <Link to="/Kambaz/Account/Profile" id="wd-signin-btn"> Sign in</Link> <br/>
            <Link to="Kambaz/Account/Sign Up" id="wd-signup-link">Sign Up</Link> <br/>
        </div>
    );
}