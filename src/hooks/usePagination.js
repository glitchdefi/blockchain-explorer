import { useCallback, useMemo, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { DEFAULT_PAGE_SIZE } from "src/constants";

export function usePagination({ pageSize }) {
  const { search, hash } = useLocation();
  const [currentPage, setCurrentPage] = useState(
    search && search.startsWith("p", 1) ? Number(search.slice(3)) : 1
  );
  const history = useHistory();

  useEffect(() => {
    if (!search && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [search]);

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
      pParams: {
        page_size: pageSize || DEFAULT_PAGE_SIZE,
        page_index: currentPage,
      },
      onChange,
    };
  }, [currentPage]);
}
