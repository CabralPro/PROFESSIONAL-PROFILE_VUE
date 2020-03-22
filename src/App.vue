<template>
  <div id="app">
    <header class="">
      <ul class="el-1">
        <li class="t1"></li>
        <li class="t4"></li>
        <li class="t2"></li>
        <li class="t3"></li>
        <li class="t5"></li>
        <li class="profile">
          <img src="@/assets/img/perfil.jpg" alt="" />
          <div class="info">
            <h1>ARTHUR</h1>
            <h1>CABRAL</h1>
            <hr />
            <h2>Desenvolvedor Web e Mobile</h2>
          </div>
        </li>
      </ul>
    </header>
    <!-- <router-view/> -->
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: Roboto;
  src: url(./assets/fonts/Roboto-Thin.ttf);
}
body {
  margin: 0px;
  overflow-x: hidden;
  font-family: Roboto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .el-1 {
    position: relative;
    height: 320px;
    li {
      position: absolute;
      width: 0;
      height: 0;
    }
    .t1 {
      border-left: 74vw solid transparent;
      border-right: 26vw solid transparent;
      border-top: 295px solid #bde3e4;
    }
    .t2 {
      border-left: 59vw solid transparent;
      border-right: 41vw solid transparent;
      border-top: 339px solid #00747a75;
    }
    .t3 {
      border-left: 54vw solid transparent;
      border-right: 32vw solid transparent;
      border-top: 345px solid #001272a1;
    }
    .t4 {
      border-left: 22vw solid transparent;
      border-right: 79vw solid transparent;
      border-top: 350px solid #41007d96;
      left: 16%;
    }
    .t5 {
      border-left: 17vw solid transparent;
      border-right: 81vw solid transparent;
      border-top: 200px solid #00000061;
    }
    .profile {
      left: 14%;
      top: 10%;
      display: -webkit-inline-box;
      .info {
        color: white;
        margin-left: 50px;
        h1 {
          margin: 0;
          font-size: 50pt;
          font-family: Roboto;
        }
        h2{
  font-family: Roboto;

        }
      }
      img {
        border-radius: 50%;
        width: 100%;
        width: 305px;
      }
    }
  }

  .b-red {
    border: 1px solid red;
  }
}
</style>
