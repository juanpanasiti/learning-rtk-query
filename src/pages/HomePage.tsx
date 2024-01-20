import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { decrement, increment } from "../store/counter";

export const HomePage = () => {
  const value = useSelector<RootState,number>(state => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <>
      <h1>RTKQueryLearning</h1>
      <hr />

      <div>
        <h2>Counter <small>{value}</small></h2>
        <br />
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
      </div>
    </>
  );
};
