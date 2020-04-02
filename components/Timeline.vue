<template>
  <v-container id="timeline">
    <v-timeline align-top :dense="$device.isMobile">
      <!-- 2010 -->
      <div data-aos="slide-left">
        <v-timeline-item large color="purple" fill-dot>
          <template v-slot:icon>
            <i class="devicon-visualstudio-plain"></i>
          </template>
          <template v-slot:opposite>
            <span>2010</span>
          </template>
          <v-card class="elevation-2" color="purple">
            <v-card-title class="headline">Hello World!</v-card-title>
            <v-card-text class="pt-4" :style="'background: ' + themePrimary"
              >Made friends in the Halo 3 modding community who introduced me to
              programming mod tools in Visual Basic and C#.</v-card-text
            >
          </v-card>
        </v-timeline-item>
      </div>
      <!-- 2012 -->
      <div :data-aos="$device.isMobile ? 'slide-left' : 'slide-right'">
        <v-timeline-item large color="#787CB5" fill-dot>
          <template v-slot:icon>
            <i class="devicon-php-plain"></i>
          </template>
          <template v-slot:opposite>
            <span>2012</span>
          </template>
          <v-card class="elevation-2" color="#787CB5">
            <v-card-title class="headline">Reaction Gif DataBase</v-card-title>
            <v-card-text class="pt-4" :style="'background: ' + themePrimary"
              >After learning some basic HTML and CSS I created a gif hosting
              website using PHP and mySQL where users could upload, tag, and
              search various gifs. The upload script would hash and check the
              database for duplicates before storing the gif to reduce duplicate
              uploads.</v-card-text
            >
          </v-card>
        </v-timeline-item>
      </div>
      <!-- 2014 -->
      <div data-aos="slide-left">
        <v-timeline-item large color="#F29111" fill-dot>
          <template v-slot:icon>
            <i class="devicon-mysql-plain"></i>
          </template>
          <template v-slot:opposite>
            <span>2014</span>
          </template>
          <v-card class="elevation-2" color="#F29111">
            <v-card-title class="headline">Class Scheduler</v-card-title>
            <v-card-text class="pt-4" :style="'background: ' + themePrimary"
              >Expanding on this, I developed a web interface for finding ideal
              class schedules for my community college. This project focused
              more heavily on efficient methods of querying and sorting
              data.</v-card-text
            >
          </v-card>
        </v-timeline-item>
      </div>
      <!-- 2016 -->
      <div :data-aos="$device.isMobile ? 'slide-left' : 'slide-right'">
        <v-timeline-item large color="#007396" fill-dot>
          <template v-slot:icon>
            <i class="devicon-java-plain"></i>
          </template>
          <template v-slot:opposite>
            <span>2016</span>
          </template>
          <v-card class="elevation-2" color="#007396">
            <v-card-title class="headline">Learning OOP</v-card-title>
            <v-card-text class="pt-4" :style="'background: ' + themePrimary"
              >Midway through my Computer Science curriculum at Auburn
              University I learned much more about Object Oriented Programming
              and gained exposure to languages from Python down to
              Assembly.</v-card-text
            >
          </v-card>
        </v-timeline-item>
      </div>
      <!-- 2018 -->
      <div data-aos="slide-left">
        <v-timeline-item large color="#68A063" fill-dot>
          <template v-slot:icon>
            <i class="devicon-nodejs-plain"></i>
          </template>
          <template v-slot:opposite>
            <span>2018</span>
          </template>
          <v-card class="elevation-2" color="#68A063">
            <v-card-title class="headline">Web Development</v-card-title>
            <v-card-text class="pt-4" :style="'background: ' + themePrimary"
              >Closer to the end of my college career I became bored with
              creating CLI tools that technically work but are a UX nightmare. I
              started creating small webapps in Node.js and realized the fruit
              of my labor tastes sweeter with a sleek front end on
              top.</v-card-text
            >
          </v-card>
        </v-timeline-item>
      </div>
      <!-- 2019 -->
      <div :data-aos="$device.isMobile ? 'slide-left' : 'slide-right'">
        <v-timeline-item large color="#42b883" fill-dot>
          <template v-slot:icon>
            <i class="devicon-vuejs-plain"></i>
          </template>
          <template v-slot:opposite>
            <span>2019</span>
          </template>
          <v-card class="elevation-2" color="#42b883">
            <v-card-title class="headline">Yellow Card</v-card-title>
            <v-card-text class="pt-4" :style="'background: ' + themePrimary"
              >Before graduation I begain working for a Cryptocurrency exchange
              startup called Yellow Card. There I was introduced to my first
              modern Javascript framework Vue.js. Being a smaller startup
              company, I was given exposure and responsibility over the entire
              stack, allowing me to mature into a full stack
              developer.</v-card-text
            >
          </v-card>
        </v-timeline-item>
      </div>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  computed: {
    themePrimary() {
      return this.$vuetify.theme.dark ? '#1E1E1E' : '#FFFFFF'
    }
  }
}
</script>

<style lang="scss" scoped>
#timeline {
  overflow-x: hidden;
}
.devicon-visualstudio-plain,
.devicon-php-plain,
.devicon-mysql-plain,
.devicon-java-plain,
.devicon-nodejs-plain,
.devicon-vuejs-plain {
  font-size: 35px;
}
</style>
