import React from "react";
import { Header } from "./sections/header/Header";
import {
  Navigation,
  SectionWrapper,
  ContentWrapper,
  Categories,
  RecipesGrid,
} from "components";

const Home: React.FC = () => {
  return (
    <>
      <ContentWrapper
        maxWidth={{ _: "", lmobile: "", ltablet: "80rem", desktop: "96rem" }}
      >
        <SectionWrapper
          borderBottom='1px solid #0000001a'
          px='s0'
          mx='s0'
          color='#000'
        >
          <Navigation />
        </SectionWrapper>
        <SectionWrapper>
          <Header />
        </SectionWrapper>
        <SectionWrapper>
          <Categories />
        </SectionWrapper>
        <SectionWrapper>
          <RecipesGrid />
        </SectionWrapper>
      </ContentWrapper>
    </>
  );
};

export default Home;
