import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";

import { LATEST_TX_EVENT } from "../events";
import { latestTxLoaded } from "src/state/transaction/reducer";
// import { useSocket } from "./useSocket";

const SOCKET_URL = process.env.REACT_APP_BASE_URL;

export function useLatestTx() {
  const socketRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    socketRef.current = io(SOCKET_URL, {
      transports: ["websocket"],
    });

    socketRef.current.on(LATEST_TX_EVENT, (latestTx) => {
      dispatch(latestTxLoaded(latestTx));
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
}
