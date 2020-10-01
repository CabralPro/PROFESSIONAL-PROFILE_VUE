<template>
  <div class="skill col" @mouseenter="percentBar = percent" @mouseleave="percentBar = 0">
    <h3 class="titlee" v-html="title"></h3>
    <div class="bar">
      <div class="filledbar" :style="`width: ${percentBar}%`"></div>
    </div>
    <div class="circle">
      <img
        v-if="image"
        class="iconify"
        :src="require(`@/assets/img/icons/${image}`)"
        :style="
          `font-size: ${size ? size : ''}pt;
          top:${top ? top + '%' : ''};
          left: ${left ? left + '%' : ''};margin:auto`
        "
      />

      <span
        v-else
        class="iconify"
        :data-icon="icon"
        :style="
          `font-size: ${size ? size : ''}pt;
          top:${top ? top + '%' : ''};
          color: ${color ? color : ''}`
        "
      ></span>

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle :style="`stroke-dashoffset: ${percentCircle}`" cx="60" cy="60" r="50" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "skill",
  props: ["title", "percent", "icon", "size", "top", "left", "color", "image"],
  data() {
    return {
      percentBar: 0,
      percentCircle: 360
    };
  },
  watch: {
    percentBar() {
      let p = this.percentBar / 100;
      this.percentCircle = p * 315 + 45 - 360;
      // stroke-dashoffset de 45 a 360
    }
  }
};
</script>

<style lang="scss">
.skill {
  height: 250px;
  min-width: 140px;
  max-width: 140px;
  background: linear-gradient(285deg, #4b6cb7 0%, #182848 100%);
  border-radius: 10px;
  box-shadow: -1rem 0 3rem rgba(37, 37, 37, 0.5);
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  padding: 25px 20px 0;
  margin-top: 10px;

  .titlee {
    color: white;
  }

  .bar {
    position: relative;
    margin: 23px auto;
    width: 100%;
    height: 5px;
    background: #2e3033;

    .filledbar {
      position: absolute;
      height: 100%;
      transition: 0.6s ease-out;
      background: linear-gradient(
        90deg,
        rgba(0, 154, 217, 1) 0%,
        rgb(0, 58, 217) 65%,
        rgb(0, 22, 217) 100%
      );
    }
  }

  .circle {
    position: relative;

    svg {
      fill: transparent;
      stroke-width: 2px;
      width: 100%;
      margin-left: 15px;

      circle {
        stroke: white;
        stroke-dasharray: 360;
        stroke-dashoffset: 360;
        transition: 0.6s ease-out;
      }
    }

    .iconify {
      position: absolute;
      font-size: 42pt;
      top: 23%;
      left: -9%;
    }
  }
  &:not(:first-child) {
    margin-left: -50px;
  }

  &:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;

    .filledbar {
      transition: 0.4s ease-out;
    }

    ~ .skill {
      left: 50px;
      transition: 0.4s ease-out;
    }

    circle {
      transition: 0.6s ease-out;
    }
  }
  &:last-child::after {
    content: ".";
    color: transparent;
    width: 30px;
  }
}
</style>
