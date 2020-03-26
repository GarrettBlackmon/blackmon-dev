<template>
  <v-container id="Hero" fluid pa-0>
    <v-layout justify-center align-center fill-height wrap>
      <v-flex class="Hero-top" fluid>
        <div id="content">
          <h1 class="name">Garrett Blackmon</h1>
        </div>
        <no-ssr>
          <vue-particles
            :clickEffect="false"
            :hoverEffect="false"
            :moveSpeed="2"
            color="#555555"
            linesColor="#555555"
          />
        </no-ssr>
      </v-flex>

      <v-btn fab text @click="scrollDown" class="animated bounce bouncing-icon">
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    scrollDown: function() {
      window.scroll({
        top: window.innerHeight * 0.6 + 60,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.Hero-top {
  position: relative;
  width: 100%;
  height: 60vh;
}

#particles-js {
  height: 60vh;
}
.name {
  font-size: 6vw !important;
  font-family: 'Roboto';
  font-weight: 300;
}

#content {
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: center;
}

.animated {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
}
</style>
