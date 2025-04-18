import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Experince = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Every project I have worked on has been an opportunity to grow and
          refine my skills as a developer. From coding dynamic web applications
          to improving user experiences, my journey has been about continuous
          learning and problem-solving.
        </Desc>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};
export default Experince;
