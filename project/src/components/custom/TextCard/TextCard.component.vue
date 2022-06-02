<template>
  <div class="text-card" :class="textCard.reverse ? 'reverse' : ''">
    <div
      class="text col"
      v-animate.repeat.fade="textCard.reverse ? 'slide-right' : 'slide-left'"
    >
      <h1 v-html="textCard.title"></h1>
      <h3 v-html="textCard.text"></h3>
    </div>
    <div
      class="image"
      v-animate.repeat.fade="textCard.reverse ? 'slide-left' : 'slide-right'"
    >
      <img :src="require('@/assets/img/' + textCard.img)" :alt="textCard.img" />
    </div>
  </div>
</template>


<script src="./TextCard.component.ts" lang="ts"></script>
<style src="./TextCard.component.scss" scoped lang="scss"></style>