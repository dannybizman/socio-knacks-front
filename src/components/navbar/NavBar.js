import {NavLink} from "react-router-dom";


const NavBar = () => {
  return (
<>
{/* Navigation */}


<div className="container bg-primary sk-navbar-bg">
  <nav className="navbar navbar-expand-md navbar-light fixed-top bg-primary">
    <a href="/" className="d-flex align-items-center col-md-3 text-light text-decoration-none">
      <img src="" alt="LOGO" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon" />
</button>
<div class="collapse navbar-collapse" id="navbarCollapse">
<ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li><a href="#" className="nav-link px-2 link-light">Home</a></li>
      <li><a href="#" className="nav-link px-2 link-light">Features</a></li>
      <li><a href="#" className="nav-link px-2 link-light">Pricing</a></li>
      <li><a href="#" className="nav-link px-2 link-light">FAQs</a></li>
      <li><a href="#" className="nav-link px-2 link-light">About</a></li>
    </ul>

    <div className="d-flex">
      <button type="button" className="btn btn-light  me-2">Login</button>
      <button type="button" className="btn btn-outline-light">Sign-up</button>
    </div>

</div>
   
   
  </nav>
</div>


</>
  );
};

export default NavBar;
