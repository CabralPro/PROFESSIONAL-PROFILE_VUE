<template>
  <div class="header-home">
    <header class="col">
      <canvas id="nokey"></canvas>

      <nav class="row" v-animate.repeat.fade="'slide-right'">
        <a href="#intro">Introdução</a>
        <a href="#conhecimento">Conhecimento</a>
        <a href="#portifolio">Portifólio</a>
        <a href="#contratar">Contratar</a>
      </nav>

      <img
        v-animate.repeat.fade="'slide-up'"
        class="perfil"
        width="300"
        height="300"
        src="@/assets/img/profile.png"
        alt
      />
      <h1>Arthur Cabral Lemos</h1>
      <h2>Fullstack Developer</h2>

      <div class="info">
        <ProfileLink
          v-for="profileLink of profileLinks"
          :key="profileLink.text"
          :profileLink="profileLink"
        />
      </div>
    </header>
  </div>
</template>


<script src="./HeaderHome.component.ts" lang="ts"></script>
<style src="./HeaderHome.component.scss" scoped lang="scss"></style>