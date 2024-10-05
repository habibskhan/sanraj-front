import React from "react";
import "./galleryCard.scss";

const GalleryCard = ({ image }) => {
    return (
        <div className="category-card">
            <img src={image.src} alt={image.alt} className="category-card__image" />
        </div>
    );
};

export default GalleryCard;
