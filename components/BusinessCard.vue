<template>
  <v-container id="BusinessCard" fluid>
    <v-layout fluid justify-center wrap>
      <v-flex xs12 sm10 md8 lg6>
        <v-card raised class="info-card pa-5">
          <v-layout fluid wrap>
            <v-flex xs12 md6 order-xs2 text-sm-center text-md-left>
              <h1>Garrett Blackmon</h1>
              <h3>Full Stack Developer</h3>
              <br />
              <p>
                <v-icon>mdi-email</v-icon>
                <a href="mailto:someone@yoursite.com">garrett@blackmon.dev</a>
              </p>
              <p>
                <v-icon>mdi-phone</v-icon>

                <a href="tel:+13347149838">+1 (334) 714-9838</a>
              </p>
              <p>
                <v-icon>mdi-map-marker</v-icon>Birmingham, AL 35022
              </p>

              <p class="socials ml-1">
                <a href="https://github.com/GarrettBlackmon">
                  <v-icon>mdi-github</v-icon>
                </a>
                <a href="https://www.linkedin.com/in/garrettblackmon">
                  <v-icon>mdi-linkedin</v-icon>
                </a>
                <a href="https://twitter.com/GarrettBlackmon">
                  <v-icon>mdi-twitter</v-icon>
                </a>
                <a href="https://www.reddit.com/user/GarrettBlackmon/">
                  <v-icon>mdi-reddit</v-icon>
                </a>
              </p>
            </v-flex>
            <v-flex xs12 md6 order-md2>
              <div class="headshot-container text-xs-center">
                <img
                  class="headshot"
                  src="@/assets/images/headshot.jpeg"
                  alt="Headshot of Garrett Blackmon"
                />
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 42px;
}
h3 {
  color: grey;
}
.headshot-container {
  width: 310px;
  margin: auto;
}
.headshot {
  width: 100%;
  max-width: 310px;
  border-radius: 100%;
  border: 3px solid lightgray;
  box-shadow: 10px 10px 31px -13px rgba(0, 0, 0, 0.75);
}

.socials {
  a {
    text-decoration: none;
  }
  a:hover .v-icon {
    transform: translateY(-2px);
  }
}
.v-icon {
  padding: 5px;
}
</style>

<style lang="scss">
#BusinessCard {
}
</style>