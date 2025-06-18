import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [profile, setProfile] = useState<any>(currentUser || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setProfile(currentUser || {});
  }, [currentUser]);

  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };

  return (
    <div id="wd-profile-screen" className="mx-auto mt-3" style={{ maxWidth: 320 }}>
      <h3>Profile</h3>
      {profile && (
        <form>
          <input
            className="form-control mb-2"
            type="text"
            value={profile.username || ""}
            onChange={e => setProfile({ ...profile, username: e.target.value })}
            placeholder="Username"
            disabled
          />
          <input
            className="form-control mb-2"
            type="password"
            value={profile.password || ""}
            onChange={e => setProfile({ ...profile, password: e.target.value })}
            placeholder="Password"
          />
          <input
            className="form-control mb-2"
            type="text"
            value={profile.firstName || ""}
            onChange={e => setProfile({ ...profile, firstName: e.target.value })}
            placeholder="First Name"
          />
          <input
            className="form-control mb-2"
            type="text"
            value={profile.lastName || ""}
            onChange={e => setProfile({ ...profile, lastName: e.target.value })}
            placeholder="Last Name"
          />
          <input
            className="form-control mb-2"
            type="email"
            value={profile.email || ""}
            onChange={e => setProfile({ ...profile, email: e.target.value })}
            placeholder="Email"
          />
          <div>
            <button
              type="button"
              onClick={updateProfile}
              className="btn btn-primary w-100 mb-2"
            >
              Update
            </button>
            <button
              type="button"
              onClick={signout}
              className="wd-signout-btn btn btn-danger w-100"
            >
              Sign out
            </button>
          </div>
        </form>
      )}
    </div>
  );
}