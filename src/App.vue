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

    <div class="content">
      <div class="card1">
        <div class="text">
          <h1>
            Olá, seja muito bem vindo! Neste site você conhecerá um pouco sobre
            o meu trabalho!
          </h1>
          <h3>
            Sou desenvolvedor de sistemas web e mobile, tenho uma grande paixão
            por interfaces de usuário, animações e criação de
            experiências intuitivas e dinâmicas para o usuário. Trabalho com
            front-end e back-end e procuro sempre estar atualizado sobre novas
            tecnologias.
          </h3>
        </div>
        <div class="image">
          <img src="@/assets/img/programer.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css?family=Indie+Flower&display=swap");
// @import url("https://fonts.googleapis.com/css?family=Sacramento&display=swap");
@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");
@import url("https://fonts.googleapis.com/css?family=Raleway:100,400,500,800&display=swap");

body {
  margin: 0;
  font-family: "Raleway", sans-serif;
  color: #e8eaf6;
  // background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
  background: linear-gradient(400deg, #4b6cb7 0%, #182848 100%);
  text-align: justify;
  font-weight: 100;
  h1,
  h1,
  h3 {
    font-weight: 100;
    margin: 10px 0;
  }
}

header {
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
  // background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
  color: #e8eaf6;
  canvas {
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
    font-size: 20pt;
    margin: 0;
    font-weight: 100;
  }
  h1 {
    font-size: 45pt;
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

.content {
  padding: 30px;
  display: flex;
  justify-content: center;
}
.card1 {
  // padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    font-weight: 400;
  }
  .text {
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .image {
    width: 50%;
    display: flex;
    img {
      width: 100%;
      max-width: 400px;
      margin: auto;
    }
  }
  // img {
  //   max-width: 500px;
  //   width: 50%;
  // }
  // width: 600px;
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
