import React, { useState } from "react";
import "./footer.scss";
import {
  facebook,
  facebookGolden,
  footerArrow,
  instagram,
  instagramGolden,
  linkedIn,
  linkedInGolden,
  minusIcon,
  plusIcon,
  youtube,
  youtubeGolden,
} from "../../images";
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";
import {
  careersUrl,
  contactusUrl,
  csrinitiativesUrl,
  healthcareUrl,
  hospitalityUrl,
  informationTechnologyUrl,
  infrastructureUrl,
  investmentUrl,
  newsCenterUrl,
  ourCompanyUrl,
  privacyyUrl,
  renewableEnergyUrl,
  sportsUrl,
  teamManagementUrl,
  termsUrl,
} from "../helpers/constant-words";

const Footer = () => {
  const { width } = useWindowSize();
  const [isClicked, setIsClicked] = useState("business-ventures");
  const currentYear = new Date();
  const [isHover, setIsHover] = useState("");

  const toggle = (text) => {
    if (isClicked === text) {
      return setIsClicked(null);
    } else {
      setIsClicked(text);
    }
  };

  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="footer_wrapper">
        <div className="scroll_up" onClick={scrollHandler}>
          <img src={footerArrow} alt="up arrow" className="up_arrow" />
        </div>
        <div className="my_container">
          <div className="row footer_row">
            <div className="col-md-4 footer_col">
              <div className="footer_data">
                <h4
                  className="footer_sec_title"
                  onClick={() => toggle("business-ventures")}
                >
                  BUSINESS VENTURES
                  {width <= 767 && (
                    <img
                      src={
                        isClicked === "business-ventures" ? minusIcon : plusIcon
                      }
                      alt="plus icon"
                      className="plus_icon"
                    />
                  )}
                </h4>
                <div
                  className={`link_wrapper ${
                    width <= 767 && isClicked === "business-ventures"
                      ? "active"
                      : ""
                  }`}
                >
                   <Link to={hospitalityUrl} className="footer_link">
                    <span className="link_text">Hospitality</span>
                  </Link>
                   <Link to={informationTechnologyUrl} className="footer_link">
                    <span className="link_text">IT</span>
                  </Link>
                  <Link to={healthcareUrl} className="footer_link">
                    <span className="link_text">Healthcare</span>
                  </Link>
                  <Link to={infrastructureUrl} className="footer_link">
                    <span className="link_text">Infrastructure</span>
                  </Link>
                  <Link to={sportsUrl} className="footer_link">
                    <span className="link_text">Sports</span>
                  </Link>
                  <Link to={renewableEnergyUrl} className="footer_link">
                    <span className="link_text">Renewable Energy</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 footer_col">
              <div className="footer_data">
                <h4
                  className="footer_sec_title"
                  onClick={() => toggle("quick-links")}
                >
                  QUICK LINKS
                  {width <= 767 && (
                    <img
                      src={isClicked === "quick-links" ? minusIcon : plusIcon}
                      alt="plus icon"
                      className="plus_icon"
                    />
                  )}
                </h4>
                <div
                  className={`link_wrapper ${
                    width <= 767 && isClicked === "quick-links" ? "active" : ""
                  }`}
                >
                  <Link to={ourCompanyUrl} className="footer_link">
                    <span className="link_text">Our Company</span>
                  </Link>
                  <Link to={teamManagementUrl} className="footer_link">
                    <span className="link_text">Management Team</span>
                  </Link>
                  <Link to={investmentUrl} className="footer_link">
                    <span className="link_text">Investments</span>
                  </Link>
                  <Link to={csrinitiativesUrl} className="footer_link">
                    <span className="link_text">Our Initiatives</span>
                  </Link>
                  <Link to={newsCenterUrl} className="footer_link">
                    <span className="link_text">News Centre</span>
                  </Link>
                  <Link to={careersUrl} className="footer_link">
                    <span className="link_text">Careers</span>
                  </Link>
                  {width <= 1023 && (
                  <Link to={contactusUrl} className="footer_link">
                    <span className="link_text">Contact Us</span>
                  </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="col-md-4 footer_col">
              <div className="footer_data">
                <div className="contact_wrapper">
                  <h4 className="footer_sec_title">EMAIL ID</h4>
                  <a
                    href="mailto:info@sanraj.co.in"
                    className="footer_link"
                    // target="_blank"
                    // rel="noreferrer"
                  >
                    <span className="link_text">info@sanraj.co.in</span>
                  </a>
                </div>
                <div className="contact_wrapper">
                  <h4 className="footer_sec_title">PHONE NO.</h4>
                  <div className="numb_wrapper">
                    <a href="tel:+918828042886" className="footer_link">
                      <span className="link_text">+91 8828042886</span>
                    </a>
                    {/* &nbsp;<span className="footer_link">/</span>&nbsp;
                    <a href="tel:+912240337799" className="footer_link">
                      <span className="link_text">77-99</span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row copy_row">
            <div className="col-md-4 copy_col order-md-2">
              <div className="social_media_wrapper">
                <Link
                  to="https://www.linkedin.com/company/sanraj-family-ventures/"
                  target="_blank"
                  rel="noreferrer"
                  className="social_link"
                  onMouseOver={() => setIsHover("linkedIn")}
                  onMouseOut={() => setIsHover(null)}
                >
                  <img
                    src={isHover === "linkedIn" ? linkedInGolden : linkedIn}
                    alt="linkedIn"
                    className="social_icon"
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/sanrajfamilyventures/"
                  target="_blank"
                  rel="noreferrer"
                  className="social_link"
                  onMouseOver={() => setIsHover("insta")}
                  onMouseOut={() => setIsHover(null)}
                >
                  <img
                    src={isHover === "insta" ? instagramGolden : instagram}
                    alt="instagram"
                    className="social_icon"
                  />
                </Link>
                <Link
                  to="https://www.facebook.com/profile.php?id=61565490851520"
                  target="_blank"
                  rel="noreferrer"
                  className="social_link"
                  onMouseOver={() => setIsHover("fb")}
                  onMouseOut={() => setIsHover(null)}
                >
                  <img
                    src={isHover === "fb" ? facebookGolden : facebook}
                    alt="facebook"
                    className="fb_icon social_icon"
                  />
                </Link>
                <Link
                  to="/"
                  className="social_link"
                  onMouseOver={() => setIsHover("youtube")}
                  onMouseOut={() => setIsHover(null)}
                >
                  <img
                    src={isHover === "youtube" ? youtubeGolden : youtube}
                    alt="youtube"
                    className="social_icon"
                  />
                </Link>
              </div>
            </div>

            <div className="col-md-4 copy_col order-md-3">
              <div className="privacy_wrapper">
                <Link to={privacyyUrl} className="privacy_link">
                  Privacy Policy
                </Link>
                &nbsp;{"|"}&nbsp;
                <span className="divider"></span>
                <Link to={termsUrl} className="privacy_link">
                  Terms & Conditions
                </Link>
              </div>
            </div>

            <div className="col-md-4 copy_col order-md-1">
              <p className="copy_text">
                Sanraj © All Rights Reserved - {currentYear.getFullYear()}{" "}
                <br /> {`${width > 767 ? " | " : ""}`}
                <a
                  href="https://www.togglehead.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Crafted by Togglehead
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
