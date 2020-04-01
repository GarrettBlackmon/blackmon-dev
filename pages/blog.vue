<template>
  <v-container fluid class="sky" justify-center align-center>
    <h1>Hmmmmm... Doesn't seem to be anything here yet.</h1>
    <h2>The dev should probably get on that.</h2>
    <p>
      Credit to <a href="https://codepen.io/thingir">thingir</a> for the cool
      desert CSS art!
    </p>

    <div class="sun"></div>
    <div class="layer">
      <div class="mountain_b"></div>
      <div class="mountain_b"></div>
      <div class="mountain_b"></div>
      <div class="mountain_b"></div>
      <div class="mountain_b"></div>
    </div>
    <div class="layer">
      <div class="mountain_s"></div>
      <div class="mountain_s"></div>
      <div class="mountain_s"></div>
      <div class="mountain_s"></div>
      <div class="mountain_s"></div>
    </div>
    <div class="layer">
      <div class="cactus"></div>
      <div class="cactus"></div>
      <div class="cactus"></div>
    </div>
    <div class="refill">
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="earth">
      <div class="road"></div>
    </div>
    <div class="car">
      <div class="up"></div>
    </div>
    <div class="sign">
      <i class="fa fa-car"></i>
    </div>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Blog'
      //   meta: [
      //     { charset: 'utf-8' },
      //     {
      //       hid: 'description',
      //       name: 'description',
      //       content:
      //     },
      //     {
      //       hid: 'og:title',
      //       name: 'og:title',
      //       content:
      //     },
      //     {
      //       hid: 'og:description',
      //       name: 'og:description',
      //       content:
      //     }
      //   ]
    }
  }
}
</script>
<style>
body {
  overflow: hidden;
}
</style>
<style lang="scss" scoped>
h1,
h2,
p,
a {
  color: white;
}
.sky {
  background: #333;
  overflow: hidden;
  height: 100vh;
}
body {
  height: 100vh;
  background: linear-gradient(to bottom, #fbac86, #fef5e0);
  overflow: hidden;
  display: block;
  position: relative;
  transition: 0.5s;
  top: 0px;
  &:hover {
    height: 80vh;
    top: 10vh;
  }
}

.sun {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 50%;
  right: 10%;
  top: 10%;
  box-shadow: 0px 0px 50px #fff;
}
.layer {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
}
.mountain_b {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 30px;
  transform: rotateZ(-45deg);
  bottom: 50px;
  left: -6%;
  background: linear-gradient(to bottom left, #fddabf, #fbac86);
  &:nth-of-type(2) {
    bottom: 40px;
    left: 10%;
  }
  &:nth-of-type(3) {
    bottom: 60px;
    left: 50%;
  }
  &:nth-of-type(4) {
    bottom: 40px;
    left: 80%;
  }
}
.mountain_s {
  position: absolute;
  width: 200px;
  height: 200px;
  background: #fcb895;
  border-radius: 30px;
  transform: rotateZ(-25deg);
  bottom: 80px;
  left: -10%;
  &::after {
    content: '';
    position: absolute;
    background: #fcb895;
    width: 200px;
    height: 200px;
    border-radius: 30px;
    transform: rotateZ(50deg);
    top: 30px;
    left: 70px;
  }
  &:nth-of-type(2) {
    bottom: 40px;
    left: 15%;
  }
  &:nth-of-type(3) {
    bottom: 60px;
    left: 40%;
  }
  &:nth-of-type(4) {
    bottom: 40px;
    left: 60%;
  }
  &:nth-of-type(5) {
    bottom: 80px;
    left: 80%;
  }
}
.cactus {
  position: absolute;
  background: #a06c7a;
  left: 10%;
  bottom: 240px;
  height: 25px;
  width: 10px;
  border-radius: 10px 10px 0px 0px;
  &::after,
  &::before {
    content: '';
    position: absolute;
    border-bottom: 5px solid #a06c7a;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: -10px;
    top: -2px;
    transform: rotateZ(45deg);
  }
  &::before {
    left: 0px;
    top: 5px;
    transform: rotateZ(-45deg);
  }
  &:nth-of-type(2) {
    left: 50%;
    height: 30px;
    &::after {
      top: 2px;
    }
    &::before {
      left: 0px;
      top: 0px;
      transform: rotateZ(-45deg);
    }
  }
  &:nth-of-type(3) {
    left: 94%;
    &::after {
      top: 0px;
    }
    &::before {
      left: 0px;
      top: 6px;
      transform: rotateZ(-45deg);
    }
  }
}
.refill {
  position: absolute;
  bottom: 240px;
  right: 20%;
  width: 80px;
  height: 60px;
  background: #a06c7a;
  box-sizing: border-box;
  border-top: 5px solid darken(#a06c7a, 10%);
  z-index: 5;
  &::after,
  &::before {
    content: '';
    position: absolute;
    background: #a06c7a;
  }
  &::after {
    right: 0px;
    top: -15px;
    width: 210px;
    height: 10px;
  }
  &::before {
    left: 99%;
    bottom: -4px;
    width: 100px;
    height: 40px;
    transform: skewY(3deg);
  }
  .col {
    position: absolute;
    bottom: 0px;
    left: -50px;
    width: 30px;
    height: 5px;
    background: #a06c7a;
    &::after,
    &::before {
      content: '';
      position: absolute;
      background: #a06c7a;
    }
    &::after {
      width: 10px;
      height: 60px;
      bottom: 0px;
      left: -10px;
      background: #a06c7a;
    }
    &::before {
      width: 15px;
      height: 30px;
      bottom: 0px;
      left: 5px;
      border-radius: 10px 10px 0px 0px;
      background: #a06c7a;
    }
    &:nth-of-type(2) {
      left: -110px;
    }
  }
}
.earth {
  position: absolute;
  bottom: 0px;
  left: 50%;
  width: 110%;
  height: 240px;
  background: linear-gradient(to bottom, #926374, #2f2546);
  overflow: hidden;
  transform: translateX(-50%);
  perspective: 100px;
  z-index: 10;
  box-shadow: inset 0px 10px 30px -10px #4b3757;
  .road {
    position: absolute;
    width: 100px;
    height: 50%;
    background: #614761;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%) skewX(-20deg) rotateX(15deg);
    perspective: 100px;
    border-left: 10px solid #855d76;
    &::after,
    &::before {
      content: '';
      position: absolute;
      width: 100px;
      height: 50%;
      background: #614761;
    }
    &::after {
      top: 108px;
      left: -23px;
      width: 130px;
      transform: skewX(30deg) rotateX(85deg);
      border-left: 10px solid #855d76;
    }
    &::before {
      bottom: 80%;
      height: 200%;
      left: -125px;
      width: 60px;
      transform: skewX(50deg) rotateX(15deg);
      border-right: 10px solid #4f3957;
    }
  }
}
.car {
  position: absolute;
  bottom: 230px;
  right: 24%;
  width: 60px;
  height: 15px;
  background: #2f2546;
  animation: car_shake 0.6s infinite, car_pos 6s;
  border-radius: 2px 10px 5px 5px;
  animation-fill-mode: forwards;
  box-sizing: border-box;
  &::after,
  &::before {
    content: '';
    position: absolute;
    background: #2f2546;
    width: 10px;
    height: 10px;
    bottom: -8px;
    left: 20%;
    border-radius: 50%;
    animation: car_c_shake 0.6s 4;
  }
  &::after {
    left: 70%;
  }
  .up {
    position: absolute;
    background: #2f2546;
    width: 50%;
    height: 15px;
    bottom: 100%;
    left: 30%;
    border-radius: 10px 20px 0px 0px;
  }
  @keyframes car_shake {
    0% {
      bottom: 230px;
    }
    50% {
      bottom: 233px;
    }
    100% {
      bottom: 230px;
    }
  }
  @keyframes car_c_shake {
    0% {
      bottom: -5px;
    }
    50% {
      bottom: -8px;
    }
    100% {
      bottom: -5px;
    }
  }
  @keyframes car_pos {
    0% {
      right: 24%;
      z-index: 11;
    }
    50% {
      right: -70px;
      transform: scaleX(1);
      z-index: 11;
      bottom: 230px;
    }
    51% {
      transform: scaleX(-1);
      z-index: 4;
      bottom: 246px;
    }
    100% {
      right: 30%;
      transform: scaleX(-1);
      z-index: 4;
      bottom: 246px;
    }
  }
}
.sign {
  position: absolute;
  left: 25%;
  width: 150px;
  height: 150px;
  bottom: 220px;
  background: #2b2348;
  transform: rotateZ(-45deg);
  z-index: 11;
  border-radius: 10px;
  box-sizing: border-box;
  border: 10px solid #2b2348;
  box-shadow: inset 0px 0px 0px 6px #583e5a;
  &::after {
    content: '';
    width: 10px;
    height: 200px;
    background: #151437;
    position: absolute;
    top: 140px;
    left: -116px;
    transform: rotateZ(45deg) translateY(-50px);
    border-right: 3px solid #221d3e;
    box-sizing: border-box;
  }
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: #583e5a;
    border-radius: 50%;
    top: 108px;
    left: 13px;
  }
  i {
    color: #583e5a;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 50px;
    transform: translate(-50%, -50%) rotateZ(45deg);
    &::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background: #583e5a;
      border-radius: 50%;
      top: -40px;
      left: 24px;
    }
  }
}
</style>
