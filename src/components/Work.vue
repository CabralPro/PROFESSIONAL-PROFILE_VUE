<template>
  <div class="work">
    <div class="face front">
      <img :src="require(`@/assets/img/${img}.png`)" />
    </div>
    <div class="face back">
      <h2 v-html="title"></h2>
      <p v-html="text"></p>
      <a :href="link" target="_blank" class="btn">
        Visitar
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "work",
  props: ["title", "text", "link", "img"]
};
</script>

<style lang="scss">
.work {
  position: relative;
  width: 370px;
  height: 270px;
  transform-style: preserve-3d;
  margin: 25px 20px;

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1.5s ease-in-out;
    backface-visibility: hidden;
    transform: perspective(1000px) rotateX(0deg);
    border-radius: 10px;
    box-shadow: 5px 7px 5px rgba(33, 32, 32, 0.3);
    background: #f7f7f7;

    img {
      border-radius: 10px;
    }
    h2,
    p,
    .btn {
      padding: 0 35px;
      transform: translateZ(50px);
      font-weight: 400;
    }
  }
  .back {
    flex-direction: column;
    background: linear-gradient(190deg, #18284870 0%, #182848 100%);
    transform: perspective(1000px) rotateX(180deg);
    p {
      margin-top: 5px;
    }
  }
}
.work:hover {
  .front {
    transform: perspective(1000px) rotateX(180deg);
  }
  .back {
    transform: perspective(1000px) rotateX(360deg);
  }
}

.work:nth-child(2n + 1) {
  .face {
    transform: perspective(1000px) rotateY(0deg);
  }
  .back {
    transform: perspective(1000px) rotateY(180deg);
  }
}

.work:nth-child(2n + 1):hover {
  .front {
    transform: perspective(1000px) rotateY(180deg);
  }
  .back {
    transform: perspective(1000px) rotateY(360deg);
  }
}
</style>
