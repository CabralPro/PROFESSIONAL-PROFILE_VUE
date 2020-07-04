<template>
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
    <h1>Arthur Cabral</h1>
    <h2>Desenvolvedor Web e Mobile</h2>

    <div class="info">
      <BoxInfo
        icon="ant-design:github-filled"
        text="/CabralPro"
        link="https://github.com/CabralPro"
      />
      <BoxInfo
        icon="el:map-marker"
        text="Igarapé - MG"
        link="https://www.google.com/maps/place/Igarap%C3%A9+-+MG/data=!4m2!3m1!1s0xa6d122a6a39221:0x1c72357de5d801e6?sa=X&ved=2ahUKEwj78KCwgrzoAhW4JrkGHeo1DF4Q8gEwHHoECBYQBA"
      />
      <BoxInfo
        icon="bx:bxl-whatsapp"
        text="(31) 9 9876-2713"
        link="https://api.whatsapp.com/send?phone=5531998762713&text=Obrigado%20por%20reservar%20um%20tempo%20para%20entrar%20em%20contato.%20Como%20posso%20te%20ajudar%3F"
      />
      <BoxInfo
        icon="foundation:social-linkedin"
        text="/arthurcabrallemos"
        link="https://www.linkedin.com/in/arthurcabrallemos/"
      />
      <BoxInfo
        icon="dashicons:email-alt2"
        text="cabraltec02@gmail.com"
        currentTab="true"
        link="mailto:cabraltec02@gmail.com"
      />
    </div>
  </header>
</template>

<script>
import BoxInfo from "@/components/BoxInfo";

export default {
  name: "HeaderComponent",
  components: {
    BoxInfo
  },
  mounted() {
    import("@/assets/js/animation.js").then();
  }
};
</script>

<style lang="scss">
header {
  color: #e8eaf6;
  font-family: "Cinzel", serif;
  position: relative;
  padding: 0 30px;
  text-align: center;

  * {
    z-index: 1;
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
    margin: 0px auto;
    border-radius: 50%;
    max-width: 100%;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    margin: 44px 0;

    @media (max-width: 525px) {
      flex-direction: column;
    }
  }

  nav {
    border: 1px solid #e8eaf636;
    border-radius: 10px;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    margin: 30px 0 30px auto;
    background: #ffffff24;

    @media (max-width: 1200px) {
      margin: 40px auto;
      margin-top: 30px;
    }

    a {
      text-align: center;
      padding: 10px 20px;
      &:not(:last-child) {
        border-right: 1px solid #e8eaf636;
      }
      &:hover {
        transform: scale(1.01);
        color: white;
      }
    }
  }

  @media (max-width: 570px) {
    padding: 0 10px;

    nav {
      width: 280px;

      a {
        width: 100px;
        border: none !important;
      }
    }

    .perfil {
      width: 270px;
      height: 270px;
    }

    h1 {
      font-size: 30pt;
      margin: 20px 0 10px 0;
    }
    h2 {
      font-size: 14pt;
    }
  }
}
</style>
