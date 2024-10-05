import React, { useEffect } from "react";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import ExpandableCardGrid from "../../components/expandableCard/ExpandableCardGrid";
import ValuesCard from "../../components/valueCard/ValuesCard";
import { ourAchievements, people, sections } from "../../data/ourCompany";
import "./ourCompany.scss";
import SectionContent from "../../components/SectionContent/SectionContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ctaBlackArrow } from "../../images";
import { useWindowSize } from "react-use";

const OurCompany = () => {
  const { width } = useWindowSize();

  const ourAchievementsList = ourAchievements.map((item, i) => (
    <SwiperSlide key={i}>
      <div className="news_box">
        <div className="img_wrapper">
          <img src={item.img} alt={item.alt} className="news_img" />
        </div>
        <div className="news_content">
          <p
            className="section_desc20"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      </div>
    </SwiperSlide>
  ));

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
        title={"Our Company"}
        banner={width > 600 ? "/icons/our-company/our-company-banner.jpg": "/icons/our-company/our-company-banner-mb.jpg"}
        linkText1={"About"}
        linkText2={"Our Company"}
      />

      <div className="our-company">
        <SectionContent
          leftHeading="ABOUT <br /> SANRAJ GROUP"
          desc={`Sanraj Ventures is promoted by Sandip Gupta and Rajdip Gupta, they bring over two decades of expertise in building and scaling successful businesses across diverse sectors such as information technology, hospitality, infrastructure, sports, and renewable energy. With their deep understanding of business dynamics and strategic foresight, they have consistently delivered results that align with stakeholder expectations. Their hands-on approach and commitment to driving growth have made a significant impact on each venture they have undertaken, demonstrating their ability to navigate complex industries and achieve sustainable success. <br/>

                    Incorporated 2009, SanRaj Family Ventures (SanRaj Group) has ventured into various businesses, like information technology, hospitality, healthcare, sports, renewable energy, infrastructure, and corporate parks. SanRaj Group is committed to fostering innovation and sustainability while ensuring that the interests of all shareholders are prioritized. Through its diverse business ventures, SanRaj Group consistently works towards creating long-term value and contributing to the growth and development of the industries in which it operates.
                `}
        />

        <section className="company_sec3 my_container">
          <ValuesCard sections={sections} />
        </section>

        {/* <section className="company_sec4 my_container">
          <CustomSlider slides={achievements} slidesPerView={3} />
        </section> */}

        <section className="company_slider_sec">
          <div className="my_container">
            <div className="head_wrapper">
              <h2 className="section_heading32">OUR ACHIEVEMENTS</h2>
              {width > 767 && (
                <div className="company_arrows">
                  <div className="arrow_wrapper_left">
                    <img
                      src={ctaBlackArrow}
                      alt="left arrow"
                      className="left_arrow"
                    />
                  </div>
                  <div className="arrow_wrapper_right">
                    <img
                      src={ctaBlackArrow}
                      alt="right arrow"
                      className="right_arrow"
                    />
                  </div>
                </div>
              )}
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={16}
              grabCursor={true}
              loop={true}
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".arrow_wrapper_right",
                prevEl: ".arrow_wrapper_left",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
              }}
              className="company_slider"
            >
              {ourAchievementsList}
              {width <= 767 && (
                <div className="company_arrows">
                  <div className="arrow_wrapper_left">
                    <img
                      src={ctaBlackArrow}
                      alt="left arrow"
                      className="left_arrow"
                    />
                  </div>
                  <div className="arrow_wrapper_right">
                    <img
                      src={ctaBlackArrow}
                      alt="right arrow"
                      className="right_arrow"
                    />
                  </div>
                </div>
              )}
            </Swiper>
          </div>
        </section>

        <section className="card-section">
          <SectionContent
            leftHeading={"LEADERSHIP TEAM"}
            desc={
              "Our leadership team is comprised of seasoned industry professionals who bring a wealth of experience and strategic vision, driving innovation and growth across our diverse business sectors."
            }
          />
          <div className="my_container">
            <ExpandableCardGrid people={people} />
          </div>
        </section>
      </div>
    </>
  );
};

export default OurCompany;
