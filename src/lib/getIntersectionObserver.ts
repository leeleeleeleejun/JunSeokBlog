import { Dispatch, SetStateAction } from "react";

export const getIntersectionObserver = (
  setActive: Dispatch<SetStateAction<string>>
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((el) => {
        if (el.boundingClientRect.top < 80) {
          setActive(el.target.id);
        }
      });
    },
    { rootMargin: "-100px 0px 0px 0px" }
  );
  return observer;
};
