import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountNavigation from "./Navigation";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="d-flex">
      <AccountNavigation />
      <div className="flex-grow-1 p-4">
        <Routes>
          <Route
            path="/"
            element={
              <Navigate to={currentUser ? "Profile" : "Signin"} />
            }
          />
          <Route path="Signin" element={<Signin />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}