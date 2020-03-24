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
          <img src="@/assets/img/profile.png" alt="" />
          <div class="info">
            <h1>ARTHUR</h1>
            <h1>CABRAL</h1>
            <h2>DESENVOLVEDOR</h2>
          </div>
        </li>
      </ul>
    </header>

    <div class="content">
      <div class="card">
        <div class="title">
          <span>+</span>
          <h2>PROFILE</h2>
        </div>
        <div class="body">
          <p>
            asdasd asd asd as das das das dasd as da
          </p>
        </div>
      </div>
    </div>

    <!-- <router-view/> -->
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/fonts.scss";

@mixin bg-gradient {
  background: linear-gradient(
    to bottom right,
    #000000,
    #080f5f,
    #30879c,
    #ffffff
  );
}
body {
  margin: 0px;
  overflow-x: hidden;
  font-family: Bellota-Light;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4e5c6d;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .b-red {
    border: 1px solid red;
  }
}
.content {
  margin: 80px;
}
.card {
  width: 400px;
  .title {
    display: flex;
    align-items: flex-end;
    span {
      @include bg-gradient;
      font-size: 45pt;
      margin-bottom: 25px;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: Roboto;

      font-weight: 100;
    }
    h2 {
      position: relative;
      width: 100%;
      text-align: initial;
      border-bottom: 1px solid black;
      font-family: Roboto;
      font-weight: 600;
      font-size: 25pt;
      padding-left: 20px;
    }
    h2:before {
      content: "";
      @include bg-gradient;
      bottom: -6px;
      left: 0;
      width: 100px;
      height: 6px;
      position: absolute;
    }
    // flex-direction: ;
  }
}
header {
  .el-1 {
    position: relative;
    height: 320px;
    li {
      position: absolute;
      width: 0;
      height: 0;
    }
    .t1 {
      border-left: 80vw solid transparent;
      border-right: 20vw solid transparent;
      border-top: 308px solid #bde3e4;
    }
    .t2 {
      border-left: 70vw solid transparent;
      border-right: 30vw solid transparent;
      border-top: 339px solid #00747a75;
    }
    .t3 {
      border-left: 67vw solid transparent;
      border-right: 33vw solid transparent;
      border-top: 345px solid #001272a1;
    }
    .t4 {
      border-left: 30vw solid transparent;
      border-right: 79vw solid transparent;
      border-top: 350px solid #13007d96;
      left: 16%;
    }
    .t5 {
      border-left: 24vw solid transparent;
      border-right: 11vw solid transparent;
      border-top: 122px solid #00000094;
    }
    .profile {
      left: 10%;
      top: 10%;
      display: -webkit-inline-box;
      .info {
        color: white;
        margin-left: 100px;
        h1 {
          margin: 0;
          font-size: 50pt;
          font-family: Roboto;
          font-weight: 100;
          letter-spacing: 5px;
        }
        h1:last-of-type {
          font-weight: bolder;
          border-bottom: 1px solid white;
          position: relative;
        }
        h1:last-of-type:before {
          content: "";
          background: white;
          bottom: -8px;
          left: 0;
          width: 100px;
          height: 8px;
          position: absolute;
        }
        h2 {
          font-family: Roboto;
          font-weight: 100;
          text-align: initial;
        }
      }
      img {
        border-radius: 50%;
        width: 100%;
        width: 305px;
      }
    }
  }
}
</style>
