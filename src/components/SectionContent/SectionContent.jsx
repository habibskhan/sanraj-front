import React from "react";
import "./sectionContent.scss";
import CommonCta from "../commonCta/commonCta";

const SectionContent = ({
  leftHeading,
  rightHeading,
  desc,
  cta,
  ctaText,
  link,
  img,
  alt,
  multiDesc,
  newsData,
  newsInnerCtaLink,
}) => {
  return (
    <>
      <div className="my_container">
        <div className="row who_row">
          <div className="col-lg-3 who_col">
            <div className="content_wrapper">
              <h4
                className="section_heading32"
                dangerouslySetInnerHTML={{ __html: leftHeading }}
              ></h4>
            </div>
          </div>

          <div className="col-lg-9 who_col">
            <div className="content_wrapper">
              {rightHeading && (
                <h4
                  className="section_heading60"
                  dangerouslySetInnerHTML={{ __html: rightHeading }}
                ></h4>
              )}
              {img && <img src={img} alt={alt} className="news_img" />}
              {desc || cta ? (
                <div
                  className="desc_wrapper"
                  style={{ padding: !rightHeading ? "0" : "" }}
                >
                  {multiDesc
                    ? newsData?.innerContent.map((item, i) => (
                        <p
                          className="section_desc20"
                          style={{ maxWidth: !cta ? "100%" : "" }}
                          dangerouslySetInnerHTML={{ __html: item }}
                        ></p>
                      ))
                    : desc && (
                        <p
                          className="section_desc20"
                          style={{ maxWidth: !cta ? "100%" : "" }}
                          dangerouslySetInnerHTML={{ __html: desc }}
                        ></p>
                      )}

                  {cta && (
                    <CommonCta linkCta={true} linkText={ctaText} link={link} />
                  )}
                </div>
              ) : null}
            </div>
            {newsInnerCtaLink && (
              <div className="news_inner_cta">
                <CommonCta
                  link={newsInnerCtaLink}
                  externalLink={true}
                  linkText="Read More"
                  linkCta={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionContent;
