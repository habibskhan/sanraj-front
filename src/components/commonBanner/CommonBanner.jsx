import React from "react";
import { Link } from "react-router-dom";
import "./commonBanner.scss";
import { homeUrl } from "../helpers/constant-words";

const CommonBanner = ({
  banner,
  title,
  link1,
  link2,
  linkText1,
  linkText2,
}) => {
  return (
    <>
      <div className="com_banner_container">
        <img
          width={1920}
          height={520}
          src={banner}
          alt="banner"
          className="banner"
        />
        <div className="my_container">
          <div className="breadcrumb">
            <div className="link_wrapper">
              <Link to={homeUrl} className={`link`}>
                {/* <img src={homeIcon} alt="home" className="home_icon" /> */}
                Home
              </Link>
              <Link
                to={link1}
                className={`link space ${!linkText2 ? "disabled" : ""}`}
              >
                {" | " + linkText1}
              </Link>
              {linkText2 && (
                <Link to={link2} className={`link disabled`}>
                  {" | " + linkText2}
                </Link>
              )}
            </div>
          </div>
          <div className="content_wrapper">
            <h1
              className="banner_heading"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonBanner;
