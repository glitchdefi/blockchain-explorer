import { useCallback, useMemo, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { DEFAULT_PAGE_SIZE } from "src/constants";

export function usePagination({ customPageSize }) {
  const { search, hash } = useLocation();
  const [currentPage, setCurrentPage] = useState(
    search && search.startsWith("p", 1) ? Number(search.slice(3)) : 1
  );
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const history = useHistory();

  useEffect(() => {
    if (!search && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [search]);

  const onChange = useCallback((current, _) => {
    const { page_index, page_size } = current || {};

    setCurrentPage(page_index || current);
    page_size && setPageSize(page_size);

    history.push({
      hash,
      search: `?p=${page_index || current}`,
    });
  }, []);

  return useMemo(() => {
    return {
      current: currentPage,
      pParams: {
        page_size: customPageSize || pageSize,
        page_index: currentPage,
      },
      pageSize,
      onChange,
    };
  }, [currentPage, pageSize]);
}
