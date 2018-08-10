import { CheckUpAction } from "../actions";
import { combineReducers } from "redux";

import { NEXT_STEP, PREVIOUS_STEP } from "../constants";

export const checkUpStep = (state: number = 1, action: CheckUpAction) => {
  switch (action.type) {
    case NEXT_STEP:
      return state + 1;

    case PREVIOUS_STEP:
      return state - 1;

    default:
      return state;
  }
};

// export const question = (state: QuestionSet[] = [], action: QuesitonAction);

export const appState = combineReducers({
  step: checkUpStep
});
