import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";

import { FINALIZED_BLOCK } from "../events";
import { finalizedBlockLoaded } from "src/state/block/reducer";

const SOCKET_URL = process.env.REACT_APP_BASE_URL;

export function useFinalizedBlockSocket() {
  const socketRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    socketRef.current = io(SOCKET_URL, {
      transports: ["websocket"],
    });

    socketRef.current.on(FINALIZED_BLOCK, (finalizedBlock) => {
      dispatch(finalizedBlockLoaded(finalizedBlock));
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
}
