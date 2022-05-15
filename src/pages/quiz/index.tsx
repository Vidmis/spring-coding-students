import React, { useState, useEffect } from "react";
import { ContentWrapper } from "components";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { setQuizQuestions } from "state/features/questionsSlice";

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
  const dispatch = useAppDispatch();
  const selectQuizQ = useAppSelector((state) => state.question);

  console.log(selectQuizQ);
  // useEffect(() => {
  //   const questionData = dispatch(
  //     setQuizQuestions({
  //       maName: "vidmintis",
  //     })
  //   );
  //   console.log("questionData", questionData.payload);
  // }, []);

  return (
    <>
      <ContentWrapper maxWidth='100%'>
        <QuizBox></QuizBox>
      </ContentWrapper>
    </>
  );
};

export default Home;
