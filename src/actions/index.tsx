import * as constants from "../constants";

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  };
}

/**              END OF Enthusiasm              */

export type CheckUpAction = NextStep | PreviousStep;

export interface NextStep {
  type: constants.NEXT_STEP;
}

export interface PreviousStep {
  type: constants.PREVIOUS_STEP;
}

export const nextStep = (): NextStep => ({
  type: constants.NEXT_STEP
});

export const previousStep = (): PreviousStep => ({
  type: constants.PREVIOUS_STEP
});
