import React, { useEffect } from "react";
import "./newscenterexplore.scss";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import { useParams } from "react-router-dom";
import { newsItemMock } from "../../data/newsCenterExplore";
import SectionContent from "../../components/SectionContent/SectionContent";
import { newsCenterPressData } from "../../data/newsCenter";
import { newsCentreBanner, newsCentreBannerMb } from "../../images";
import { useWindowSize } from "react-use";
import CommonCta from "../../components/commonCta/commonCta";
const NewsCenterExplore = () => {
  const { width } = useWindowSize();
  const { id } = useParams();

  // In a real application, you would fetch the news item data based on the id
  // For this example, we'll use our mock data
  const newsItem = newsCenterPressData.find((it) => it.id == id);

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
        title={"News Center"}
        banner={width > 767 ? newsCentreBanner : newsCentreBannerMb}
        linkText1={"News Centre"}
      />

      <div className="news-center-explore">
        <SectionContent
          leftHeading={"PRESS RELEASES"}
          rightHeading={newsItem?.desc}
          desc={newsItem?.innerContent}
          img={newsItem?.heroImg}
          multiDesc={true}
          newsData={newsItem}
          newsInnerCtaLink={newsItem?.innerLink}
        />
      </div>
    </>
  );
};

export default NewsCenterExplore;
