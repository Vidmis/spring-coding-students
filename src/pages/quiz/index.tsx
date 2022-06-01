import { ContentWrapper, Navigation, SectionWrapper } from "components";
import React, { useEffect } from "react";
import { selectQuizQA, selectStep } from "state/selectors";

import AdviceCard from "./elements/AdviceCard";
import AnswerLayout from "./elements/AnswerLayout";
import { IQuestionsData } from "state/types";
import { fetchQuestionsActions } from "state/sagasActions";
import { setBikeTypes } from "state/features/userAnswersSlice";
import { useAppDispatch } from "state/hooks";
import { useNavigation } from "hooks";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const quizQA: IQuestionsData[] = useSelector(selectQuizQA);
  const step = useSelector(selectStep);
  const { onNextStep, onSelectStep } = useNavigation();

  useEffect(() => {
    dispatch(setBikeTypes([]));
    dispatch(fetchQuestionsActions());
    onSelectStep(0);
  }, []);

  const onRenderStep = (cardType: string) => {
    switch (cardType) {
      case "singleAnswer":
        return <AnswerLayout quizQA={quizQA} step={step} />;
      case "multiAnswer":
        return <AnswerLayout quizQA={quizQA} step={step} />;
      case "advice":
        return <AdviceCard quizQA={quizQA} step={step} />;
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
          {onRenderStep(quizQA[step]?.questionType)}
        </SectionWrapper>
      </ContentWrapper>
    </>
  );
};

export default Home;
