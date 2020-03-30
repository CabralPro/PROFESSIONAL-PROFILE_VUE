<template>
  <div class="card1" :class="reverse ? 'reverse' : ''">
    <div class="text col" v-animate.repeat.fade="reverse ? 'slide-right' : 'slide-left'">
      <h1 v-html="title"></h1>
      <h3 v-html="text"></h3>
    </div>
    <div class="image" v-animate.repeat.fade="reverse ? 'slide-left' : 'slide-right'">
      <img :src="require('@/assets/img/' + img)" :alt="img" />
    </div>
  </div>
</template>

<script>
  export default {
    name:'Card1',
    props: ["title", "text", "img", "reverse"]
  };
</script>

<style lang="scss">
  .reverse {
    flex-direction: row-reverse;
  }

  .card1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px 0;

    h1 {
      font-size: 23pt;
    }

    .text {
      width: 50%;
      padding: 20px;

      h3 {
        font-weight: 100;
      }
    }

    .image {
      width: 50%;
      display: flex;

      img {
        width: 100%;
        max-width: 400px;
        margin: auto;
      }
    }

    @media (max-width: 750px) {
      flex-direction: column-reverse;

      .text,
      .image {
        width: 100%;
      }
    }

    @media (max-width: 570px) {
      h1 {
        font-size: 19pt;
      }

      h3 {
        font-size: 12pt;
      }
    }
  }
</style>