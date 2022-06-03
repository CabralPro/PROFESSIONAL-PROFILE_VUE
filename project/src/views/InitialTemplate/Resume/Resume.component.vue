<template>
  <div class="resume">
    <Loader v-show="loading || !initialized" />

    <div class="scrollable">

      <div class="options">

        <router-link :to="{ name: 'Home' }">
          <img src="@/assets/img/logo-color.png" alt="cabral-tec" />
        </router-link>

        <button
          class="btn-download"
          @click="generateReport()"
          :disabled="loading || !initialized"
        >
          Download PDF
        </button>

      </div>

      <div v-show="initialized" v-html="resumeHtml"></div>

    </div>
  </div>
</template>


<script src="./Resume.component.ts" lang="ts"></script>
<style src="./Resume.component.scss" scoped lang="scss"></style>