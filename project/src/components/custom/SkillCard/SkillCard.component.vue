<template>
  <div
    class="skill-card"
    @mouseenter="percentBar = skill.percent"
    @mouseleave="percentBar = 0"
  >
    <h3 class="titlee" v-html="skill.title"></h3>
    <div class="bar">
      <div class="filledbar" :style="`width: ${percentBar}%`"></div>
      <span v-if="percentBar > 0">{{ percentBar }}%</span>
    </div>

    <div class="icon-img">
      <img
        v-if="skill.image"
        :src="require(`@/${skill.image}`)"
        :width="'65%'"
      />

      <span
        v-else
        class="iconify"
        :data-icon="skill.icon"
        :style="`font-size: ${skill.size ? skill.size : '50'}pt;
          color: ${skill.color ? skill.color : ''}`"
      ></span>
    </div>
  </div>
</template>


<script src="./SkillCard.component.ts" lang="ts"></script>
<style src="./SkillCard.component.scss" scoped lang="scss"></style>