import React, { useEffect, useState, useRef } from "react";
import "./ventureBox.scss";
import { useWindowSize } from "react-use";

const VentureBox = ({ VentureBoxData, leftHeading, paraContent }) => {
  const {width} = useWindowSize();
  const ventureBoxRefs = useRef([]);
  const [ventureBoxHeights, setVentureBoxHeights] = useState([]);

  const calculateHeights = () => {
    const heightsArray = ventureBoxRefs.current.map((content) => {
      // return content ? content.clientHeight : 0; // Get the clientHeight of each venture box
      return content ? content.getBoundingClientRect().height : 0; // Use getBoundingClientRect for accurate height
    });
    setVentureBoxHeights(heightsArray);
  };

  useEffect(() => {
    // Use a timeout to ensure the DOM has rendered fully
    setTimeout(() => {
      calculateHeights();
    }, 100); // Adjust the delay if necessary
  }, [VentureBoxData]); // Run effect whenever VentureBoxData changes

  return (
    <>
      <div className="my_container">
        <div className="row venture_main_row">
          <div className="col-lg-3 venture_main_col">
            <div className="venture_mainbox">
              {leftHeading && (
                <h4 className="section_heading32">{leftHeading}</h4>
              )}
            </div>
          </div>
          <div className="col-lg-9 venture_main_col">
            <div className="venture_mainbox">
              {VentureBoxData.map((item, i) => (
                <div className="row venture_row" key={i}>
                  <div
                    className={`col-md-5 venture_col ${
                      i % 2 === 0 ? "order-md-1" : "order-md-2"
                    }`}
                  >
                    <div className="venture_box">
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="venture_img"
                        style={{
                          maxHeight:
                            width > 767 && ventureBoxHeights[i]
                              ? `${ventureBoxHeights[i]}px`
                              : "100%",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className={`col-md-7 venture_col ${
                      i % 2 === 0 ? "order-md-2" : "order-md-1"
                    }`}
                  >
                    <div className="venture_box">
                      <div
                        className="content_wrapper"
                        ref={(el) => (ventureBoxRefs.current[i] = el)}
                      >
                        {item.title && (
                          <h4
                            className="section_heading32"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          ></h4>
                        )}
                        <p
                          className="section_desc16"
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {paraContent && (
              <div className="venture_content_wrapper">
                {paraContent.map((content, index) => (
                  <p
                    className="section_desc20"
                    key={index}
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VentureBox;
