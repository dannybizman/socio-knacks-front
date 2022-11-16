import {NavLink} from "react-router-dom";


const NavBar = () => {
  return (
<div >
{/* Navigation */}
<nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
  <div className="container">
    {/* Image Logo */}
    <NavLink className="navbar-brand logo-image" to="/"><img src="../asset/images/sklogo.png" alt="alternative" /></NavLink> 
    {/* Text Logo - Use this if you don't have a graphic logo */}
    {/* <a class="navbar-brand logo-text" href="index.html">Ioniq</a> */}
    <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav ms-auto navbar-nav-scroll">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#header">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#features">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#details">Details</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pricing">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">More</a>
          <ul className="dropdown-menu" aria-labelledby="dropdown01">
            <li><NavLink className="dropdown-item bg-transparent text-dark" href="article.html">About Us</NavLink></li>
            <li><div className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item bg-transparent text-dark" href="terms.html">Articles</NavLink></li>
            <li><div className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item bg-transparent text-dark" href="privacy.html">Knowledge Base</NavLink></li>
            <li><div className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item bg-transparent text-dark" href="privacy.html">Privacy Policy</NavLink></li>
          </ul>
        </li>
      </ul>
      <span className="nav-item">
        <NavLink className="btn-outline-sm" to="/login">Log in</NavLink>
      </span>
    </div> {/* end of navbar-collapse */}
  </div> {/* end of container */}
</nav> {/* end of navbar */}
{/* end of navigation */}

</div>
  );
};

export default NavBar;
