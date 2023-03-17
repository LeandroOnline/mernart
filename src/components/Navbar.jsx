import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <NavLink className="nav-link" to="/about" href='#about'>
                About
              </NavLink>
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </ul>
            <NavLink
              className="navbar-brand fs-4 fw-bolderv mx-auto"
              to="/home"
            >
              MERN-APP
            </NavLink>
            <NavLink
              to="/login"
              className="btn btn-outline-primary ms-auto px-4 rounded-pill "
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-outline-primary mx-2 px-4 rounded-pill "
            >
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
