import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset}, ref) {
  const dialog = useRef();

  const UserLost = remainingTime <= 0;
  const formatedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = ((((targetTime-formatedRemainingTime)/targetTime) * 100).toFixed(0));
  useImperativeHandle(ref, () => {
    return{
      open() {
        dialog.current.showModal();
      }
    };
  });

  return createPortal (
    <dialog ref={dialog} className="result-modal" >
    { UserLost && <h2>You Lost! </h2>}
    { !UserLost && <h2>Your Score : {score}</h2>}
    <p>the Target time was <strong>{ targetTime } seconds.</strong></p>
    <p>You stopped the timer with <strong> {formatedRemainingTime} seconds left.</strong></p>
    

    <form method="dialog" onSubmit={onReset}>
    <button>Close</button>
    </form>
  </dialog>,
  document.querySelector("#modal")
);
})
export default ResultModal;