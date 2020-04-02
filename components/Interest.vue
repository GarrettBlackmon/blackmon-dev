<template>
  <v-layout class="interest-container" justify-center align-center>
    <v-flex xs12>
      <v-card class="interest-card pa-5">
        <div class="icon-container">
          <img
            class="top-icon"
            :src="require('@/assets/images/' + image)"
            alt="icon"
          />
        </div>
        <h1 class="pt-5">{{ title }}</h1>
        <p>{{ content }}</p>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    image: String
  }
}
</script>

<style lang="scss" scoped>
.interest-container {
  padding-top: 64px;
}
.interest-card {
  position: relative;
  padding-top: 40px !important;
  min-width: 310px;
  min-height: 240px;
}
.icon-container {
  background: white;
  border: 1px solid black;
  width: 128px;
  height: 128px;
  position: absolute;
  left: calc(50% - 64px);
  top: -64px;
  border-radius: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.top-icon {
  width: 100px;
  height: 100px;
}
</style>
