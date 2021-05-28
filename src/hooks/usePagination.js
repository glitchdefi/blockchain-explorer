import { useCallback, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { DEFAULT_PAGE_SIZE } from "src/constants";

export function usePagination() {
  const { search, hash } = useLocation();
  const [currentPage, setCurrentPage] = useState(
    search && search.startsWith("p", 1) ? Number(search.slice(3)) : 1
  );
  const history = useHistory();

  const onChange = useCallback((current, _) => {
    setCurrentPage(current);
    history.push({
      hash,
      search: `?p=${current}`,
    });
  }, []);

  return useMemo(() => {
    return {
      current: currentPage,
      pParams: { page_size: DEFAULT_PAGE_SIZE, page_index: currentPage },
      onChange,
    };
  }, [currentPage]);
}
