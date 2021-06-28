<template>
  <v-app>
    <v-main>

      <v-btn v-bind:style="menuBtn" @click="showMenu = !showMenu" class="menuBtn" outlined><v-icon>mdi-menu</v-icon></v-btn>

      <v-dialog v-model="showMenu" fullscreen persistent transition="v-scroll-y-transition">
        <v-container class="menu pt-6">
          <v-row justify="end" class="pr-4">
            <v-btn outlined @click="showMenu = !showMenu" color="white" class="closeBtn"><v-icon>mdi-close</v-icon></v-btn>
          </v-row>
          <v-row class="menuRow">
            <v-row>
              <v-col>
                <v-row v-for="(option, i) in sidePanel" :key="i" justify="center">
                  <v-flex class="menuOption" v-scroll-to="scrollTo(option.value)" @click="showMenu = !showMenu">{{ option.label }}</v-flex>
                </v-row>
              </v-col>
            </v-row>
          </v-row>
        </v-container>
      </v-dialog>

      <v-row>
        <v-col v-bind:style="sideMenuStyle" cols="2" style="height: 101vh; background-color: #181818; color: white">
          <v-row justify="center" class="pt-12">
            <v-flex class="heading logo" v-scroll-to="scrollTo('home')">iJL</v-flex>
          </v-row>
          <v-row>
            <v-col style="text-align: right; padding: 60% 25px 0 0">
              <v-flex v-for="(item, i) in sidePanel" :key="i" class="sideOptions" v-scroll-to="scrollTo(item.value)">{{ item.label }}</v-flex>
            </v-col>
          </v-row>
          <strong style="position: absolute; bottom: 15px; padding-left: 20px; font-size: 0.65vw;">Designed by Justin Lyn • Copyright © {{ new Date().getFullYear() }}</strong>
        </v-col>

        <v-col id="contentArea" :cols="mainColumns" style="height: 101vh; overflow-y: auto" class="pl-0">
          <!-- Homepage component -->
          <Homepage id="home" class="component" style="position: relative"/>
          <!-- About me component -->
          <AboutMe id="about" class="component"/>
          <!-- Work experience component -->
          <WorkExperience id="experience" class="component"/>
          <!-- My projects component -->
          <Projects id="projects" class="component"/>
          <!-- Lets connect component -->
          <Connect id="connect" class="subComponent"/>
        </v-col>
      </v-row>


      <v-footer v-bind:style="menuBtn" class="font-weight-medium pa-0" style="justify-content: center" elevation="9" color="#181818">
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
    showMenu: false,
    sideMenuStyle: 'display: block',
    menuBtn: 'display: none',
    mainColumns: 10,
    sidePanel: [
      { label: 'about me', value: 'about' },
      { label: 'work experience', value: 'experience' },
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
  methods: {
    getWindowWidth() {
      if (document.documentElement.clientWidth < 1300) {
        this.sideMenuStyle = 'display: none'
        this.menuBtn = 'display: block'
      } else {
        this.sideMenuStyle = 'display: block'
        this.menuBtn = 'display: none'
      }
      this.mainColumns = document.documentElement.clientWidth < 1300 ? 12 : 10;
    },
    scrollTo (section) {
      return { element: '#' + section, container: '#contentArea', offset: -12 }
    },
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
  .sideOptions {
    display: block;
    font-size: 1.5em;
    font-weight: bold;
    padding-bottom: 10px;
  }
  .sideOptions:hover {
    color: #DC143C;
    cursor: pointer;
  }
  .component {
    min-height: 101vh;
    padding: 65px;
  }
  .subComponent {
    min-height: 45vh;
    padding: 45px 65px;
  }
  .heading {
    width: fit-content;
    font-family: 'Ramabhadra', sans-serif;
    font-weight: bolder;
    font-size: 40px;
    padding-bottom: 10px;
    background: linear-gradient(#DC143C, transparent) bottom /var(--d, 35%) 4px no-repeat;
    transition:0.5s;
  }
  .heading:hover {
    --d: 85%;
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
  .menu{
    min-width: 100%;
    min-height: 102vh;
    background-color: #181818;
  }
  .menuBtn {
    position: absolute;
    margin: 25px;
    z-index: 6;
  }
  .closeBtn {
    font-size: xx-large;
    color: #FFFFFF;
    margin: 25px;
  }
  .menuOption{
    font-family: 'Varela Round', sans-serif;
    font-size: 30px;
    color: #FFFFFF;
    font-weight: bold;
  }
  .menuOption:hover{
    font-family: 'Varela Round', sans-serif;
    color: #DC143C;
    cursor: pointer;
  }
  .menuRow{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-46%, -50%);
  }

</style>