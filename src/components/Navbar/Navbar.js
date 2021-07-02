import { Link } from "react-router-dom";
// import Twitter from "../Icons/Twitter";
// import Instagram from "../Icons/Instagram";
// import Facebook from "../Icons/Facebook";
import "./Navbar.css";
import white from "../../assets/white.svg"

export default function Navbar({ user, setUser, handleLogout }) {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <h1>Life Tracker</h1>
            <img src={white} alt="logo" />
          </Link>
        </div>


          <div className="links">
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/activity">Activity</Link>
            </li>
            <li>
              <Link to="/exercise">Exercise</Link>
            </li>
            <li>
              <Link to="/nutrition">Nutrition</Link>
            </li>
            <li>
              <Link to="/sleep">Sleep</Link>
            </li>
          </div>


          {user?.email ? (
            // if user is logged in
            <>
              <li>
                {/* <span>{user.email}</span> */}
                <span className="test" onClick={handleLogout}>Logout</span>
              </li>
            </>
          ) : (
            // if user is logged out
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        {/* </ul> */}
      </div>
    </nav>
  );
}
