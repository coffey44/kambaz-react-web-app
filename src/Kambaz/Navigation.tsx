import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export default function KambazNavigation() {
  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroup.Item
        id="wd-neu-link"
        target="_blank"
        action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern Logo" />
      </ListGroup.Item>
      <br />
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Account"
        className="text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </ListGroup.Item>
      <br />
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Dashboard"
        className="text-center border-0 bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </ListGroup.Item>
      <br />
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Courses"
        className="text-white bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </ListGroup.Item>
      <br />
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Calendar"
        className="text-white bg-black text-center border-0"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </ListGroup.Item>
      <br />
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Inbox"
        className="text-white bg-black text-center border-0"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </ListGroup.Item>
      <br />
      <ListGroup.Item
        as={Link}
        to="/Kambaz/Settings"
        className="text-white bg-black text-center border-0"
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Settings
      </ListGroup.Item>
    </ListGroup>
  );
}