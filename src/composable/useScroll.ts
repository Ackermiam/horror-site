import { ref } from "vue";

const scrollDown = ref(false);
const lastScroll = ref(0);


export const useScroll = () => {
  const isScrollDown = () => {

    window.addEventListener("scroll", () => {
      const newScroll = window.scrollY;

      scrollDown.value = newScroll > lastScroll.value;

      lastScroll.value = newScroll;
    });
  };

  return {
    scrollDown,
    isScrollDown
  };
};