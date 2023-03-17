import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-between">
          <div className="col-md-5 d-flex flex-column align-items-center form justify-content-center text-white order-2">
            <h1 className="display-4 fw-bolder">Hi user</h1>
            <p className="lead text-center">Register Your Credentials</p>
            <h5>OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-5e"
            >
              LOGIN
            </NavLink>
          </div>

          <div className="col-md-6 p-4">
            <h1 className="display-6">REGISTER</h1>
            <form>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                  Username
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
                <label for="exampleInputPassword1" class="form-label">
                  Repeat Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
