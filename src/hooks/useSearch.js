import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResult } from "src/state/global/actions";

export function useSearch() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onSearch = () => {
    if (text) {
      dispatch(fetchSearchResult({ term: text.trim() }));
    }
  };

  const onClearText = useCallback(() => {
    setText("");
  }, []);

  return { text, onTextChange, onSearch, onClearText };
}
