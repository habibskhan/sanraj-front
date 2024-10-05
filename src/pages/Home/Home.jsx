import React, { useEffect, useState } from "react";
import "./home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useWindowSize } from "react-use";
import {
  accordionListItems,
  bannerData,
  counterData,
  newsData,
} from "../../data/home";
import { leftArrow, rightArrow } from "../../images";
import CommonCta from "../../components/commonCta/commonCta";
import SectionContent from "../../components/SectionContent/SectionContent";
import NewsCard from "../../components/NewsCard/NewsCard";
import VerticalAccordion from "../../components/VerticalAccordion/VerticalAccordion";
import { ourCompanyUrl } from "../../components/helpers/constant-words";

const Home = () => {
  const { width } = useWindowSize();
  const [isMarginLeft, setIsMarginLeft] = useState(0);

  const bannerList = bannerData.map((item, i) => (
    <SwiperSlide key={i}>
      <img
        src={width > 767 ? item.img : item.mbImg}
        alt={item.alt}
        className="banner_img"
      />
      <div className="my_container">
        <div className="content_wrapper">
          <h2 className="banner_heading">{item.title}</h2>
          <p className="banner_desc">{item.desc}</p>
          <CommonCta
            linkCta={true}
            linkText="Know More"
            link={item.link}
            darkbg={true}
          />
        </div>
      </div>
    </SwiperSlide>
  ));

  const counterList = counterData.map((item, i) => (
    <SwiperSlide key={i}>
      <div className="counter_container">
        {/* <Counteritem
          startCount={item.numb}
          endCount={item.numb}
          duration={0}
          countTitle={item.title}
        /> */}
        <div className="common_counter_wrapper">
          <div className="common_actual_count">
            <span className="numb">{item.numb}</span>
            <span className="data_wrapper">
              <span className="plus">+</span>
              <span
                className="title"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></span>
            </span>
          </div>
        </div>
        <img src={item.img} alt={item.alt} className="counter_img" />
      </div>
    </SwiperSlide>
  ));

  const adjustMargins = () => {
    const windowsize = window.innerWidth;
    const secwidth = document.querySelector(".my_container").offsetWidth;
    const calcwidth = windowsize - secwidth;

    if (secwidth) {
      setIsMarginLeft(calcwidth / 2);
    }
  };

  useEffect(() => {
    adjustMargins();
    // Adjust margins when window resizes
    const handleResize = () => adjustMargins();
    window.addEventListener("resize", handleResize);
    // Adjust margins on window load
    window.addEventListener("load", handleResize);
    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", adjustMargins);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },[]);

  return (
    <>
      <section className="home_sec1">
        <div className="banner_slider_wrapper">
          <Swiper
            slidesPerView={1}
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
            className="banner_slider"
          >
            {bannerList}
            <div className="banner_arrows">
              <div className="arrow_wrapper_left">
                <img src={leftArrow} alt="left arrow" className="left_arrow" />
              </div>
              <div className="arrow_wrapper_right">
                <img
                  src={rightArrow}
                  alt="right arrow"
                  className="right_arrow"
                />
              </div>
            </div>
          </Swiper>
        </div>
      </section>

      <section className="home_sec2">
        <SectionContent
          leftHeading="01. WHO WE ARE"
          rightHeading="SanRaj Group: Pioneering success across diverse sectors with a commitment to innovation, integrity, and sustainable growth."
          desc="Sanraj Ventures is promoted by Sandip Gupta and Rajdip Gupta, they bring over two decades of expertise in building and scaling successful businesses across diverse sectors such as information technology, hospitality, infrastructure, sports, and renewable energy. With their deep understanding of business dynamics and strategic foresight, they have consistently delivered results that align with stakeholder expectations. Their hands-on approach and commitment to driving growth have made a significant impact on each venture they have undertaken, demonstrating their ability to navigate complex industries and achieve sustainable success."
          cta={true}
          ctaText="Know More"
          link={ourCompanyUrl}
        />
      </section>

      <section className="home_sec3">
        <div
          className="my_container"
          style={{ marginLeft: `${isMarginLeft}px` }}
        >
          <div className="counter_content_wrapper">
            <Swiper
              slidesPerView={1.72}
              spaceBetween={10}
              // centeredSlides={true}
              allowTouchMove={false}
              loop={counterData.length !== 0 ? true : false}
              modules={[Autoplay]}
              speed={6000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 0.9,
                },
                768: {
                  slidesPerView: 1.4,
                },
                992: {
                  slidesPerView: 1.8,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1194: {
                  slidesPerView: 2.3,
                },
                1280: {
                  slidesPerView: 2.4,
                },
                1366: {
                  slidesPerView: 2.4,
                },
                1440: {
                  slidesPerView: 2.6,
                },
                1536: {
                  slidesPerView: 2.6,
                },
                1600: {
                  slidesPerView: 2.3,
                },
                1700: {
                  slidesPerView: 2.4,
                },
                1920: {
                  slidesPerView: 2.2,
                  spaceBetween: 10,
                },
              }}
              className="counter_slider"
            >
              {counterList}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="home_sec4">
        <SectionContent
          leftHeading="02. OUR BUSINESS VENTURES"
          desc="SanRaj Group is a dynamic conglomerate with diverse business ventures across hospitality, healthcare, IT, sports, and renewable energy. We are dedicated to driving innovation and excellence, creating sustainable growth and impact across all sectors we operate in."
        />
        <div className="my_container">
          <VerticalAccordion listItems={accordionListItems} />
        </div>
      </section>

      <section className="home_sec5">
        <SectionContent
          leftHeading="03. NEWS CENTRE"
          cta={width > 991 ? true : false}
          ctaText="View All"
        />
        <NewsCard dataList={newsData} />
        {width <= 991 && (
          <div className="my_container">
            <CommonCta linkCta={true} linkText="View All" link={() => false} />
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
