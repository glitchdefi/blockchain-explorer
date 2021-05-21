import { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { DEFAULT_PAGE_SIZE } from "src/constants";

export function usePagination() {
  const { search, hash } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();

  useEffect(() => {
    if (search && search.startsWith("p", 1)) {
      setCurrentPage(Number(search.slice(3)));
    }
  }, []);

  const onChange = (current, _) => {
    setCurrentPage(current);
    history.push({
      hash,
      search: `?p=${current}`,
    });
  };

  return useMemo(() => {
    return {
      current: currentPage,
      pParams: { page_size: DEFAULT_PAGE_SIZE, page_index: currentPage },
      onChange,
    };
  }, [currentPage]);
}
