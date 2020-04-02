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
    <!-- <Auburn data-aos="fade-up"></Auburn> -->
    <client-only>
      <Timeline></Timeline>
    </client-only>
    <br />
    <br />
    <br />
    <Interests></Interests>
  </v-layout>
</template>

<script>
import Hero from '@/components/Hero'
import BusinessCard from '@/components/BusinessCard'
import About from '@/components/About'
import Auburn from '@/components/Auburn'
import Timeline from '@/components/Timeline'
import Interests from '@/components/Interests'
export default {
  components: { Hero, BusinessCard, About, Auburn, Timeline, Interests }
}
</script>

<style lang="scss"></style>
