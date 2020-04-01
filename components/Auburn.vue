<template>
  <v-container fluid pa-0 text-xs-center>
    <div class="img-container">
      <img class="graduation-photo" src="@/assets/images/auburn.jpg" alt />
      <div class="pa-2">
        <h1>Auburn University</h1>
        <h4>Bachelor's of Computer Science</h4>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.graduation-photo {
  width: 100%;
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
}
.img-container {
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 34px 32px -4px rgba(0, 0, 0, 0.2);
}
h4 {
  color: grey;
}
</style>
