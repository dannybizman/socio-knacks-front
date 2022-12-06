import Navbar from "../../components/navbar/NavBar";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="p-5 mb-5 bg-primary text-center">
        <div className="container-fluid py-5">
          <h1 className="fw-bold text-white">
            A winning Business Has Great <br /> Customers
          </h1>
          <div className="text-center">
            <p className="col-md-12 text-white">
              Harmonizing marketing efforts, business process, customer
              services, sales <br /> and operational management across all
              touchpoint in a single view
            </p>
          </div>

          <div className="text-center">
            <button className="btn btn-light btn-lg" type="button">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="container mb-4 mt-4 ">
        <img
          src="assets/images/home-2.png"
          alt=""
          className=""
          width={1284}
          height={913}
        />
      </div>

      <div className="container mt-7 mb-4">
        <h1 className="text-center mt-7 mb-7">What We Offer</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center align-content-center">
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Task Management</h5>
                <p className="card-text">
                  The process of managing a task through its life cycle. It
                  involves planning, testing, tracking.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Call Management</h5>
                <p className="card-text">
                  The technology by which a process or procedure is performed
                  with minimal human assistance.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lead Management</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lead Management</h5>
                <p className="card-text">
                  Creating plan to spend your money, This spending planer is
                  called a budgeting tool for business.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Campaign Management</h5>
                <p className="card-text">
                  The process of managing a task through its life cycle. It
                  involves planning, testing, tracking.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Email Marketing</h5>
                <p className="card-text">
                  The technology by which a process or procedure is performed
                  with minimal human assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div className="container mt-4">
        <div>
          <div className="row featurette">
            <div className="col-md-7 mt-4">
              <h2 className="featurette-heading">
                Powerful and easy to <br />{" "}
                <span className="text-muted">use CRM platform</span>
              </h2>
              <p className="lead">
                Use marketing automation to identify hot leads and email your
                sales team telling them to follow up. Nurture and contact leads
                at the opportune time to maximize.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee" />
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
