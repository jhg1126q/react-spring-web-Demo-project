import { useState } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "../store/redux/modal-slice";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const dispatchStore = useDispatch();

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => {
    setCount(initialValue);
    dispatchStore(modalAction.show(true));
  };

  return { count, increment, decrement, reset };
}

export default useCounter;
