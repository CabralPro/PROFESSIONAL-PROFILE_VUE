<template>
  <div class="project-card">
    <div class="face front">
      <img :src="require(`@/${project.img}`)" />
    </div>
    <div class="face back">
      <h2 v-html="project.title"></h2>
      <p v-html="project.text"></p>
      <a :href="project.link" target="_blank" class="btn"> Visitar </a>
    </div>
  </div>
</template>


<script src="./ProjectCard.component.ts" lang="ts"></script>
<style src="./ProjectCard.component.scss" scoped lang="scss"></style>