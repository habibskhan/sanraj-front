import React, { useEffect } from "react";
import "./hospitality.scss";
import SectionContent from "../../components/SectionContent/SectionContent";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import { useWindowSize } from "react-use";
import VentureBox from "../../components/VentureBox/VentureBox";
import { hospitalityBanner, hospitalityBannerMb } from "../../images";
import { HospitalityData } from "../../data/businessVentures";

const Hospitality = () => {
  const { width } = useWindowSize();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },[]);

  return (
    <>
      <CommonBanner
        title={"Hospitality"}
        banner={width > 767 ? hospitalityBanner : hospitalityBannerMb}
        linkText1={"Business Ventures"}
        linkText2={"Hospitality"}
      />

      <section className="hosp_sec1">
        <SectionContent
          leftHeading="HOSPITALITY"
          desc="SanRaj Group is revolutionizing the hospitality industry with its portfolio of luxurious and innovative hotels. Each property is designed to offer exceptional comfort and sophisticated amenities, setting new standards for elegance and service. By integrating cutting-edge technology and unique design elements, these hotels provide guests with unparalleled experiences that blend opulence with modern convenience. This commitment to excellence is reshaping the expectations of luxury travel and elevating the overall guest experience."
        />
      </section>

      <section className="hosp_sec2">
        <VentureBox
          leftHeading="OUR PROPERTIES"
          VentureBoxData={HospitalityData}
        />
      </section>
    </>
  );
};

export default Hospitality;
