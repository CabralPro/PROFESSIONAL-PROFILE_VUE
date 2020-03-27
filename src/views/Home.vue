<template>
  <div class="home">
    <Header />

    <div class="content">
      <Card1 title="Olá, seja muito bem vindo! Neste site você conhecerá um pouco sobre
            o meu trabalho!" text="Sou desenvolvedor de sistemas web e mobile, tenho uma grande paixão
            por interfaces de usuário, animações e criação de
            experiências intuitivas e dinâmicas para o usuário. Trabalho com
            front-end e back-end e estou sempre atualizado sobre novas
            tecnologias." img="programer3.png" />

      <Card1 title="Busco oferecer o meu melhor, visando sempre a execução das melhores práticas!" text="Um produto precisa ser inovador o suficiente para se diferenciar do resto, mas 
        não tão inovador que o usuário não entenda! Por isso faço o possivel para entregar um 
        excelente produto em termos de qualidade de código, manutenibilidade e UE, pois isso 
        pode evitar muitas dores de cabeça no futuro." img="programer2.png" reverse="true" />

      <div class="row">

        <div class="col">
          <h1>Conhecimento Web</h1>
          <div class="row">
            <Card3 title="Javascript" percent="90" icon="logos:javascript" />
            <Card3 title="Css" percent="95" size="53" top="18" icon="logos:css-3" />
            <Card3 title="Sass" percent="95" icon="logos:sass" />
            <Card3 title="Materialize" percent="100" top="27" size="30" icon="logos:materializecss" />
            <Card3 title="Bootstrap" percent="100" icon="logos:bootstrap" />
            <Card3 title="BootstrapVue" percent="100" image="bv.svg" left="32" />
            <Card3 title="Vue.js" percent="95" size="35" top="27" icon="logos:vue" />
            <Card3 title="Jquery" percent="80" size="15" top="33" icon="logos:jquery" />
          </div>
        </div>


        <div class="col">
          <h1>Conhecimento Mobile</h1>
          <div class="row">
            <Card3 title="Dart" percent="85" icon="logos:dart" />
            <Card3 title="Flutter" percent="85" icon="logos:flutter" />
            <Card3 title="Android Nativo" percent="75" size="13" top="33" icon="logos:android" />
          </div>
        </div>

        <div class="col">
          <h1>Conhecimento Back-End</h1>
          <div class="row">
            <Card3 title="Node.js" percent="95" size="35" icon="logos:nodejs" />
            <Card3 title="Java" percent="60" icon="logos:java" />
            <Card3 title="C#" percent="80" icon="logos:c-sharp" />
            <Card3 title="Php" percent="55" size="34" top="25" icon="logos:php" />
          </div>
        </div>

        <div class="col">
          <h1>Conhecimento Banco de Dados</h1>
          <div class="row">
            <Card3 title="MySql" percent="90" color="white" icon="simple-icons:mysql" />
            <Card3 title="Firebird" percent="90" left="30" image="firebird.png" />
            <Card3 title="Postregres" percent="90" icon="logos:postgresql" />
          </div>
        </div>

        <div class="col">
          <h1>Sistemas Operacionais</h1>
          <div class="row">
            <Card3 title="Linux" percent="90" icon="logos:linux-tux" />
            <Card3 title="Windows" percent="100" icon="logos:microsoft-windows" />
          </div>
        </div>

        <div class="col">
          <h1>Outros conhecimentos</h1>
          <div class="row">
            <Card3 title="Docker" percent="75" size="15" top="33" icon="logos:docker" />
            <Card3 title="AWS" percent="60" size="30" top="30" icon="logos:aws" />
            <Card3 title="Digital Ocean" percent="90" top="18" icon="logos:digital-ocean" />
            <Card3 title="Firebase" percent="85" icon="logos:firebase" />
          </div>
        </div>

      </div>
    </div>

    Arte + Design + Estilo + Inovação + Sustentabilidade = Produto final.

  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Card1 from "@/components/Card1";
  import Card2 from "@/components/Card2";
  import Card3 from "@/components/Card3";
  export default {
    name: "Home",
    components: {
      Header,
      Card1,
      Card2,
      Card3
    }
  };
</script>

<style lang="scss">
  .content {
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  }

  .row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  }
  .col {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  }
</style>