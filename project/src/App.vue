<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppComponent extends Vue {
  created() {}
}
</script>

<style lang="scss">
</style>
