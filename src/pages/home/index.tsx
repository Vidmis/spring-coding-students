import React from "react";
import { Navigation, SectionWrapper, ContentWrapper } from "components";
import Header from "./sections/header/Header";

const Home: React.FC = () => {
  return (
    <>
      <ContentWrapper maxWidth='100%'>
        <Header />
      </ContentWrapper>
    </>
  );
};

export default Home;
