import { useMemo, useState } from "react";
import { DEFAULT_PAGE_SIZE } from "src/constants";

export function usePagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const onChange = (current, _) => {
    setCurrentPage(current);
  };

  return useMemo(() => {
    return {
      current: currentPage,
      pParams: { page_size: DEFAULT_PAGE_SIZE, page_index: currentPage },
      onChange,
    };
  }, [currentPage]);
}
