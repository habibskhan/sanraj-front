import React, { useEffect } from "react";
import CommonBanner from "../../components/commonBanner/CommonBanner";
import GalleryGrid from "../../components/gallery/GalleryGrid";
import { galleryImage } from "../../data/gallery";
import "./gallery.scss";
import { useWindowSize } from "react-use";
import { images } from "../../images";

const Gallery = () => {
  const { width } = useWindowSize();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  
  return (
    <div>
      <CommonBanner
        title={"Gallery"}
        banner={
          width > 600
            ? images.gallerybanner.image
            : images.gallerybannerMB.image
        }
        linkText1={"Gallery"}
      />

      <section className="gallery">
        <GalleryGrid images={galleryImage} />
      </section>
    </div>
  );
};

export default Gallery;
