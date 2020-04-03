<template>
  <div id="footer">
    <div id="wave-container">
      <div id="wave-top">
        <div id="wave">
          <div id="fish-container">
            <div class="led-box">
              <div class="led-yellow"></div>
            </div>
            <img id="fish" src="@/assets/images/angler.svg" alt="angler fish" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#footer {
  width: 100%;
}
#wave-container {
  width: 100%;
  height: 1500px;
  overflow: hidden;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 16%,
    rgba(5, 90, 175, 1) 48%,
    rgba(0, 166, 255, 1) 68%
  );
}

#wave {
  display: block;
  position: relative;
  height: 40px;
  background: white;
}

#wave-top {
  height: 320px;
  background: #00a6ff;
}

#wave:before {
  content: '';
  display: block;
  position: absolute;
  border-radius: 100%;
  width: 100%;
  height: 300px;
  background-color: #00a6ff;
  right: -25%;
  top: 20px;
}

#wave:after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 100%;
  width: 100%;
  height: 300px;
  background-color: white;
  left: -25%;
  top: -240px;
}

#fish-container {
  position: relative;
  top: 1200px;
  left: 70%;
}

#fish {
  transform: scale(-0.75, 0.75);
}

.led-box {
  height: 30px;
  width: 300px;
  position: absolute;
  top: 96px;
  left: -87px;
}

.led-yellow {
  margin: 0 auto;
  width: 16px;
  height: 16px;
  background-color: #ff0;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
    #ff0 0 2px 12px;
  -webkit-animation: blinkYellow 1s infinite;
  -moz-animation: blinkYellow 1s infinite;
  -ms-animation: blinkYellow 1s infinite;
  -o-animation: blinkYellow 1s infinite;
  animation: blinkYellow 1s infinite;
}

@-webkit-keyframes blinkYellow {
  from {
    background-color: #ff0;
  }
  50% {
    background-color: #aa0;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
      #ff0 0 2px 0;
  }
  to {
    background-color: #ff0;
  }
}
@-moz-keyframes blinkYellow {
  from {
    background-color: #ff0;
  }
  50% {
    background-color: #aa0;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
      #ff0 0 2px 0;
  }
  to {
    background-color: #ff0;
  }
}
@-ms-keyframes blinkYellow {
  from {
    background-color: #ff0;
  }
  50% {
    background-color: #aa0;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
      #ff0 0 2px 0;
  }
  to {
    background-color: #ff0;
  }
}
@-o-keyframes blinkYellow {
  from {
    background-color: #ff0;
  }
  50% {
    background-color: #aa0;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
      #ff0 0 2px 0;
  }
  to {
    background-color: #ff0;
  }
}
@keyframes blinkYellow {
  from {
    background-color: #ff0;
  }
  50% {
    background-color: #aa0;
    box-shadow: rgba(255, 255, 0, 0.534) 0 -1px 7px 5px,
      inset #808002 0 -1px 9px, #ff0 0 2px 0;
  }
  to {
    background-color: #ff0;
  }
}
</style>
