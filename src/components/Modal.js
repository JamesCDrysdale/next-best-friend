import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// This is a portal
const Modal = ({ children }) => {
  const elementRef = useRef(null);
  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elementRef.current);

    // we have to destroy this modal when we are done with it or we will leak memory
    return () => modalRoot.removeChild(elementRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elementRef.current);
};

export default Modal;
