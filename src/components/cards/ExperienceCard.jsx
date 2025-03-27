import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from 'styled-components';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgb(23,92,230,0.15) 0px 4px 24px",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight:"7px solid rgb(255,255,255,0.3)"
      }}
      date={experience.date}
    >
      vertical element
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
