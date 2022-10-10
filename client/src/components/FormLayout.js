import React, { useEffect } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./FormLayout.css";
import { clearError } from "../actions/session";

const FooterIcon = ({ icon, href }) => {
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </div>
  );
};

const FormLayout = () => {
  // Clear error messages when switch form
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => dispatch(clearError()), [location, dispatch]);

  return (
    <div className="page">
      <div className="sign_up">
        Sign up to get your ideas
      </div>
      <div className="form_div">
        <div className="form">
          <div className="form__header">
            <div className="form__logo">
              <PinterestIcon />
            </div>
            <h1>Welcome to Pinterest</h1>
            <h4>Find new ideas to try</h4>
          </div>
          <div className="form__body">
            <Outlet />
          </div>
          <div className="form__footer">
            <FooterIcon
              icon={<GitHubIcon />}
              href="https://github.com/Prasiddhi1331"
            />
            <FooterIcon
              icon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/prasiddhi-singh-84b119220/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
