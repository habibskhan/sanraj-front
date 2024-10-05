import React, { useEffect } from "react";
import "./renewableEnergy.scss";
import SectionContent from "../../components/SectionContent/SectionContent";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import { useWindowSize } from "react-use";
import VentureBox from "../../components/VentureBox/VentureBox";
import { renewableEnergyBanner, renewableEnergyBannerMb } from "../../images";
import { renewableEnergyData } from "../../data/businessVentures";

const RenewableEnergy = () => {
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
        title={"Renewable Energy"}
        banner={width > 767 ? renewableEnergyBanner : renewableEnergyBannerMb}
        linkText1={"Business Ventures"}
        linkText2={"Renewable Energy"}
      />

      <section className="renewable_energy_sec1">
        <SectionContent
          leftHeading="Renewable Energy"
          desc="At SanRaj Group, we are committed to advancing renewable energy through a variety of innovative projects and services. We are deploying modern technologies in solar, wind, and bioenergy to reduce carbon emissions and promote environmental sustainability effectively. Our focus is on meeting current energy demands while creating a cleaner, more sustainable future for generations to come."
        />
      </section>

      <section className="renewable_energy_sec2">
        <VentureBox
          leftHeading=""
          VentureBoxData={renewableEnergyData}
        />
      </section>
    </>
  );
};

export default RenewableEnergy;
