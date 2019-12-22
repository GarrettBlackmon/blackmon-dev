<template>
  <v-layout wrap justify-center align-center>
    <no-ssr>
      <vue-particles
        :clickEffect="false"
        :hoverEffect="false"
        :moveSpeed="2"
        color="#fff"
      />
    </no-ssr>
    <v-flex xs11 sm8>
      <v-card>
        <v-card-title>Garrett Blackmon</v-card-title>
        <v-card-subtitle>Full Stack Developer</v-card-subtitle>
        <v-card-text
          >Software developer currently based in Atlanta Georgia interested in
          building robust, reliable, efficient, and most of all beautiful
          websites and webapps. Open source hippie. Experience in VueJs,
          MongoDB, NuxtJs, Serverless Framework</v-card-text
        >

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon :href="links.github">
            <v-icon>fab fa-github</v-icon>
          </v-btn>

          <v-btn icon :href="links.linkedin">
            <v-icon>fab fa-linkedin-in</v-icon>
          </v-btn>

          <v-btn icon :href="links.twitter">
            <v-icon>fab fa-twitter</v-icon>
          </v-btn>

          <v-btn icon :href="links.email">
            <v-icon>fa fa-envelope</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      links: {
        github: 'https://github.com/GarrettBlackmon',
        linkedin: 'https://www.linkedin.com/in/garrettblackmon/',
        twitter: 'https://twitter.com/GarrettBlackmon',
        email: 'mailto:garrett@blackmon.dev'
      }
    }
  }
}
</script>

<style lang="scss">
#particles-js {
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}
</style>
