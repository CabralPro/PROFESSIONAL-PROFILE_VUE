<template>
  <div class="home">
    <Header />

    <div class="content">
      <div id="intro">
        <Card1
          title="Olá, seja muito bem vindo! Neste site você conhecerá um pouco sobre
            o meu trabalho!"
          text="Sou desenvolvedor de sistemas web e mobile, tenho uma grande paixão
            por interfaces de usuário, animações e criação de
            experiências intuitivas e dinâmicas para o usuário. Trabalho com
            front-end e back-end e estou sempre atualizado sobre novas
            tecnologias."
          img="programer3.png"
        />

        <Card1
          title="Busco oferecer o meu melhor, visando sempre a execução das melhores práticas!"
          text="Um produto precisa ser inovador o suficiente para se diferenciar do resto, mas 
            não tão inovador que o usuário não entenda! Por isso faço o possível para entregar um 
            excelente produto em termos de qualidade de código, manutenibilidade e UE, pois isso 
            pode evitar muitas dores de cabeça no futuro."
          img="programer2.png"
          reverse="true"
        />
      </div>

      <div id="conhecimento"></div>
      
      <div class="areas" v-animate.repeat.fade="'slide-up'">
        <h1 class="title">Áreas de Conhecimento</h1>

        <div class="row">

          <Fieldset title="Web">
            <Skill title="Vue" percent="100" size="35" top="27" icon="logos:vue" />
            <Skill title="Angular" percent="90" size="42" top="25" icon="logos:angular-icon" />
            <Skill title="Vuetify" percent="100" size="42" top="25" icon="logos:vuetifyjs" />
            <Skill title="Javascript" percent="90" icon="logos:javascript" />
            <Skill title="Css" percent="100" size="53" top="18" icon="logos:css-3" />
            <Skill title="Sass" percent="100" icon="logos:sass" />
            <Skill title="Materialize" percent="100" top="27" size="30" icon="logos:materializecss"/>
            <Skill title="Bootstrap" percent="100" icon="logos:bootstrap" />
            <Skill title="BootstrapVue" percent="100" image="bv.svg" left="32" />
            <Skill title="Jquery" percent="100" size="15" top="33" icon="logos:jquery" />
          </Fieldset>

          <Fieldset title="Mobile" v-animate.repeat.fade="'slide-left'">
            <Skill title="Dart" percent="90" icon="logos:dart" />
            <Skill title="Flutter" percent="90" icon="logos:flutter" />
            <Skill title="Android Nativo" percent="75" size="13" top="33" icon="logos:android" />
          </Fieldset>

          <Fieldset title="Back-End" v-animate.repeat.fade="'slide-right'">
            <Skill title=".Net" percent="90" size="34" top="25" icon="logos:dotnet" />
            <Skill title="C#" percent="95" icon="logos:c-sharp" />
            <Skill title="Node.js" percent="95" size="35" icon="logos:nodejs" />
            <Skill title="Java" percent="70" icon="logos:java" />
          </Fieldset>

          <Fieldset title="Banco de Dados" v-animate.repeat.fade="'slide-left'">
            <Skill title="MySql" percent="90" color="white" icon="simple-icons:mysql" />
            <Skill title="Firebird" percent="90" left="30" image="firebird.png" />
            <Skill title="Postregres" percent="90" icon="logos:postgresql" />
          </Fieldset>

          <Fieldset title="Outras" v-animate.repeat.fade="'slide-right'" style="max-width: 652px">
            <Skill title="Git" percent="100" size="20" top="33" icon="logos:git" />
            <Skill title="Docker" percent="80" size="15" top="33" icon="logos:docker" />
            <Skill title="Firebase" percent="85" icon="logos:firebase" />
            <Skill title="Digital Ocean" percent="90" top="18" icon="logos:digital-ocean" />
            <Skill title="AWS" percent="60" size="30" top="30" icon="logos:aws" />
          </Fieldset>

          <!-- <Fieldset title="Sistemas Operacionais" v-animate.repeat.fade="'slide-right'" style="max-width: 652px">
            <Skill title="Linux" percent="90" icon="logos:linux-tux" />
            <Skill title="Windows" percent="100" icon="logos:microsoft-windows" />
          </Fieldset> -->
        </div>
      </div>

      <div id="portifolio"/>

      <div class="portifolio row" v-animate.repeat.fade="'slide-up'">
        <h1 class="title">Portifólio</h1>

        <Work
          title="LPSJ"
          text="Nesse aplicativo você tem acesso as principais informações do ministério LPSJ, 
          como por exemplo a agenda das igrejas, datas e horários dos cultos oficiais, avisos 
          da direção e muito mais ..."
          link="https://play.google.com/store/apps/details?id=com.lpsj&hl=pt_BR"
          img="lpsj"
        />

        <Work
          title="Cabral Drums"
          text="Bateria Eletrônica Caseira feita com Arduíno e Raspberry Pi. O projeto também
           conta com um aplicativo que funciona como controle remoto via bluetooth. Tecnologias
            envolvidas: Java e C++"
          link="https://www.youtube.com/watch?v=0h-TJn9KokY&t=175s"
          img="cabral-drums"
        />

        <Work
          title="Correspondente Oficial"
          text="Divulgação de trabalho advocatício. Advogados podem se cadastrar 
          e oferecer seus serviços aos clientes. O site está integrado ao PagSeguro 
          permitindo que esses advogados adquiram planos de divulgação."
          link="https://www.correspondenteoficial.com.br"
          img="co"
        />
      </div>

      <div
        class="contato col"
        id="contratar"
        v-animate.repeat.fade="'slide-up'"
      >
        <h1>Estou animado para entender o seu projeto. Pronto para começar?</h1>
        <a class="btn" href="mailto:cabraltec02@gmail.com">
          <span class="iconify" data-icon="dashicons:email-alt2"></span> Enviar
          email
        </a>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card1 from "@/components/Card1";
import Work from "@/components/Work";
import Skill from "@/components/Skill";
import Fieldset from "@/components/Fieldset";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Card1,
    Work,
    Skill,
    Fieldset,
  },
};
</script>

<style lang="scss" src="./Home.scss" />