import { useEffect } from "react";

function useDocumentTitle(count) {
  return useEffect(() => {
    document.title = `Count ${count} times`;
  }, [count]);
}

export default useDocumentTitle;
