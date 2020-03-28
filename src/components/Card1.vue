<template>
  <div class="card1" :class="reverse ? 'reverse' : ''">
    <div class="text">
      <h1 v-html="title"></h1>
      <h3 v-html="text"></h3>
    </div>
    <div class="image">
      <img :src="require('@/assets/img/' + img)" :alt="img" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    img: String,
    reverse: false
  }
};
</script>

<style lang="scss">
.card1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
  h1 {
    font-weight: 400;
    font-size: 23pt;
  }
  .text {
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
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
}
.reverse {
  flex-direction: row-reverse;
}
</style>
