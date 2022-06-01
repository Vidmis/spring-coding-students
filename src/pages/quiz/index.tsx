import {
  ContentWrapper,
  Navigation,
  SectionWrapper,
  Typography,
} from "components";
import React, { useEffect } from "react";
import { selectQuizQA, selectStep } from "state/selectors";

import AdviceCard from "./elements/AdviceCard";
import AnswerLayout from "./elements/AnswerLayout";
import { navigate } from "gatsby";
import { setBikeTypes } from "state/features/userAnswersSlice";
import { useAppDispatch } from "state/hooks";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const step = useSelector(selectStep);

  useEffect(() => {
    dispatch(setBikeTypes([]));
  }, []);

  const onRenderStep = () => {
    switch (step) {
      case 0:
        return <AnswerLayout dataStep={step} />;
      case 1:
        return <AnswerLayout dataStep={step} />;
      case 2:
        return <AdviceCard />;
      case 3:
        return <AnswerLayout dataStep={step - 1} />;
      case 4:
        return <AnswerLayout isLastCard={true} dataStep={step - 1} />;
    }
  };

  return (
    <>
      <ContentWrapper
        maxWidth='100%'
        height='100vh'
        backgroundColor='lightGray'
        pt={{ _: "s32" }}
      >
        <Navigation isMenuVisible={false} />
        <SectionWrapper p={{ _: "s24", mdTablet: "s64" }}>
          {onRenderStep()}
        </SectionWrapper>
      </ContentWrapper>
    </>
  );
};

export default Home;
