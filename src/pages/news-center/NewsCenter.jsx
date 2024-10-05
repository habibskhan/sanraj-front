import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import NewsCard from "../../components/NewsCard/NewsCard";
import SectionContent from "../../components/SectionContent/SectionContent";
import {
  newsCenterAwardsData,
  newsCenterData,
  newsCenterPressData,
} from "../../data/newsCenter";
import "./newscenter.scss";
import { newsCentreBanner, newsCentreBannerMb } from "../../images";
import { useWindowSize } from "react-use";
import FsLightbox from "fslightbox-react";
import { newsCenterUrl } from "../../components/helpers/constant-words";

const NewsCenter = () => {
  const { width } = useWindowSize();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [vidLink, setVidLink] = useState("");

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/news-center/${id}`);
  };

  const handleWatchClick = (videoLink) => {
    setIsVideoModalOpen(!isVideoModalOpen);
    setVidLink(videoLink);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        setTimeout(() => {
          const offset = 120; // Gap from viewport top
          const targetPosition =
            targetSection.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
          // targetSection.scrollIntoView({ behavior: "smooth" });
        }, 0);
        navigate(newsCenterUrl, { replace: true });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  return (
    <>
      <CommonBanner
        title={"News Centre"}
        banner={width > 767 ? newsCentreBanner : newsCentreBannerMb}
        linkText1={"News Centre"}
      />

      <div className="news-center">
        <div id="media">
          <SectionContent
            leftHeading="MEDIA MENTIONS"
            desc="Stay informed with the latest updates and announcements from SanRaj Group through our official press releases."
          />

          <div className="news-center-cards-media">
            <NewsCard dataList={newsCenterData} video={handleWatchClick} />
            {/* <div className="btn-container">
            <button className="load-more">LOAD MORE</button>
          </div> */}
          </div>
        </div>

        <div id="awards">
          <SectionContent
            leftHeading="AWARDS"
            desc="Explore SanRaj Group's distinguished recognitions and accolades, celebrating excellence and innovation across our diverse business ventures."
          />
          <div className="news-center-cards-awards">
            <NewsCard
              dataList={newsCenterAwardsData}
              onCardClick={handleCardClick}
            />
            {/* <div className="btn-container">
              <button className="load-more">LOAD MORE</button>
            </div> */}
          </div>
        </div>

        <div id="press">
          <SectionContent
            leftHeading="PRESS RELEASES"
            desc="Discover how SanRaj Group's achievements and initiatives are highlighted in prominent media outlets, reflecting our impact across various industries."
          />

          <div className="news-center-cards-press">
            <NewsCard
              dataList={newsCenterPressData}
              onCardClick={handleCardClick}
            />
            {/* <div className="btn-container">
              <button className="load-more">LOAD MORE</button>
            </div> */}
          </div>
        </div>
      </div>
      <section className="news_ligibox_wrapper">
        <FsLightbox toggler={isVideoModalOpen} sources={[vidLink]} />
      </section>
    </>
  );
};

export default NewsCenter;
