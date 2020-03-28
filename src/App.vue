<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");
@import url("https://fonts.googleapis.com/css?family=Raleway:100,400,500,800&display=swap");

html{
  scroll-behavior: smooth;
}
body {
  margin: 0;
  font-family: "Raleway", sans-serif;
  color: #e8eaf6;
  background: linear-gradient(400deg , #4b6cb7 0%, #182848 100%);
  text-align: justify;
  font-weight: 100;
  h1,
  h2,
  h3 {
    font-weight: 400;
    margin: 10px 0;
  }
  a {
    text-decoration: none;
    color: #e8eaf6;
  }
  ul{
    list-style-type: none;
    padding: 0;
  }
  .btn {
    padding: 5px 20px !important;
    color: #e8eaf6;
    box-shadow: -1rem 0 3rem rgba(37, 37, 37, 0.5) !important;
    border-radius: 5px;
    border: #182848;
    font-size: 14pt;
    letter-spacing: 1px;
    font-weight: 400 !important;
    background: transparent;
    color: white;
    border: 2px solid #7510f7;
    transition: 0.5s;
     width: fit-content;
    cursor: pointer;
  }
  .btn:hover {
    background: #7510f7;
    color: white;
  }
}
</style>

<script>
export default {
  name: "App"
};
</script>
