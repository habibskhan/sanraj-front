import React, { useEffect } from "react";
import "./sports.scss";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import { sections } from "../../data/sports";
import { sportsBanner, sportsBannerMb } from "../../images";
import { useWindowSize } from "react-use";

const SectionCard = ({
  title,
  content,
  isTeam = false,
  children,
  sectionImg,
}) => (
  <div className={`section-card ${isTeam ? "team-section" : ""}`}>
    <h2 className="section-title">{title}</h2>
    <div className="section-content">
      {sectionImg && (
        <img src={sectionImg} alt="saraswati devi" className="sec_img" />
      )}
      {isTeam ? children : <p>{content}</p>}
    </div>
  </div>
);

const TeamCard = ({ logo, name, description }) => (
  <div className="team-card">
    <img src={logo} alt={`${name} logo`} className="team-logo" />
    <div className="team-info">
      <h3 className="team-name">{name}</h3>
      <p
        className="team-description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  </div>
);

const SportsVenture = () => {
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
        title={"Sports"}
        banner={width > 767 ? sportsBanner : sportsBannerMb}
        link1={"home"}
        linkText1={"About"}
        linkText2={"Our Company"}
      />

      <div className="my_container">
        <div className="sports-venture">
          {sections.map((section) => (
            <SectionCard
              key={section.id}
              title={section.title}
              content={section.content}
              isTeam={section.isTeam}
              sectionImg={section.sectionImg}
            >
              {section.isTeam && (
                <div className="teams-container">
                  {section.teamData.map((team) => (
                    <TeamCard key={team.id} {...team} />
                  ))}
                </div>
              )}
            </SectionCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default SportsVenture;
