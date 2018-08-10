import * as React from "react";
import Questionnaire from "./Questionnaire";
import Assessment from "./Assessment";
import Recommendations from "./Recommendations";
import Congrats from "./Congrats";
import { connect } from "react-redux";
import { StoreState } from "../types";
import * as actions from "../actions";
import { Dispatch } from "../../node_modules/redux";

interface CheckUpProps {
  step: number;
  nextStep: () => actions.NextStep;
  previousStep: () => actions.PreviousStep;
}

class CheckUp extends React.Component<CheckUpProps> {
  render() {
    const { step, nextStep, previousStep } = this.props;

    return (
      <div>
        <Questionnaire />
        {step === 1 ? <button onClick={nextStep}>Next</button> : null}
        {step > 1 ? <Assessment /> : null}
        {step === 2 ? (
          <div>
            <button onClick={previousStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        ) : null}
        {step > 2 ? <Recommendations /> : null}
        {step === 3 ? (
          <div>
            <button onClick={previousStep}>Back</button>
            <button onClick={nextStep}>Done</button>
          </div>
        ) : null}
        {step > 3 ? <Congrats /> : null}
      </div>
    );
  }
}

const mapStateToProps = (store: StoreState) => ({
  step: store.step
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  nextStep: () => dispatch(actions.nextStep()),
  previousStep: () => dispatch(actions.previousStep())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckUp);
