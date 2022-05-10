import React from "react";
import { Navigation, SectionWrapper, ContentWrapper } from "components";

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
      </ContentWrapper>
    </>
  );
};

export default Home;
