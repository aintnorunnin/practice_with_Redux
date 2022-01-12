import { useSelector, useDispatch, connect } from "react-redux";
import { counterActions, CounterState } from "../store/counterSlice";
import classes from "./Counter.module.css";
import React, { Component, ReactNode } from "react";

const Counter = () => {
  const counterState: CounterState = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleDisplay());
  };

  const amountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(counterActions.changeAmount(parseInt(event.target.value)));
  };

  const counterHandler = (amount: number) => {
    dispatch(counterActions.increaseBy(amount));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterState.displayCounter && (
        <div className={classes.value}>{counterState.counter}</div>
      )}
      <div>
        <button onClick={counterHandler.bind(null, 1)}>Increment</button>
        <button onClick={counterHandler.bind(null, -1)}>Decrement</button>
        <button
          onClick={counterHandler.bind(null, counterState.increaseByAmount)}
        >
          Increase by
        </button>
        <input
          type="number"
          value={counterState.increaseByAmount}
          onChange={amountHandler}
        ></input>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// interface CounterProps {
//   increaseBy: (amount: number) => void;
//   state: CounterState;
// }

// class CounterClass extends Component<CounterProps, CounterState> {
//   constructor(props: CounterProps) {
//     super(props);
//   }

//   changeCounterHandler = (amount: number) => {
//     this.props.increaseBy(amount);
//   };

//   toggleCounterHandler = () => {};
//   render(): ReactNode {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.state.counter}</div>
//         <div>
//           <button onClick={this.changeCounterHandler.bind(this, 1)}>
//             Increment
//           </button>
//           <button onClick={this.changeCounterHandler.bind(this, -1)}>
//             Decrement
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state: CounterState) => {
//   return {
//     state: state,
//   };
// };

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     increaseBy: (amount: number) =>
//       dispatch({ type: "increaseBy", amount: amount }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
