import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./counterItem.scss";

const Counteritem = ({
  startCount,
  endCount,
  countTitle,
  duration,
}) => {
  return (
    <CountUp start={startCount} end={endCount} duration={duration}>
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
          <>
            <div className="common_counter_wrapper">
              <div className="common_actual_count">
                <span ref={countUpRef} className="numb" />
                <span className="data_wrapper">
                <span className="plus">+</span>
                <span className="title" dangerouslySetInnerHTML={{__html:countTitle}}></span>
                </span>
              </div>
              &nbsp;
            </div>
          </>
        </VisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counteritem;
