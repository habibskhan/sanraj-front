import React, { useEffect } from "react";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import ExpandableCardGrid from "../../components/expandableCard/ExpandableCardGrid";
import SectionContent from "../../components/SectionContent/SectionContent";
import { team } from "../../data/managementTeam";
import "./managementTeam.scss";
import { useWindowSize } from "react-use";

const ManagementTeam = () => {
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
        title={"Management Team"}
        banner={
          width > 600
            ? "/icons/management-team/management-team-banner.jpg"
            : "/icons/management-team/management-team-banner-mb.jpg"
        }
        linkText1={"About"}
        linkText2={"Management Team"}
      />

      <div className="management-team">
        <SectionContent
          leftHeading={"MANAGEMENT <br /> TEAM"}
          desc={
            "Our management team is dedicated to executing strategic initiatives with precision and excellence, ensuring operational efficiency and delivering sustainable value across all business functions."
          }
        />
        <section className="team_sec3 my_container">
          <ExpandableCardGrid people={team} />
        </section>
      </div>
    </>
  );
};

export default ManagementTeam;
