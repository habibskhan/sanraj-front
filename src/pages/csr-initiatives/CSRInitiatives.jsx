import React, { useEffect } from "react";
import "./csrinitiatives.scss";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import SectionContent from "../../components/SectionContent/SectionContent";
import { useWindowSize } from "react-use";
import { images } from "../../images";

const CSRInitiatives = () => {
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
        title={"CSR Initiatives"}
        banner={width > 600 ? images.csrbanner.image : images.csrbannerMB.image}
        linkText1={"Our Initiatives"}
      />

      <div className="csr-initiatives">
        <SectionContent
          leftHeading={"OUR CSR <br/> INITIATIVES"}
          rightHeading={
            "Sanraj Group: Committed to Social Upliftment and Community Welfare"
          }
          desc={
            "SanRaj Family is committed to making a lasting impact on community and society through its diverse initiatives. In line with its vision, the trust actively engages in initiatives that enhance educational access and quality, fostering learning environments that encourage academic growth. Its focus on sports aims to promote physical well-being and nurture talent at the grassroots level. Additionally, the trust prioritizes providing relief to those in need, ensuring essential support for vulnerable populations. Beyond these core areas, the trust extends its efforts to broader causes that serve the public good, reinforcing its commitment to holistic and sustainable community development. It also provides financial support to individuals with disabilities, enhancing their quality of life. Moreover, the trust plays an active role in rural upliftment, supporting community development efforts aimed at improving the well-being of village populations through various means. Through these wide-ranging efforts, the Trust continues to fulfill its mission of serving society and advancing public welfare. The Trust promotes environmental sustainability and enhancing green cover in local communities. The trust's commitment to environmental conservation, while encouraging active participation from the public to create a healthier, greener future."
          }
        />
      </div>
    </>
  );
};

export default CSRInitiatives;
