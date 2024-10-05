import React from "react";
import "./expandableCard.scss";

const ExpandableCard = ({
  name,
  title,
  imageUrl,
  description,
  index,
  isExpanded,
  onExpand,
  onCollapse,
}) => {
  return (
    <div
      className={`expandable-card ${
        isExpanded ? "is-expanded" : "is-collapsed"
      }`}
    >
      <div className="expandable-card__inner js-expander" onClick={onExpand}>
        <img src={imageUrl} alt={name} className="card-image" />
        <div className="card-content">
          <div>
            <h3 className="card-name">{name}</h3>
            <p className="card-title">{title}</p>
          </div>
          <button className="expand-button">{isExpanded ? "−" : "+"}</button>
        </div>
      </div>
      <div className="expandable-card__expander">
        <h4 className="desc-name">{name}</h4>
        <p className="desc-title">{title}</p>
        <p
          className="desc-text"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <button className="close-button" onClick={onCollapse}>
          ×
        </button>
      </div>
    </div>
  );
};

export default ExpandableCard;
