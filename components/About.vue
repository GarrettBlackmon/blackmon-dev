<template>
  <v-container id="About" fluid>
    <v-layout fluid align-center justify-center wrap>
      <v-flex xs12 md4 text-xs-center pa-4>
        <img class="responsive" src="@/assets/images/responsive.svg" alt="responsive web design" />
      </v-flex>
      <v-flex xs12 md4 offset-md1>
        <h2>About Me</h2>
        <p>Hello, I'm Garrett. I'm a full stack web developer currently living in Birmingham, Alabama. I enjoy making stylish, performant, responsive, and search engine optimized websites.</p>
        <p>
          <v-chip>NodeJS</v-chip>
          <v-chip>Serverless Framework</v-chip>
          <v-chip>AWS</v-chip>
          <v-chip>VueJS</v-chip>
          <v-chip>Python</v-chip>
          <v-chip>Bash</v-chip>
          <v-chip>Microservices</v-chip>
          <v-chip>Webpack</v-chip>
          <v-chip>SEO</v-chip>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
.responsive {
  width: 100%;
}
.v-chip {
  margin: 4px 0;
}
</style>