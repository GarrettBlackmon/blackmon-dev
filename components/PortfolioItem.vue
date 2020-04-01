<template>
  <v-card hover :href="link" class="mx-auto" max-width="400" width="100%">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="require('@/assets/images/' + image)"
    >
      <v-card-title :class="{ light: light }">{{ title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{ subtitle }}</v-card-subtitle>

    <v-card-text class="text--primary">
      {{ content }}
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text :href="link">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    content: String,
    image: String,
    link: String,
    light: Boolean
  }
}
</script>

<style scoped>
.light {
  color: black;
}
</style>
