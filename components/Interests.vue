<template>
  <v-container fluid>
    <v-layout justify-center>
      <h1 class="interests-title">Hobbies and Interests</h1>
    </v-layout>
    <v-layout justify-center align-center wrap>
      <v-flex xs12 sm8 md3 ma-5 data-aos="fade-up">
        <Interest
          title="Open Source / *nix"
          content="I am a supporter of the open source ideology. I believe that most code should be free to use and contribute to."
          image="linux.svg"
        ></Interest>
      </v-flex>

      <v-flex xs12 sm8 md3 ma-5 data-aos="fade-up" data-aos-delay="150">
        <Interest
          title="Speedrunning"
          content="Speedrunning is the act of beating a videogame as quickly as possible. Watching a seasoned speedrunner beat your favorite game is a treat."
          image="gamepad.svg"
        ></Interest>
      </v-flex>

      <v-flex xs12 sm8 md3 ma-5 data-aos="fade-up" data-aos-delay="300">
        <Interest
          title="Craft Beer"
          content="Beer is great! It's even better enjoyed with a small group of friends over a board game at your local brewry. Porter/Stout man."
          image="beer.svg"
        ></Interest>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Interest from '@/components/Interest'
export default {
  components: { Interest }
}
</script>

<style scoped>
.interests-title {
  margin-bottom: 30px;
}
</style>
