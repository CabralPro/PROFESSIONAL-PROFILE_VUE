<template>
  <a
    :target="currentTab ? '' : '_blank'"
    :href="link ? link : '#'"
    class="card"
  >
    <span class="iconify" :data-icon="icon"></span>
    <h5>{{ this.text }}</h5>
  </a>
</template>

<script>
export default {
  props: ["icon", "text", "link", "currentTab"]
};
</script>

<style lang="scss">
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif;
  margin: 0 30px;
  h5 {
    font-weight: 400;
    letter-spacing: 1px;
  }
  .iconify {
    font-size: 28pt;
    padding: 0 10px;
  }
  @media (max-width: 525px) {
    justify-content: initial;
  }
}
</style>
