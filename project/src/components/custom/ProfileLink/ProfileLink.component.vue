<template>
  <div>
    <a
      v-if="!profileLink.link || profileLink.link.includes('http')"
      class="profile-link"
      target="_blank"
      :href="profileLink.link ? profileLink.link : '#'"
      :style="{ 'pointer-events': profileLink.link ? 'normal' : 'none' }"
    >
      <span class="iconify" :data-icon="profileLink.icon"></span>
      <h5>{{ profileLink.text }}</h5>
    </a>
    <router-link v-else class="profile-link" :to="profileLink.link">
      <span class="iconify" :data-icon="profileLink.icon"></span>
      <h5>{{ profileLink.text }}</h5>
    </router-link>
  </div>
</template>

<script src="./ProfileLink.component.ts" lang="ts"></script>
<style src="./ProfileLink.component.scss" scoped lang="scss"></style>