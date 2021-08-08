import React, { useLayoutEffect, useRef, useState } from "react";
import {
  Section,
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
  Per,
} from "./TechnologiesStyles";
import { technologies } from "../../constants/constants";

const Technologies = ({}) => {
  

  return (
    <Section id="tech">
      <SectionTitle main>Technologies</SectionTitle>
      <TechnologyComponents>
        {technologies.map((p, i) => (
          <TechItem key={i}>
            <ImageContainer>
              <img align="left" alt="React" width="100%" src={p.image} />
            </ImageContainer>
            <TechName>{p.name}</TechName>
            <TechExp>
              <span>{p.experience}</span>
            </TechExp>
            <TechPer percent={p.percentage}>
              {p.percentage}
              <Per style={{ color: "#fff" }}>%</Per>
            </TechPer>
            <Progress done={p.percentage} />
          </TechItem>
        ))}
      </TechnologyComponents>
    </Section>
  );
};
const Progress = ({ done }) => {

  const [style, setStyle] = useState({});

  const ourRef = useRef(null)

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
   //added to reduce redundancy
    const div1Pos = topPos(ourRef.current)

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        setTimeout(() => {
          const newStyle = {
            opacity: 1,
            width: `${done}%`,
          };
      
          setStyle(newStyle);
        }, 200);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  

  return (
    <>
      <ProgressCont >
        <ProgressBar ref={ourRef} style={style} />
      </ProgressCont>
    </>
  );
};

export default Technologies;
