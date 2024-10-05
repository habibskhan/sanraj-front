import React, { useEffect } from "react";
import "./informationTechnology.scss";
import SectionContent from "../../components/SectionContent/SectionContent";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import { useWindowSize } from "react-use";
import VentureBox from "../../components/VentureBox/VentureBox";
import { itBanner, itBannerMb } from "../../images";
import { informationTechnologyData, proximusData } from "../../data/businessVentures";


const InformationTechnology = () => {
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
        title={"Information Technology"}
        banner={width > 767 ? itBanner : itBannerMb}
        linkText1={"Business Ventures"}
        linkText2={"IT"}
      />

      <section className="info_tech_sec1">
        <SectionContent
          leftHeading="INFORMATION TECHNOLOGY"
          desc="SanRaj Group is committed to delivering innovative and scalable IT solutions that are meticulously tailored to address the diverse needs of businesses across various industries. Our mission is to design, develop, and manage IT infrastructure that enhances operational efficiency and drives digital transformation. <br/> We place a strong emphasis on research and development, consistently investing in advanced technologies and methodologies. This commitment enables us to deliver robust and reliable IT solutions that not only address current business needs but also anticipate future challenges. <br/> Our objective is to empower businesses to succeed in an increasingly complex digital landscape. By offering bespoke IT services that foster growth and innovation, SanRaj is dedicated to helping our clients achieve their strategic objectives."
        />
      </section>

      <section className="info_tech_sec2">
        <VentureBox
          leftHeading="PROXIMUS OPAL"
          VentureBoxData={informationTechnologyData}
          paraContent={proximusData}
        />
      </section>
    </>
  );
};

export default InformationTechnology;
