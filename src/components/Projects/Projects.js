import React, { useState, useEffect } from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Projects = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [clicked, setClicked] = useState(false);
  const handleWindowSizeChange = () => {
    setWidth( window.innerWidth );
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  let isMobile = width <= 768 ? true : false;

  return (
    <Section nopadding id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {projects.map((p, i) => {
            return isMobile ? (
              clicked || i < 3 ? (
                <GridDiv p={p} i={i} />
              ) : ( i > 3 ? null :
                <button
                  style={{
                    background: "transparent",
                    color: "inherit",
                    border: "0px",
                    padding: 0,
                    cursor: "pointer",
                    outline: "inherit",
                  }}
                  onClick={() => {
                    setClicked(true);
                  }}
                >
                  <UtilityList><ExternalLinks>View More</ExternalLinks></UtilityList>
                </button>
              )
            ) : (
              <GridDiv p={p} i={i} />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </Section>
  );
};

const GridDiv = ({ p, i }) => {
  return (
    <GridContainer>
      <BlogCard key={i}>
        <Img src={p.image} />
        <TitleContent>
          <HeaderThree title>{p.title}</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo className="card-info">{p.description}</CardInfo>
        <Hr />
        <div>
          <TitleContent>Stack</TitleContent>
          <TagList>
            {p.tags.map((t, i) => {
              return <Tag key={i}>{t}</Tag>;
            })}
          </TagList>
        </div>
        <UtilityList>
          {p.visit === "" ? null : (
            <ExternalLinks href={p.visit}>{p.visitName}</ExternalLinks>
          )}
          {p.source === "" ? null : (
            <ExternalLinks href={p.source}>{p.sourceName}</ExternalLinks>
          )}
        </UtilityList>
      </BlogCard>
    </GridContainer>
  );
};
export default Projects;
