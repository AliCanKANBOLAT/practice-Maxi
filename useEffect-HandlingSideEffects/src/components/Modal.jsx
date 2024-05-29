import { useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children }) {
  const dialog = useRef();

  dialog.current.showModal();
  
  return createPortal(
    <dialog className="modal" ref={dialog} >
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
