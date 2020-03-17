import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
// connect functions that returns hoc helps this component to connect to the store of redux
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtractCounter(5)}
        />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.results.map((result) => (
            <li
              onClick={() => this.props.onDeleteResult(result)}
              key={result.id}
            >
              {result.val}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    results: state.results
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: (value) => dispatch({ type: actionTypes.ADD, value: value }),
    onSubtractCounter: (value) =>
      dispatch({ type: actionTypes.SUBTRACT, value: value }),
    onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
    onDeleteResult: (value) =>
      dispatch({ type: actionTypes.DELETE_RESULT, value: value })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
