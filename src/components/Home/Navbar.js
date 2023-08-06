import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand text-white" to="">
            News Hub
          </Link>
          <button
            class="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              {" "}
              {props.username && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
