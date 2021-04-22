import { useEffect, useRef } from "react";

export function useClickOutside(handler) {
  let domNode = useRef();

  useEffect(() => {
    let listener = (e) => {
      if (domNode.current && !domNode.current.contains(e.target)) {
        handler && handler();
      }
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  });

  return domNode;
}
