import { useEffect, useRef } from "react";
import io from "socket.io-client";

/**
 * Init socket server's url
 *
 * @param {string} url
 * @param {Object} options
 * @param {Object} options.query
 * @returns
 */
export function useSocket(url, options) {
  let socket = useRef();

  useEffect(() => {
    socket.current = io(url, options);

    return () => {
      socket.current.disconnect();
    };
  }, [url, options]);

  return { socket: socket.current };
}
