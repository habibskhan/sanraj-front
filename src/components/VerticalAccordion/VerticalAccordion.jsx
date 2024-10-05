import React, { useState } from "react";
import "./verticalAccordion.scss";
import { Link } from "react-router-dom";
import { ctaBlackArrow, rightWhiteArrow } from "../../images";
import { useWindowSize } from "react-use";

const VerticalAccordion = ({ listItems }) => {
  const { width } = useWindowSize();
  const [selectedIndex, setSelectedIndex] = useState();

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="vaccodion_container">
        {width > 991 ? (
          <ul className="vaccordion_list_wrapper">
            {listItems.map((item, index) => (
              <li
                key={index}
                className={`vaccordion_list ${
                  selectedIndex === index ? "selected" : ""
                }`}
                // onClick={() => handleItemClick(index)}
                onMouseOver={() => handleItemClick(index)}
                onMouseOut={() => handleItemClick(null)}
              >
                <img src={item.img} alt={item.alt} className="bg_img" />
                <div className="vaccordion_title_wrapper">
                  <div className="maintitle ">{item.mainTitle}</div>
                </div>
                <div className="desc_wrapper">
                  <h4 className="sub_title">{item.mainTitle}</h4>
                  <p className="section_desc20">{item.desc}</p>
                  <Link to={item.url}>
                    <div className="arrow_wrapper">
                    <img
                      src={ctaBlackArrow}
                      alt="right arrow"
                      className="right_arrow"
                    />
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="row vacc_row">
            {listItems.map((box, i) => (
              <div className="col-md-12 vacc_col" key={i}>
                <div className="vacc_box">
                  <img src={box.mbImg} alt={box.alt} className="box_img" />
                  <div className="head_wrapper">
                    <h4 className="section_heading32">{box.mainTitle}</h4>
                    <Link to={() => false}>
                      <img
                        src={rightWhiteArrow}
                        alt="right arrow"
                        className="right_arrow"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default VerticalAccordion;
