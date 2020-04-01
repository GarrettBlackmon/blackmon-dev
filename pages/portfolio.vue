<template>
  <v-container>
    <v-layout ma-5 wrap>
      <PortfolioItem
        class="ma-5"
        link="https://yellowcard.io/"
        image="yellowcard.png"
        title="YellowCard.io"
        subtitle="Website for Yellow Card"
        content="Statically generated website written in Nuxt.js for cryptocurrency excange service Yellow Card."
      ></PortfolioItem>
      <PortfolioItem
        class="ma-5"
        link="https://play.google.com/store/apps/details?id=io.yellowcard.app&hl=en"
        image="yc-app.png"
        title="Yellow Card Android App"
        subtitle="Android port of the Yellow Card Web App"
        content="Android app for Yellow Card transpiled for compatibility down to Android 4.4"
        light
      ></PortfolioItem>
    </v-layout>
    <v-layout ma-5 wrap>
      <PortfolioItem
        class="ma-5"
        link="https://github.com/GarrettBlackmon/ranky"
        image="ranky.png"
        title="Ranky"
        subtitle="Simple, Open-source, Discord Activity Ranking Bot"
        content="Tiered activity ranking Discord bot written in NodeJS and SQLlite"
      ></PortfolioItem>

      <PortfolioItem
        class="ma-5"
        link="https://github.com/GarrettBlackmon/Angular-Todo"
        image="todo.png"
        title="Angular TODO"
        subtitle="CRUD example project"
        light
        content="ToDo app written in Angular.js with Async/seperate client side handling for a good UX."
      ></PortfolioItem>
    </v-layout>
  </v-container>
</template>

<script>
import PortfolioItem from '@/components/PortfolioItem'
export default {
  components: { PortfolioItem },
  head() {
    return {
      title: 'Portfolio'
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
