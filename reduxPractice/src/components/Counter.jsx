import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../slices/CounterSlice.jsx";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Redux Toolkit Sayaç</h1>
      <div className="text-2xl mb-4">Sayacın Değeri: {count}</div>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Artır
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Azalt
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default Counter;
