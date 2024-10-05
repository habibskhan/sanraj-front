import React, { useEffect } from "react";
import "./infrastructure.scss";
import SectionContent from "../../components/SectionContent/SectionContent";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import { useWindowSize } from "react-use";
import VentureBox from "../../components/VentureBox/VentureBox";
import { infrastructureBanner, infrastructureBannerMb } from "../../images";
import { infrasturctureData } from "../../data/businessVentures";

const Infrastructure = () => {
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
        title={"Infrastructure"}
        banner={width > 767 ? infrastructureBanner : infrastructureBannerMb}
        linkText1={"Business Ventures"}
        linkText2={"Infrastructure"}
      />

      <section className="infra_sec1">
        <SectionContent
          leftHeading="INFRASTRUCTURE"
          desc="As part of our growth strategy, we are dedicated to acquiring and developing premium real estate assets, including corporate parks. Our portfolio features top-tier properties that meet high standards of quality and functionality. We are actively pursuing opportunities for further expansion to enhance our holdings and cater to evolving market needs. Through strategic investments and acquisitions, we aim to strengthen our position in the real estate sector and deliver superior value to our stakeholders."
        />
      </section>

      <section className="infra_sec2">
        <VentureBox
          leftHeading=""
          VentureBoxData={infrasturctureData}
        />
      </section>
    </>
  );
};

export default Infrastructure;
