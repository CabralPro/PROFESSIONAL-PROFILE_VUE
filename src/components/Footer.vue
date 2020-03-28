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
  padding-top: 150px;
  background: linear-gradient(-187deg, #4b6cb7 0%, #182848 100%);

  h3 {
    max-width: 450px;
    margin-bottom: 30px;
  }

  img {
    width: fit-content;
    margin: 20px 0;
    border-radius: 30%;
  }
}
</style>
