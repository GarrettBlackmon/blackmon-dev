<template>
  <v-layout fluid column justify-center align-center>
    <Hero></Hero>
    <br />
    <BusinessCard></BusinessCard>
    <br />
    <br />
    <br />
    <About data-aos="fade-up"></About>
    <br />
    <br />
    <br />
    <Auburn data-aos="fade-up"></Auburn>

    <div style="height:1200px;"></div>
  </v-layout>
</template>

<script>
import Hero from '@/components/Hero'
import BusinessCard from '@/components/BusinessCard'
import About from '@/components/About'
import Auburn from '@/components/Auburn'
export default {
  components: { Hero, BusinessCard, About, Auburn }
}
</script>

<style lang="scss"></style>
