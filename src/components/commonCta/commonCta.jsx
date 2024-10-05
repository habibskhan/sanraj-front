import React from "react";
import "./commonCta.scss";
import { Link } from "react-router-dom";
import { ctaBlackArrow, ctaWhiteArrow } from "../../images";

const CommonCta = ({ link, linkText, linkCta, externalLink, darkbg }) => {
  return (
    <>
      <section className="comm_cta_sec1">
        {linkCta ? (
          externalLink ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="cta_link"
            >
              <span className="cta_text"><span className="cta">{linkText}</span></span>{" "}
              <span className="arrow_wrapper">
                <img
                  src={darkbg ? ctaWhiteArrow : ctaBlackArrow}
                  alt="right arrow"
                  className="white_right_arrow"
                />
              </span>
            </a>
          ) : (
            <Link to={link} className="cta_link">
              <span className="cta_text"><span className="cta">{linkText}</span></span>{" "}
              <span className="arrow_wrapper">
                <img
                  src={darkbg ? ctaWhiteArrow : ctaBlackArrow}
                  alt="right arrow"
                  className="white_right_arrow"
                />
              </span>
            </Link>
          )
        ) : (
          <button className="cta_link">
            <span className="cta_text"><span className="cta">{linkText}</span></span>{" "}
            <span className="arrow_wrapper">
              <img
                src={darkbg ? ctaWhiteArrow : ctaBlackArrow}
                alt="right arrow"
                className="white_right_arrow"
              />
            </span>
          </button>
        )}
      </section>
    </>
  );
};

export default CommonCta;
