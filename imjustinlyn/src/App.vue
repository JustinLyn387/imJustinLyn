<template>
  <v-app>
    <v-app-bar id="appBar" flat color="background" app>
      <v-icon v-if="$vuetify.breakpoint.smAndDown" color="text" size="26" @click="mobileMenu = !mobileMenu"
              style="position: absolute; top: 18px; left: 18px">mdi-menu</v-icon>
      <v-row justify="center" class="align-center">
        <v-flex class="heading logo pb-0 pointer" v-scroll-to="scrollTo('appBar')">iJL</v-flex>
      </v-row>
      <v-icon class="themeToggle" size="26" color="text" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        {{ $vuetify.theme.dark ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
      </v-icon>
    </v-app-bar>
    <!-- Full screen navigation menu for smaller screens -->
    <v-dialog v-model="mobileMenu" fullscreen persistent transition="v-scroll-y-transition">
      <v-container class="menu pt-5">
        <v-row justify="start" class="pl-3">
          <v-btn outlined @click="mobileMenu = !mobileMenu" color="transparent" class="closeBtn">
            <v-icon color="text" size="36" class="mt-8">mdi-close</v-icon>
          </v-btn>
        </v-row>
        <div class="menuRow">
          <v-row v-for="(section, i) in sections" :key="i" justify="center">
            <v-flex class="menuOption my-1" v-scroll-to="scrollTo(section.id)" @click="mobileMenu = !mobileMenu">
              {{ section.title }}
            </v-flex>
          </v-row>
        </div>
      </v-container>
    </v-dialog>
    <!-- Side navigation menu for larger screens -->
    <v-navigation-drawer v-if="$vuetify.breakpoint.mdAndUp" mini-variant permanent app mini-variant-width="85" color="background">
      <v-col class="fill-height d-flex align-center justify-center ma-0">
        <v-list>
          <v-list-item v-for="(section, idx) in sections" :key="idx" class="my-3">
            <v-list-item-icon>
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon v-bind="attrs" v-on="on" class="pointer" size="25" v-scroll-to="scrollTo(section.id)" :color="activeSection === section.title ? 'primary' : '#757575'">
                    {{ section.icon }}
                  </v-icon>
                </template>
                <span class="text-capitalize">{{  section.id }}</span>
              </v-tooltip>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-col>
    </v-navigation-drawer>
    <!-- MAIN CONTENT AREA -->
    <v-main style="background: var(--v-background-base)">
      <svg v-if="$vuetify.breakpoint.mdAndUp" width="50" height="50" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" class="bg" />
        <circle cx="50" cy="50" r="30" pathLength="1" class="progress" />
      </svg>

      <Homepage id="home" class="component relativeClass"/>

      <section class="section"><h1>Projects</h1></section>
      <Projects id="projects" class="component"/>

      <section class="section"><h1>About Me</h1></section>
      <AboutMe id="about" class="component"/>

      <section class="section"><h1>Work Experience</h1></section>
      <WorkExperience id="experience" class="component"/>

      <section class="section"><h1>Connect</h1></section>
      <Connect id="connect" class="component"/>
    </v-main>
    <!-- Website footer -->
    <v-footer class="py-4 px-0" color="background" :style="$vuetify.breakpoint.mdAndUp ? 'padding-left: 85px !important;' : ''">
      <v-col class="my-2">
        <v-row class="px-0"><v-divider class="my-2 px-0"/></v-row>
        <v-row class="mt-7 mx-7 align-center justify-center">
          <p class="text-body-2 mb-0 mr-4">Designed by Justin Lyn
            <v-icon class="px-2" color="primary">mdi-rabbit-variant-outline</v-icon>
            {{ new Date().getFullYear() }}
          </p>
        </v-row>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { inView, animate, scroll } from "motion"

import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Connect from "@/components/Connect.vue";

export default {
  name: 'App',
  components: { Homepage, AboutMe, WorkExperience, Projects, Connect },
  data: () => ({
    mobileMenu: false,
    activeSection: '',
    sections: [
      { id: 'projects', title: 'Projects', icon: 'mdi-xml' },
      { id: 'about', title: 'About Me', icon: 'mdi-account-circle-outline' },
      { id: 'experience', title: 'Work Experience', icon: 'mdi-briefcase-clock-outline' },
      { id: 'connect', title: 'Connect', icon: 'mdi-at' }
    ]
  }),
  mounted() {
    if (this.$vuetify.breakpoint.mdAndUp) scroll(animate('.progress', { strokeDasharray: ['0,1', '1,1'] }));
    inView('.section', ({ target }) => {
      this.activeSection = target.innerText
      const headingAnimation = animate(
        target.querySelector('h1'),
        { opacity: 1, transform: 'none' },
        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      )
      return () => {
        this.activeSection = ''
        headingAnimation.stop()
      }
    })
  },
  methods: {
    scrollTo (section) {
      return { element: '#' + section, offset: -100 }
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ramabhadra&display=swap');

  h1 {
    font-size: 1.75rem;
  }
  section {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    padding-left: min(max(calc(calc(100% - 1200px) / 2), 25px), 12%);
  }
  section h1 {
    display: block;
    transform: translateX(-100px);
    opacity: 0;
  }
  svg {
    z-index: 100;
    position: fixed;
    top: 10px;
    left: 18px;
    transform: rotate(-90deg);
  }
  circle {
    stroke-dashoffset: 0;
    stroke-width: 12%;
    fill: none;
  }

  .container {
    min-width: 100%;
  }
  .contentCol {
    max-width: 1200px;
  }
  .logo {
    font-family: 'Ramabhadra', sans-serif;
    font-weight: bolder;
    font-size: 2.25em;
    text-align: center;
    max-width: 15%;
  }
  .themeToggle {
    position: absolute !important;
    top: 18px;
    right: 18px
  }
  .themeToggle:focus::after {
    opacity: 0 !important;
  }
  .relativeClass {
    position: relative;
  }
  .pointer {
    cursor: pointer;
  }
  .component {
    padding: 50px 20px;
    overflow: hidden;
  }
  .bg {
    stroke: #ababab;
  }
  .progress {
    stroke: var(--v-primary-base);
    stroke-dasharray: 0, 1;
  }

  .menu {
    min-width: 100%;
    min-height: 100vh;
    background: var(--v-background-base);
  }
  .menuOption {
    font-family: 'Varela Round', sans-serif;
    font-size: 30px;
    color: var(--v-text-base);
    font-weight: bold;
  }
  .menuOption:hover {
    color: var(--v-primary-base);
    cursor: pointer;
  }
  .menuRow {
    position: fixed;
    top: 50%;
    left: 50%;
    width: max-content;
    transform: translate(-46%, -50%);
  }

</style>
