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
import http from "../../helpers/http";
import config from "../../config/config";

const NewsCenterDynamic = () => {
  const { width } = useWindowSize();
  const base_url = config.api_url;
  const image_url = config.image_url;
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState({
    "Media Mentions": [],
    Awards: [],
    "Press Releases": [],
  });
  const limit = 3;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCounts, setDisplayCounts] = useState({
    "Media Mentions": limit,
    Awards: limit,
    "Press Releases": limit,
  });

  const getPaginatedData = (category) => {
    return newsData[category].slice(0, displayCounts[category]);
  };

  const handleLoadMore = (category) => {
    setDisplayCounts((prevCounts) => ({
      ...prevCounts,
      [category]: prevCounts[category] + limit,
    }));
  };

  const fetchAllNews = async (category, pageNum) => {
    const { data } = await http.get(`${base_url}/newscentre`);
    if (data) {
      const newData = {
        "Media Mentions": [],
        Awards: [],
        "Press Releases": [],
      };
      //   const categories = ["Media Mentions", "Awards", "Press Releases"];
      data.forEach((item) => {
        switch (item.category?.name) {
          case "Media Mentions":
            newData["Media Mentions"].push({
              id: item._id,
              img: `${image_url}${item.image.url}`,
              alt: item.image.name,
              title: item.title,
              desc: item.description,
            });
            break;
          case "Awards":
            newData["Awards"].push({
              id: item._id,
              img: `${image_url}${item.image.url}`,
              alt: item.image.name,
              desc: item.description,
            });
            break;
          case "Press Releases":
            newData["Press Releases"].push({
              id: item._id,
              img: `${image_url}${item.image.url}`,
              alt: item.image.name,
              title: item.title,
              desc: item.description,
            });
            break;
          default:
            break;
        }
      });
      setNewsData(newData);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/news-center/${id}`);
  };

  useEffect(() => {
    fetchAllNews();
  }, []);

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

      <div className="news-center">
        <SectionContent
          leftHeading="MEDIA MENTIONS"
          desc="Stay informed with the latest updates and announcements from SanRaj Group through our official press releases."
        />

        <div className="news-center-cards-media">
          <NewsCard
            dataList={getPaginatedData("Media Mentions")}
            // onCardClick={handleCardClick}
          />
          {displayCounts["Media Mentions"] <
            newsData["Media Mentions"].length && (
            <div className="btn-container">
              <button
                className="load-more"
                onClick={() => handleLoadMore("Media Mentions")}
              >
                LOAD MORE
              </button>
            </div>
          )}
          {/* <div className="btn-container">
            <button
              className="load-more"
              onClick={() => handleLoadMore("Media Mentions")}
            >
              LOAD MORE
            </button>
          </div> */}
        </div>

        <>
          <SectionContent
            leftHeading="AWARDS"
            desc="Explore SanRaj Group's distinguished recognitions and accolades, celebrating excellence and innovation across our diverse business ventures."
          />
          <div className="news-center-cards-awards">
            <NewsCard
              dataList={getPaginatedData("Awards")}
              // onCardClick={handleCardClick}
            />
            {displayCounts["Awards"] < newsData["Awards"].length && (
              <div className="btn-container">
                <button
                  className="load-more"
                  onClick={() => handleLoadMore("Awards")}
                >
                  LOAD MORE
                </button>
              </div>
            )}
            {/* <div className="btn-container">
              <button
                className="load-more"
                onClick={() => handleLoadMore("Awards")}
              >
                LOAD MORE
              </button>
            </div> */}
          </div>
        </>

        <>
          <SectionContent
            leftHeading="PRESS RELEASES"
            desc="Discover how SanRaj Group's achievements and initiatives are highlighted in prominent media outlets, reflecting our impact across various industries."
          />

          <div className="news-center-cards-press">
            <NewsCard
              dataList={getPaginatedData("Press Releases")}
              onCardClick={handleCardClick}
            />
            {displayCounts["Press Releases"] <
              newsData["Press Releases"].length && (
              <div className="btn-container">
                <button
                  className="load-more"
                  onClick={() => handleLoadMore("Press Releases")}
                >
                  LOAD MORE
                </button>
              </div>
            )}
          </div>
        </>
      </div>
    </>
  );
};

export default NewsCenterDynamic;
