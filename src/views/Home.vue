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
        não tão inovador que o usuário não entenda! Por isso faço o possivel para entregar um 
        excelente produto em termos de qualidade de código, manutenibilidade e UE, pois isso 
        pode evitar muitas dores de cabeça no futuro."
          img="programer2.png"
          reverse="true"
        />
      </div>

      <div class="areas" id="conhecimento" v-animate.repeat.fade="'slide-up'">
        <h1 class="title">Áreas de Conhecimento</h1>

        <div class="row">
          <div class="fieldset">
            <h2>Web</h2>
            <div class="body">
              <Skill title="Javascript" percent="90" icon="logos:javascript" />
              <Skill
                title="Css"
                percent="95"
                size="53"
                top="18"
                icon="logos:css-3"
              />
              <Skill title="Sass" percent="95" icon="logos:sass" />
              <Skill
                title="Materialize"
                percent="100"
                top="27"
                size="30"
                icon="logos:materializecss"
              />
              <Skill title="Bootstrap" percent="100" icon="logos:bootstrap" />
              <Skill
                title="BootstrapVue"
                percent="100"
                image="bv.svg"
                left="32"
              />
              <Skill
                title="Vue.js"
                percent="95"
                size="35"
                top="27"
                icon="logos:vue"
              />
              <Skill
                title="Jquery"
                percent="80"
                size="15"
                top="33"
                icon="logos:jquery"
              />
            </div>
          </div>

          <div class="fieldset" v-animate.repeat.fade="'slide-left'">
            <h2>Mobile</h2>
            <div class="body">
              <Skill title="Dart" percent="85" icon="logos:dart" />
              <Skill title="Flutter" percent="85" icon="logos:flutter" />
              <Skill
                title="Android Nativo"
                percent="75"
                size="13"
                top="33"
                icon="logos:android"
              />
            </div>
          </div>

          <div class="fieldset" v-animate.repeat.fade="'slide-right'">
            <h2>Back-End</h2>
            <div class="body">
              <Skill
                title="Node.js"
                percent="95"
                size="35"
                icon="logos:nodejs"
              />
              <Skill title="Java" percent="60" icon="logos:java" />
              <Skill title="C#" percent="80" icon="logos:c-sharp" />
              <Skill
                title="Php"
                percent="55"
                size="34"
                top="25"
                icon="logos:php"
              />
            </div>
          </div>

          <div class="fieldset" v-animate.repeat.fade="'slide-left'">
            <h2>Banco de Dados</h2>
            <div class="body">
              <Skill
                title="MySql"
                percent="90"
                color="white"
                icon="simple-icons:mysql"
              />
              <Skill
                title="Firebird"
                percent="90"
                left="30"
                image="firebird.png"
              />
              <Skill title="Postregres" percent="90" icon="logos:postgresql" />
            </div>
          </div>

          <!-- <fieldset>
            <legend>
              <h2>Sistemas Operacionais</h2>
            </legend>
            <div class="row">
              <Skill title="Linux" percent="90" icon="logos:linux-tux" />
              <Skill title="Windows" percent="100" icon="logos:microsoft-windows" />
            </div>
          </fieldset> -->

          <div class="fieldset" v-animate.repeat.fade="'slide-right'">
            <h2>Outras</h2>
            <div class="body">
              <Skill
                title="Docker"
                percent="75"
                size="15"
                top="33"
                icon="logos:docker"
              />
              <Skill
                title="AWS"
                percent="60"
                size="30"
                top="30"
                icon="logos:aws"
              />
              <Skill
                title="Digital Ocean"
                percent="90"
                top="18"
                icon="logos:digital-ocean"
              />
              <Skill title="Firebase" percent="85" icon="logos:firebase" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="portifolio row"
        id="portifolio"
        v-animate.repeat.fade="'slide-up'"
      >
        <h1 class="title">Portifólio</h1>

        <Work
          title="Amikão"
          text="Nós, seres humanos, estamos na natureza para auxiliar o progresso
           dos animais, na mesma proporção que os anjos estão para nos auxiliar. 
           Portanto quem chuta ou maltrata um animal é alguém que não aprendeu a amar..."
          link="https://amikaopet.com.br/"
          img="amikao"
        />

        <Work
          title="LPSJ"
          text="Nesse aplicativo você tem acesso as principais informações do ministério LPSJ, 
          como por exemplo a agenda das igrejas, datas e horários dos cultos oficiais, avisos 
          da direção e muito mais ..."
          link="https://play.google.com/store/apps/details?id=com.lpsj&hl=pt_BR"
          img="lpsj"
        />

        <Work
          title="Amazon Bowling"
          text="No Amazon Bowling a diversão é garantida para todas as idades. 
          Equipado com modernas pistas de boliche, mesas de sinuca e ainda temos 
          opção de Air Game, Pebolim(totó), xadrez e dominó."
          link="https://www.amazonbowling.com.br/club"
          img="amazonB"
        />

        <Work
          title="GH Club"
          text="Nosso objetivo é fazer com que as pessoas possam vivenciar momentos 
          inesquecíveis e aproveitar todos os momentos de lazer e convívio em família 
          através dos nossos produtos."
          link="http://www.ghclub.com.br/"
          img="gh-club"
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
          title="Nitpan"
          text="Instalados no CEASA do Colubandê, a NitPan atua no mercado desde 1999 e 
          foi totalmente renovada e reformulada visando facilitar para seus clientes a 
          preparação dos produtos para padarias e confeitarias."
          link="https://nitpandoceasa.com.br/fidelidade/"
          img="nitpan"
        />

        <Work
          title="Suprevida"
          text="A Suprevida é uma integradora de soluções a seu serviço! Através de toda 
          uma estrutura tecnológica, logística e financeira, somos capazes de oferecer 
          máxima comodidade, rapidez e segurança."
          link="http://clube.suprevida.com.br/"
          img="suprevida"
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
        <a class="btn" href="mailto:cabraltec02@gmail.com"
          ><span class="iconify" data-icon="dashicons:email-alt2"></span> Enviar
          email</a
        >
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
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Card1,
    Work,
    Skill
  }
};
</script>

<style lang="scss">
.content {
  padding: 30px 30px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;

  @media (max-width: 900px) {
    padding: 10px 10px 0px;
  }
}

.portifolio {
  justify-content: space-around;
}

.title {
  font-weight: 400;
  text-align: center;
  font-size: 28pt;
  width: 100%;
  margin-top: 20px;
}

.areas {
  margin-bottom: 70px;
  .row {
    justify-content: center;
    .fieldset {
      position: relative;
      margin: 10px;
      margin-top: 50px;
      @media (max-width: 1340px) {
        width: 100%;
      }
      .body {
        border: 1px solid #e8eaf636;
        border-radius: 10px;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        padding: 30px 50px 20px 20px;
      }

      h2 {
        position: absolute;
        top: -27px;
        left: 22px;
        padding: 0 10px;
      }
      ::-webkit-scrollbar {
        height: 5px;
      }
      ::-webkit-scrollbar-track {
        background: #182848;
      }
      ::-webkit-scrollbar-thumb {
        background: #27458d;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #4b6cb7;
      }
    }
  }
}

.contato {
  padding: 30px 50px;
  border-radius: 15px;
  background: linear-gradient(190deg, #18284870 0%, #182848 100%);
  max-width: 530px;
  margin: 100px auto -105px auto !important;
  box-shadow: -1rem 0 3rem rgba(37, 37, 37, 0.6);
  .btn {
    margin: auto;
    margin-top: 20px;
  }
  @media (max-width: 700px) {
    padding: 20px;
    max-width: 300px;
    h1 {
      font-size: 18pt;
    }
    .btn {
      font-size: 10pt;
    }
  }
}
</style>
