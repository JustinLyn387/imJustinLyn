<template>
  <v-app>
    <v-main>
      <v-row class="mb-0 mx-0">

        <!-- Side navigation menu for larger resolution screens-->
        <v-col v-bind:style="fullScreenMenu" cols="2" class="fullScreenMenu">
          <v-row justify="center" class="pt-12">
            <v-flex class="heading logo" :style="underlineColour" v-scroll-to="scrollTo('home')">iJL</v-flex>
          </v-row>
          <v-row>
            <v-col class="fullScreenMenuCol">
              <v-flex v-for="(item, i) in sidePanel" :key="i" class="sideOptions" :style="themeColour" v-scroll-to="scrollTo(item.value)">{{ item.label }}</v-flex>
            </v-col>
          </v-row>
          <v-row justify="center" class="colourBtn">
            <v-icon :color="accentColour" @click="showColours = !showColours">mdi-zodiac-gemini</v-icon>
          </v-row>
          <strong class="credits">Designed by Justin Lyn • Copyright © {{ new Date().getFullYear() }}</strong>
        </v-col>

        <v-dialog v-model="showColours" fullscreen persistent transition="v-scroll-y-transition">
          <v-container class="colourScreen pt-5">
            <v-row justify="start" class="pl-3">
              <v-btn outlined @click="updateAccentColour" color="#FFFFFF" class="closeBtn"><v-icon>mdi-close</v-icon></v-btn>
            </v-row>
            <v-row class="colourRow mt-0">
              <v-color-picker class="ma-2" show-swatches dark mode="hexa" dot-size="15" width="500" canvas-height="400" hide-mode-switch v-model="newColour"></v-color-picker>
            </v-row>
          </v-container>
        </v-dialog>

        <!-- Main content area -->
        <v-col id="contentArea" :cols="mainColumns" class="pl-0">
          <!-- Homepage component -->
          <Homepage id="home" class="component relativeClass" :menuStyle="dynamicStyle" :menuOptions="sidePanel" :accentColour="accentColour"/>
          <!-- About me component -->
          <AboutMe id="about" class="component" :aboutColumn="aboutColumn" :accentColour="accentColour"/>
          <!-- Work experience component -->
          <WorkExperience id="experience" class="component" :accentColour="accentColour"/>
          <!-- Education component -->
          <Education id="education" class="component" :resolution="resolution" :accentColour="accentColour"/>
          <!-- My projects component -->
          <Projects id="projects" class="component" :accentColour="accentColour"/>
          <!-- Lets connect component -->
          <Connect id="connect" class="subComponent" :footerStyle="dynamicStyle" :accentColour="accentColour"/>
        </v-col>
      </v-row>

    </v-main>
  </v-app>
</template>

<script>

import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Connect from './components/Connect';

export default {
  name: 'App',
  components: {
    Homepage, AboutMe, WorkExperience, Education, Projects, Connect
  },
  data: () => ({
    accentColour: '#DC143C',
    newColour: '#DC143C',
    headingUnderline: `linear-gradient(#DC143C, transparent) bottom /var(--d, 35%) 4px no-repeat`,
    fullScreenMenu: 'display: block',
    dynamicStyle: 'display: none',
    resolution: 0,
    mainColumns: 10,
    aboutColumn: 8,
    showColours: false,
    sidePanel: [
      { label: 'about me', value: 'about' },
      { label: 'work experience', value: 'experience' },
      { label: 'education', value: 'education' },
      { label: 'projects', value: 'projects' },
      { label: 'connect', value: 'connect' }
    ]
  }),
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      this.getWindowWidth()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  },
  computed: {
    themeColour () {
      return { '--accent-colour': this.accentColour }
    },
    underlineColour () {
      return { '--underline-colour': `linear-gradient(${this.accentColour}, transparent) bottom /var(--d, 35%) 4px no-repeat` }
    }
  },
  methods: {
    getWindowWidth() {
      this.resolution = document.documentElement.clientWidth
      if (this.resolution < 1300) {
        this.fullScreenMenu = 'display: none'
        this.dynamicStyle = 'display: block'
        this.mainColumns = 12
        this.aboutColumn = 11
      } else {
        this.fullScreenMenu = 'display: block'
        this.dynamicStyle = 'display: none'
        this.mainColumns = 10
        this.aboutColumn = 8
      }
    },
    scrollTo (section) {
      return { element: '#' + section, container: '#contentArea', offset: -12 }
    },
    updateAccentColour () {
      this.showColours = !this.showColours
      this.headingUnderline = 'linear-gradient(' + this.newColour + ', transparent) bottom /var(--d, 35%) 4px no-repeat'
      this.accentColour = this.newColour
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ramabhadra&display=swap');

  #contentCol {
    max-width: 1298px;
  }
  #contentArea {
    padding: 0;
    margin: 0;
    height: 101vh;
    overflow-y: auto;
    overflow-x: hidden
  }
  .logo {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    max-width: 15%;
  }
  .logo:hover {
    cursor: pointer;
  }
  .relativeClass {
    position: relative;
  }
  .sideOptions {
    display: block;
    font-size: 1.5em;
    font-weight: bold;
    padding-bottom: 10px;
  }
  .sideOptions:hover {
    color: var(--accent-colour);
    cursor: pointer;
  }
  .fullScreenMenu {
    height: 101vh;
    background-color: #181818;
    color: #FFFFFF
  }
  .fullScreenMenuCol {
    text-align: right;
    padding: 60% 25px 0 0;
  }
  .component {
    padding: 8vh 55px;
  }
  .subComponent {
    min-height: 45vh;
    padding: 8vh 0 0 0;
  }
  .heading {
    width: fit-content;
    font-family: 'Ramabhadra', sans-serif;
    font-weight: bolder;
    font-size: 2.25em;
    padding-bottom: 10px;
    background: var(--underline-colour);
    transition: 0.5s;
  }
  .heading:hover {
    --d: 85%;
  }
  .credits {
    position: absolute;
    bottom: 15px;
    padding-left: 1.5%;
    font-size: 0.65vw;
  }
  .colourRow{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-46%, -50%);
  }
  .colourScreen {
    min-width: 100%;
    min-height: 100vh;
    background-color: #181818;
  }
  .colourBtn {
    position: absolute;
    bottom: 65px;
    padding-left: 7.5%;
  }
  .closeBtn {
    font-size: xx-large;
    color: #FFFFFF;
    margin: 25px;
  }
  .theme--dark.v-color-picker {
    background-color: #181818;
  }

</style>