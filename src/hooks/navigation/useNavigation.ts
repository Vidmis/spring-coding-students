import { chooseStep, nextStep, prevStep } from "state/features/stepSlice";

import { useAppDispatch } from "state/hooks";

export const useNavigation = () => {
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
