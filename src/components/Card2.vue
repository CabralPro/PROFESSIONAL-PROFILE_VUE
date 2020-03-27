<template>
  <div class="card2">
    <div class="face front">
      <img src="@/assets/img/co2.png" alt="" />
    </div>
    <div class="face back">
      <h1>2</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card2 {
  position: relative;
  width: 370px;
  height: 273px;
  transform-style: preserve-3d;
  border-radius: 15px;
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
    transform: perspective(500px) rotateY(0deg);
    border-radius: 15px;

    img {
      width: 100%;
    }
    h1 {
      transform: perspective(500px) translateZ(50px);
    }
  }
  .front {
    background: red;
  }
  .back {
    background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%);
    transform: perspective(500px) rotateY(180deg);
  }
}
.card2:hover .face.front {
  transform: perspective(500px) rotateY(180deg);
}
.card2:hover .face.back {
  transform: perspective(500px) rotateY(360deg);
}
</style>
