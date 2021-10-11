import "./sidebar.css";
import {
  LineStyle,
  TrendingUp,
  PermIdentity,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="admin">
          <div className="profile-image"></div>
          <div className="profile-name">
            <small className="small-text">Hello</small><br/>
            Simon Adjalo
          </div>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>  
            <Link to="/newUser" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Add User
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                View Users
              </li>
            </Link>
            <Link to="/cars" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                View Cars
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
