import React, { useState } from "react";
import "./galleryCard.scss";
import GalleryCard from "./GalleryCard";
import { useWindowSize } from "react-use";

const categories = [
  { name: "Hospitality", key: "hospitality" },
  { name: "IT", key: "it" },
  { name: "Healthcare", key: "healthcare" },
  { name: "Infrastructure", key: "infrastructure" },
  { name: "Sports", key: "sports" },
  { name: "Renewable Energy", key: "renewableEnergy" },
];

const GalleryGrid = ({ images }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].key);
  const { width } = useWindowSize();

  const filteredImages = images.filter(
    (image) => image.category === selectedCategory
  );

  const handleProductTabChange = (e) => {
    const productIndexId = e.target.selectedOptions[0].dataset.productindexid;
    setSelectedCategory(String(productIndexId));
  };

  return (
    <section className="category-section my_container">
      {width > 992 ? (
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`category-button ${
                selectedCategory === category.key ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.name}
            </button>
          ))}
        </div>
      ) : (
        <div className="category-filters">
          <select
            className={`category-button`}
            onChange={handleProductTabChange}
          >
            {categories.map((category) => (
              <option
                value={category.name}
                data-productindexid={category.key}
                key={category.key}
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="category-images">
        {filteredImages.map((image, index) => (
          <GalleryCard key={index} image={image} />
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;
