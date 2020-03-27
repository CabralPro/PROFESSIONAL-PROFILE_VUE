<template>
  <header>
      
    <canvas id="nokey"> </canvas>

    <img class="perfil" src="@/assets/img/profile.png" alt="" />
    <h1>Arthur Cabral</h1>
    <h2>Desenvolvedor Web e Mobile</h2>
    <div class="info">
      <BoxInfo icon="et:map-pin" text="Igarapé - MG" link="https://google.com" />
      <BoxInfo icon="ic:baseline-phone-iphone" text="(31) 9 9876-2713" />
      <BoxInfo icon="entypo:email" text="cabraltec@gmail.com" />
      <BoxInfo icon="et:linkedin" text="/arthurcabrallemos" />
    </div>
  </header>
</template>

<script>
import BoxInfo from "@/components/BoxInfo";

export default {
  name: "HeaderComponent",
  components: { BoxInfo },
  mounted() {
    import("@/assets/js/animation.js").then();
  }
};
</script>

<style lang="scss">
header {
  color: #e8eaf6;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Cinzel", serif;

  * {
    z-index: 1;
    transition: 0.3s;
  }
  h1:hover,
  h2:hover,
  .card:hover {
    color: rgb(255, 255, 255);
  }
  .card:hover {
    transform: scale(1.05);
  }
  canvas {
    width: 98vw;
    position: absolute;
    z-index: 0;
  }
  h1 {
    font-size: 45pt;
    margin: 0;
  }

  h2 {
    font-size: 20pt;
    margin: 0;
    font-weight: 100;
  }
  .perfil {
    margin: 30px auto;
    border-radius: 50%;
  }
  .info {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: 44px 0;
  }
}
</style>
