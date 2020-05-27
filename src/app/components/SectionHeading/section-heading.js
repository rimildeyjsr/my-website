import React from 'react';
import './section-heading.scss';

export default function SectionHeading(props) {
  return (
    <div
      className="heading-container"
      style={{'background-color': props.backgroundColor}}
    >
      <h1
        className="heading"
        style={{'color': props.textColor}}
      >
        {props.sectionName}
      </h1>
    </div>
  )
}
