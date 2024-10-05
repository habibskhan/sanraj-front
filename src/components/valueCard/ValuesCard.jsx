import React from 'react';
import './valuesCard.scss'

const ValuesCard = ({ sections }) => {


    return (
        <section className="mission-vision-philosophy">
            {sections.map((section, index) => (
                <div key={index} className="mvp-card">
                    <img className="icon" src={section.icon} alt={`${section.icon}`} />
                    <h3 className='title'>{section.title}</h3>
                    <p className='content'>{section.content}</p>
                </div>
            ))}
        </section>
    );
};

export default ValuesCard;