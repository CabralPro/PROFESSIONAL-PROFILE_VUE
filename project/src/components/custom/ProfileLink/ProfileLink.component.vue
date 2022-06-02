<template>
  <a
    class="profile-link"
    target="_blank"
    :href="profileLink.link ? profileLink.link : '#'"
		:style="{'pointer-events': profileLink.link ? 'normal' : 'none'}"
  >
    <span class="iconify" :data-icon="profileLink.icon"></span>
    <h5>{{ profileLink.text }}</h5>
  </a>
</template>

<script src="./ProfileLink.component.ts" lang="ts"></script>
<style src="./ProfileLink.component.scss" scoped lang="scss"></style>