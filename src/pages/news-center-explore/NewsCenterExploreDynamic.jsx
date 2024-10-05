import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./newscenterexplore.scss";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import SectionContent from "../../components/SectionContent/SectionContent";
import {
  mediaSection01,
  mediaSectionMb01,
  newsCentreBanner,
  newsCentreBannerMb,
} from "../../images";
import { useWindowSize } from "react-use";
import http from "../../helpers/http";
import config from "../../config/config";

const NewsCenterExplore = () => {
  const { id } = useParams();
  const { width } = useWindowSize();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const base_url = config.api_url;

  useEffect(() => {
    const fetchNewsItem = async () => {
      setLoading(true);
      const { data } = await http.get(`${base_url}/newscentre/${id}`);
      if (data) {
        setNewsItem(data);
        setLoading(false);
      }
    };

    fetchNewsItem();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!newsItem) return <div>News item not found</div>;

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
          rightHeading={newsItem.title}
          desc={newsItem.description}
          img={`${config.image_url}${newsItem.image.url}`}
        />
      </div>
    </>
  );
};

export default NewsCenterExplore;
