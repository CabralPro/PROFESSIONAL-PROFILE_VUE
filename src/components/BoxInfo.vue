<template>
  <div class="card">
    <span class="iconify" :data-icon="icon"></span>
    <h5>{{ this.text }}</h5>
  </div>
</template>

<script>
export default {
  props: ["icon", "text"]
};
</script>

<style lang="scss">
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 100;
  .iconify {
    font-size: 28pt;
    padding: 0 10px;
    font-weight: 100;
  }
}
</style>
