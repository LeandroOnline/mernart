import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-between">
          <div className="col-md-5 d-flex flex-column align-items-center form justify-content-center text-white">
            <h1 className="display-4 fw-bolder">Welcome Back</h1>
            <p className="lead text-center">Enter Your Credentials To Login</p>
            <h5>OR</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-light rounded-pill pb-2 w-5e"
            >
              Register
            </NavLink>
          </div>

          <div className="col-md-7 p-4 justify-content-center align-items-center d-flex flex-column">
            <h1 className="display-6">LOGIN</h1>
            <form>
              <div class="mb-3">
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
              </div>
              <button type="submit" class="btn btn-primary">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
