


const Login = () => {
       return (
              <div>
                     {/* Basic */}
<div className="ex-form-1 pt-5 pb-5">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 offset-xl-3">
        <div className="text-box mt-5 mb-5">
          <p className="mb-4">You don't have a password? Then please <a className="blue" href="sign-up.html">Sign Up</a></p>
          {/* Log In Form */}
          <form>
            <div className="mb-4 form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="mb-4 form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="mb-4 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">I agree with the site's stated <a href="privacy.html">Privacy Policy</a> and <a href="terms.html">Terms &amp; Conditions</a></label>
            </div>
            <button type="submit" className="form-control-submit-button">Log in</button>
          </form>
          {/* end of log in form */}
        </div> {/* end of text-box */}
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div> {/* end of ex-basic-1 */}
{/* end of basic */}

              </div>
       );
}

export default Login;

