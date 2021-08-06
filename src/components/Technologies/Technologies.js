import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  TechnologyComponents,
  ProgressBar,
  ImageContainer,
  TechItem,
  TechName,
  TechExp,
  TechPer,
  ProgressCont,
  Per
} from "./TechnologiesStyles";
import { technologies } from "../../constants/constants";

const Technologies = () => (
  <Section id="tech">
    <SectionTitle main>Technologies</SectionTitle>
    <TechnologyComponents>
      {technologies.map((p, i) => (
        <TechItem key={i}>
          <ImageContainer>
            <img align="left" alt="React" width="100%" src={p.image} />
          </ImageContainer>
          <TechName>{p.name}</TechName>
          <TechExp><span>{p.experience}</span></TechExp>
          <TechPer percent={p.percentage}>{p.percentage}<Per style={{color: '#fff'}}>%</Per></TechPer>
          <Progress done={p.percentage} />
        </TechItem>
      ))}
    </TechnologyComponents>
  </Section>
);

const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <>
      <ProgressCont>
        <ProgressBar style={style} />
      </ProgressCont>
    </>
  );
};

export default Technologies;
