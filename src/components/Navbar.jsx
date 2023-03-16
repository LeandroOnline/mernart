function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <a className="nav-link" href="#">
                About
              </a>
              <a className="nav-link" href="#">
                Services
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
            </ul>
            <a className="navbar-brand fs-4 fw-bolderv mx-auto" href="#">
              Navbar
            </a>
            <button className="btn btn-outline-primary ms-auto px-4 rounded-pill ">
              Login
            </button>
            <button className="btn btn-outline-primary mx-2 px-4 rounded-pill ">
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
