<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");
@import url("https://fonts.googleapis.com/css?family=Raleway:100,400,500,800&display=swap");

body {
  margin: 0;
  font-family: "Raleway", sans-serif;
  color: #e8eaf6;
  background: linear-gradient(400deg, #4b6cb7 0%, #182848 100%);
  text-align: justify;
  font-weight: 100;
  h1,
  h1,
  h3 {
    font-weight: 100;
    margin: 10px 0;
  }
  a{
    text-decoration: none;
    color: #e8eaf6;
  }
}

</style>

<script>
export default {
  name: "App"
};
</script>
