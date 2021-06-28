import { useCallback, useEffect, useState } from "react";

const KEY = "userClosed_nwb";

export function useHandleNetworkBox() {
  const [isUserClosed, setIsUserClosed] = useState();

  useEffect(() => {
    const res = localStorage.getItem(KEY);
    setIsUserClosed(!res ? false : true);
  }, []);

  const onClose = useCallback(() => {
    localStorage.setItem(KEY, true);
    setIsUserClosed(true);
  }, []);

  return { isUserClosed, onClose };
}
