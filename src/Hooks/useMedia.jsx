import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    setIsMatch(media.matches);

    media.addEventListener("change", () => {
      setIsMatch(media.matches);
    });
  }, [query]);

  return isMatch;
}
export default useMediaQuery;
