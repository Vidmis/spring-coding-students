import React, { useState } from "react";
import { ContentWrapper } from "components";

{
  /* <input
        name="height"
        type="number"
        autocomplete="off"
        min="130"
        max="220"
      /> */
}

const QuizBox: React.FC = () => {
  const [isSelected, setIsSelected] = useState();

  return <li></li>;
};

const Home: React.FC = () => {
  return (
    <>
      <ContentWrapper maxWidth='100%'>
        <QuizBox></QuizBox>
      </ContentWrapper>
    </>
  );
};

export default Home;
