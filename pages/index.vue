<template>
  <v-layout fluid column justify-center align-center>
    <Hero></Hero>
    <br />
    <BusinessCard></BusinessCard>
  </v-layout>
</template>

<script>
import Hero from '@/components/Hero'
import BusinessCard from '@/components/BusinessCard'
export default {
  components: { Hero, BusinessCard }
}
</script>

<style lang="scss"></style>
