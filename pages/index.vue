<template>
  <v-layout fluid column justify-center align-center>
    <Hero></Hero>
    <br />
    <BusinessCard></BusinessCard>
    <br />
    <br />
    <br />
    <About></About>
  </v-layout>
</template>

<script>
import Hero from '@/components/Hero'
import BusinessCard from '@/components/BusinessCard'
import About from '@/components/About'
export default {
  components: { Hero, BusinessCard, About }
}
</script>

<style lang="scss"></style>
