import React, { useEffect } from "react";
import "./healthCare.scss";
import SectionContent from "../../components/SectionContent/SectionContent";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import { useWindowSize } from "react-use";
import VentureBox from "../../components/VentureBox/VentureBox";
import { healthcareBanner, healthcareBannerMb } from "../../images";
import { healthcareData } from "../../data/businessVentures";

const HealthCare = () => {
  const { width } = useWindowSize();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <CommonBanner
        title={"Healthcare"}
        banner={width > 767 ? healthcareBanner : healthcareBannerMb}
        linkText1={"Business Ventures"}
        linkText2={"Healthcare"}
      />

      <section className="health_sec1">
        <SectionContent
          leftHeading="HEALTHCARE"
          desc="SanRaj Group is leading the way in healthcare innovation with its focus on establishing a modern, world-class cancer hospital. This facility will integrate the latest advancements in medical technology and treatment practices to offer comprehensive care. From early detection to advanced therapies, the hospital aims to deliver exceptional patient care and improve outcomes. By investing in this project, SanRaj is committed to advancing cancer treatment and providing top-tier healthcare services through a forward-thinking approach and a dedication to patient well-being."
        />
      </section>

      <section className="health_sec2">
        <VentureBox
          leftHeading="OUR HOSPITAL"
          VentureBoxData={healthcareData}
        />
      </section>
    </>
  );
};

export default HealthCare;
