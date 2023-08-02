import { reactive } from "vue";

export const useScrollPosition = () => {
  const location = reactive({
    x: 0,
    y: 0,
  });
  document.addEventListener("scroll", () => {
    location.x = window.scrollX;
    location.y = window.scrollY;
  });

  return {
    location,
  };
};
