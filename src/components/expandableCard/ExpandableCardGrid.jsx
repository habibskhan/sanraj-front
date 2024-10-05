import { useEffect, useState } from "react";
import ExpandableCard from "./ExpandableCard";
import './expandableCard.scss'

const ExpandableCardGrid = ({ people }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleCollapse = () => {
        setExpandedIndex(null);
    };

    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            if (index !== expandedIndex) {
                card.classList.add('is-inactive');
            } else {
                card.classList.remove('is-inactive');
            }
        });
    }, [expandedIndex]);

    return (
        <div className="">
            <div className="expandable-cards">
                {people.map((person, index) => (
                    <ExpandableCard
                        key={index}
                        {...person}
                        index={index}
                        isExpanded={expandedIndex === index}
                        onExpand={() => handleExpand(index)}
                        onCollapse={handleCollapse}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExpandableCardGrid;