import { useAppDispatch } from "state/hooks";
import { nextStep, prevStep, chooseStep } from "state/features/stepSlice";

const useNavigation = () => {
  const dispatch = useAppDispatch();

  const onNextStep = () => {
    dispatch(nextStep());
  };

  const onPrevStep = () => {
    dispatch(prevStep());
  };

  const selectStep = (stepIndex: number) => {
    dispatch(chooseStep(stepIndex));
  };

  return { onNextStep, onPrevStep, selectStep };
};

export default useNavigation;
