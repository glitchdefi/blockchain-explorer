import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";

import {
  LATEST_BLOCKS_EVENT,
  LATEST_HEAD_BLOCK_EVENT,
  LATEST_TX_EVENT,
  LATEST_HEAD_WALLET,
  FINALIZED_BLOCK,
} from "../events";
import {
  latestBlockLoaded,
  finalizedBlockLoaded,
} from "src/state/block/reducer";
import { latestTxLoaded } from "src/state/transaction/reducer";
import { walletCountLoaded } from "src/state/wallet/reducer";
import { producerNameLoaded } from "src/state/producer/reducer";
import { isEmpty } from "lodash";

const SOCKET_URL = process.env.REACT_APP_BASE_URL;

export function useSocket() {
  const socketRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    socketRef.current = io(SOCKET_URL, {
      transports: ["websocket"],
    });

    socketRef.current.on(LATEST_BLOCKS_EVENT, (latestBlock) => {
      dispatch(latestBlockLoaded(latestBlock));
      dispatch(producerNameLoaded(latestBlock?.producer));
    });

    socketRef.current.on(FINALIZED_BLOCK, (finalizedBlock) => {
      dispatch(finalizedBlockLoaded(finalizedBlock));
    });

    socketRef.current.on(LATEST_TX_EVENT, (latestTx) => {
      dispatch(latestTxLoaded(latestTx));
    });

    // socketRef.current.on(LATEST_HEAD_WALLET, (headWallet) => {
    //   if (headWallet) {
    //     dispatch(walletCountLoaded(headWallet));
    //   }
    // });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
}
