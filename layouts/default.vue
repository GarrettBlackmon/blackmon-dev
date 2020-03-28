<template>
  <v-app :dark="setTheme">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      />
      <v-btn text :to="'/'">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-sm-and-down"
        v-for="(item, i) in items"
        :key="i"
        router
        exact
      >
        <v-btn :to="item.to" text class="mx-5">{{ item.title }}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn fab small text @click.stop="goDark = !goDark">
        <v-icon>mdi-moon-waxing-crescent</v-icon>
      </v-btn>
      <v-snackbar right vertical v-model="snackbar" :timeout="2000">
        This website supports Dark Mode!
      </v-snackbar>
    </v-app-bar>
    <v-content>
      <v-container fluid pa-0 ma-0>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      goDark: false,
      snackbar: false,
      items: [
        {
          icon: 'mdi-file-document',
          title: 'Resume',
          to: '/resume'
        },
        {
          icon: 'mdi-folder-heart',
          title: 'Portfolio',
          to: '/portfolio'
        },
        {
          icon: 'mdi-post',
          title: 'Blog',
          to: '/blog'
        }
      ]
    }
  },
  computed: {
    setTheme() {
      if (this.goDark == true) {
        return (this.$vuetify.theme.dark = true)
      } else {
        return (this.$vuetify.theme.dark = false)
      }
    }
  },
  methods: {
    activateSnack() {
      setTimeout(() => (this.snackbar = true), 1000)
    }
  },
  mounted() {
    this.activateSnack()
  }
}
</script>

<style>
/* Vuetify overrides */
.v-snack__wrapper {
  min-width: 0;
  margin-right: 60px !important;
}
.v-snack .v-snack--active .v-snack--bottom .v-snack--right .v-snack--vertical {
  margin-top: 20px !important;
}
</style>
