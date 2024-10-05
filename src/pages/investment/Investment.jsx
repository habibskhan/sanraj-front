import React, { useEffect } from "react";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import "./investment.scss";
import { useWindowSize } from "react-use";
import { images } from "../../images";

const Investment = () => {
  const { width } = useWindowSize();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <CommonBanner
        title={"Investments"}
        banner={
          width > 600
            ? images.investmentsbanner.image
            : images.investmentsbannermb.image
        }
        linkText1={"Investments"}
      />

      <section className="my_container">
        <div className="investment">
          <h2 className="title">STRATEGIC INVESTMENTS</h2>
          <div className="desc">
            <p>
              Our investment approach is designed to maximise returns and drive
              growth across a range of high-potential sectors. We carefully
              select opportunities that align with our strategic vision and
              expertise, focusing on industries with substantial promise and
              impact.
            </p>
            <p>
              Our investment philosophy focuses on leveraging our existing
              interests in sports, hospitality, healthcare, infrastructure, and
              renewable energy. We invest in the newest technologies, including
              AI, ML, and blockchain, to optimise these investments, ensuring
              that we remain at the forefront of innovation and efficiency. By
              integrating these advanced technologies and insights, we aim to
              deliver exceptional results and substantial value to our
              stakeholders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investment;
