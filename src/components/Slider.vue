<template>
  <section class="Slider">
    <div
      class="Slider__container"
      ref="scrollableContent"
    >
      <div class="Slider__slider" ref="animatedContent">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="Slider__slider__project"
          :style="{ background: `url(${slide.background})` }"
          @click="redirect(slide.url)"
        >
          <h3 class="Slider__slider__project__title">
            {{ slide.name }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const animatedContent = ref();
const scrollableContent = ref();

const slides: Record<string, string>[] = [
  {
    background: "/horror-site/portfolio.PNG",
    url: "https://ackermiam.github.io/portfolio/",
    name: "portfolio-test",
  },
  {
    background: "/horror-site/rpgamebackground.PNG",
    url: "https://ackermiam.github.io/rp-game/",
    name: "rp-game",
  },
  {
    background: "/horror-site/egirlinvaderbackground.PNG",
    url: "https://ackermiam.github.io/egirl-invaders/",
    name: "egirl-invaders",
  },
  {
    background: "/horror-site/egirlinvaderbackground.PNG",
    url: "https://ackermiam.github.io/egirl-invaders/",
    name: "egirl-invaders",
  },
  {
    background: "/horror-site/egirlinvaderbackground.PNG",
    url: "https://ackermiam.github.io/egirl-invaders/",
    name: "egirl-invaders",
  }
];

const handleScroll = () => {
  const progress =
    animatedContent.value.offsetTop /
    (scrollableContent.value.scrollHeight - animatedContent.value.offsetHeight);

  const maxScroll = animatedContent.value.scrollWidth - window.innerWidth;

  animatedContent.value.style.transform = `translateX(${
    -progress * maxScroll
  }px)`;
};

const redirect = (url: string) => {
  window.open(url, "_blank");
};

onMounted(() => {
  if (scrollableContent.value && animatedContent.value) {
    const firstSlide = animatedContent.value.querySelector(
      ".Slider__slider__project"
    );
    if (firstSlide) {
      scrollableContent.value.style.setProperty(
        "--sliderWidth",
        `${
          slides.length * firstSlide.clientWidth + slides.length * 50 + 900
        }px`
      );
    }

    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.Slider {
  display: flex;
  align-items: start;
  position: absolute;
  top: 3000px;

  &__container {
    display: none;

    @media (min-width: 900px) {
      display: flex;
      position: relative;
      height: 290vh;
    }
  }

  &__slider {
    position: sticky;
    top: calc(50%);
    left: 0;
    width: var(--sliderWidth);
    height: 100vh;
    display: flex;
    margin-left: 550px;

    &__project {
      min-width: 450px;
      height: 250px;
      position: relative;
      margin: 0 25px;
      cursor: pointer;
      overflow: hidden;
      border-radius: 8px;
      border: 3px solid rgba(255, 255, 255, 0.192);
      transition: all 0.4s ease;

      &::before {
        content: "";
        position: absolute;
        top: -5px;
        left: -10px;
        width: 110%;
        height: 105%;
        background: inherit;
        background-size: cover;
        background-position: center;
        filter: blur(5px);
        transition: all 0.4s ease;
      }

      &:hover {
        transform: rotateX(-20deg) rotateY(-20deg);
        &::before {
          filter: blur(0);
          left: -25px;
        }
      }

      &__title {
        position: absolute;
        width: 100%;
        text-align: center;
        font-family: "Mewatonia";
        font-size: 4em;
        color: rgb(255, 145, 0);
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        filter: drop-shadow(0px 0px 15px rgb(0, 0, 0))
      }
    }
  }
}
</style>
