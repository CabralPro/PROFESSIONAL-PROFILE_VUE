<template>
  <div id="app">
    <header>
      <canvas id="nokey"> </canvas>

      <img class="perfil" src="@/assets/img/profile.png" alt="" />
      <h1>Arthur Cabral</h1>
      <h2>Desenvolvedor Web e Mobile</h2>
      <div class="info">
        <BoxInfo icon="et:map-pin" text="Igarapé - MG" />
        <BoxInfo icon="ic:baseline-phone-iphone" text="(31) 9 9876-2713" />
        <BoxInfo icon="entypo:email" text="cabraltec@gmail.com" />
        <BoxInfo icon="et:linkedin" text="/arthurcabrallemos" />
      </div>
    </header>

    <div class="content"></div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Indie+Flower&display=swap");
@import url("https://fonts.googleapis.com/css?family=Sacramento&display=swap");
@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");
body {
  margin: 0;
}

header {
  * {
    z-index: 1;
    transition: .3s;
  }
  h1:hover, h2:hover, .card:hover {
    color: rgb(255, 255, 255);
  }
  .card:hover{
    transform: scale(1.05);
  }
  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
  color: #e8eaf6 ;
  canvas {
    // position: absolute;
    // background: black;
    width: 98vw;
    position: absolute;
    z-index: 0;
    height: 100%;
  }

  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  // font-family: 'Sacramento', cursive;
  font-family: "Cinzel", serif;
  // font-family: 'Indie Flower', cursive;

  h2 {
    font-size: 23pt;
    margin: 0;
    font-weight: 100;
  }
  h1 {
    font-size: 50pt;
    margin: 0;
    font-weight: 100;
  }
  .perfil {
    margin: 30px auto;
    border-radius: 50%;
    z-index: 1;
  }
  .info {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: 44px 0;
  }
}
</style>

<script>
import BoxInfo from "@/components/BoxInfo";
export default {
  components: { BoxInfo },
  mounted() {
    import("@/assets/js/animation.js").then();
  }
};
</script>
