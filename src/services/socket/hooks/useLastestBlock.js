import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";

import { LATEST_BLOCKS_EVENT } from "../events";
import { latestBlockLoaded } from "src/state/block/reducer";
// import { useSocket } from "./useSocket";

const SOCKET_URL = process.env.REACT_APP_BASE_URL;

export function useLatestBlock() {
  const socketRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    socketRef.current = io(SOCKET_URL, {
      transports: ["websocket"],
    });

    socketRef.current.on(LATEST_BLOCKS_EVENT, (latestBlock) => {
      console.log("latestBlock", latestBlock);
      dispatch(latestBlockLoaded(latestBlock));
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
}
