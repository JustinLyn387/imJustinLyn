<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>

      <!-- Homepage component -->
      <Homepage class="component"/>

      <!-- About me component -->
      <AboutMe class="component"/>

      <!-- Work experience component -->
      <WorkExperience class="component"/>

      <!-- My projects component -->
      <Projects class="component"/>

      <!-- Lets connect component -->
      <Connect class="component"/>

      <v-footer class="font-weight-medium pa-0" style="justify-content: center" elevation="9" color="#181818">
        <v-row class="footerBar ma-0">
          <v-row class="ma-0">
            <v-col class="footerText" cols="10">
              <strong>Designed by Justin Lyn • Copyright © {{ new Date().getFullYear() }}</strong>
            </v-col>
          </v-row>
        </v-row>
      </v-footer>

    </v-main>
  </v-app>
</template>

<script>

import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Connect from './components/Connect';

export default {
  name: 'App',

  components: {
    Homepage, AboutMe, WorkExperience, Projects, Connect
  },

  data: () => ({
    //
  }),
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ramabhadra&display=swap');

  #contentCol {
    max-width: 1450px;
  }
  .component {
    min-height: 95vh;
    padding: 45px 100px;
  }
  .heading {
    font-family: 'Ramabhadra', sans-serif;
    font-weight: bolder;
    font-size: 40px;
    padding-bottom: 30px;
  }
  .footerBar{
    height: 50px;
  }
  .footerText{
    color: white;
    text-align: center;
    min-width: 100%;
    margin: 0;
  }

</style>