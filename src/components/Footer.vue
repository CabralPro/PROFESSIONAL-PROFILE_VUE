<template>
  <footer class="col">
    <img src="@/assets/img/logo.png" alt="" />
    <h3>
      ''Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um
      problema.''
    </h3>
    <p>© Desenvolvido por Arthur Cabral</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
footer {
  text-align: center;
  align-items: center;
  padding: 150px 20px 0;
  background: linear-gradient(-187deg, #4b6cb7 0%, #182848 100%);
  max-width: 100%!important;

  h3 {
    max-width: 450px;
    margin-bottom: 30px;
  }

  img {
    width: fit-content;
    margin: 20px 0;
    border-radius: 30%;
  }
  @media (max-width: 525px) {
    h3 {
      font-size: 12pt;
      max-width: 350px;
    }
  }
}
</style>
