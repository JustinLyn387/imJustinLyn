<template>
  <v-container class="px-8">
    <v-row justify="center">
      <v-col class="contentCol">
        <v-row v-if="$vuetify.breakpoint.mdAndUp" class="ma-0" justify="end">
          <v-icon @click="mode = 'list'" :color="mode === 'list' ? 'text' : '#757575'">mdi-format-list-text</v-icon>
          <v-icon class="ml-5" @click="mode = 'grid'" :color="mode === 'grid' ? 'text' : '#757575'">mdi-grid-large</v-icon>
        </v-row>
        <!-- Row of project cards -->
        <v-row v-if="mode === 'grid'" class="projectRow pb-md-0" justify="center">
          <v-col cols="12" v-for="(project, i) in projects" :key="i" md="6" lg="4" class="px-6">
            <v-hover v-slot:default="{ hover }" class="text-right hover">
              <v-card class="rounded-lg justify-center d-flex align-center py-6" :color="project.colour" height="265"
                      :ripple="false" flat @click="project.showInfo = !project.showInfo">
                <v-icon class="projectIcon ma-12" size="110" color="#FFFFFF">{{ project.icon }}</v-icon>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="transparent" style="z-index: 1">
                    <v-col cols="10">
                      <v-row><h2>{{ project.name }}</h2></v-row>
                      <v-row align="center" class="mt-3 text-body-2">
                        {{ project.tech }}
                      </v-row>
                    </v-col>
                    <v-col cols="2" class="flex-column text-right pa-0">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn v-bind="attrs" v-on="on" large color="#FFFFFF" outlined :href="project.link" target="_blank" icon>
                            <v-icon color="#FFFFFF">{{  project.btn === 'Visit Website' ? 'mdi-web' : 'mdi-github' }}</v-icon>
                          </v-btn>
                        </template>
                        <span>{{  project.btn }}</span>
                      </v-tooltip>
                    </v-col>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </v-hover>
            <v-row class="ma-2">
              <p class="mb-1 mb-md-4 text-body-1 font-weight-medium">{{ project.name }}</p>
              <v-spacer/>
              <p class="mb-0 text--secondary">{{ project.type }}</p>
            </v-row>
          </v-col>
        </v-row>
        <div v-else class="mb-7">
          <v-row v-for="(project, i) in projects" :key="i" class="projectRow px-6">
            <v-col cols="8" md="5" class="d-flex align-center">
              <v-row class="align-center my-2">
                <div class="rounded" :style="'background-color: ' + project.colour">
                  <v-icon class="projectIcon my-2 my-md-4 mx-3 mx-md-5" size="30" color="#FFFFFF">{{ project.icon }}</v-icon>
                </div>
                <p class="ml-6 ml-md-12 mb-0 text-body-1 font-weight-medium">{{ project.name }}</p>
              </v-row>
            </v-col>
            <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="3" class="d-flex align-center">
              <v-row class="align-center my-2">
                <v-icon size="20">mdi-xml</v-icon>
                <p class="mb-0 ml-3 text--secondary">{{ project.tech }}</p>
              </v-row>
            </v-col>
            <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="2" class="d-flex align-center">
              <v-row class="align-center my-2">
                <v-icon size="20">mdi-tag-outline</v-icon>
                <p class="mb-0 ml-3 text--secondary">{{ project.type }}</p>
              </v-row>
            </v-col>
            <v-col cols="4" md="2" class="d-flex align-center">
              <v-row v-if="$vuetify.breakpoint.mdAndUp" class="align-center my-2">
                <v-icon size="20">{{ project.btn === 'Visit Website' ? 'mdi-web' : 'mdi-github' }}</v-icon>
                <p class="mb-0 ml-3 text--secondary">{{ project.btn === 'Visit Website' ? 'Online' : 'Archived' }}</p>
              </v-row>
              <v-btn v-else color="transparent" class="text-capitalize" :href="project.link" target="_blank" depressed>
                <v-icon size="20">{{ project.btn === 'Visit Website' ? 'mdi-web' : 'mdi-github' }}</v-icon>
                <p class="mb-0 ml-3 mr-1 text--secondary">View</p>
                <v-icon color="#757575" size="12">mdi-open-in-new</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </div>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Projects',
  data: () => ({
    mode: 'grid',
    projects: [
      {
        name: 'UofT Index',
        tech: 'Vue • Python • MongoDB',
        link: 'https://uoftindex.ca',
        type: 'Web App',
        icon: 'mdi-book-open-page-variant',
        btn: 'Visit Website',
        colour: '#004699',
        showInfo: false
      },
      {
        name: 'Cubing Cafe',
        tech: 'Vue • GraphQL • Mongoose',
        link: 'https://thecubingcafe.herokuapp.com/',
        type: 'Group Project',
        icon: 'mdi-cube-scan',
        btn: 'Visit Website',
        colour: 'orange',
        showInfo: false
      },
      {
        name: 'Kijiji Mapper',
        tech: 'Java • Maven • HTML',
        link: 'https://github.com/lynjust2/Kijiji-Crawler-Assignment',
        type: 'Group Project',
        icon: 'mdi-map-marker-multiple-outline',
        btn: 'View Github',
        colour: '#373373',
        showInfo: false
      },
      {
        name: 'imJustinLyn',
        tech: 'Vue • Firebase',
        link: 'https://github.com/lynjust2/imJustinLyn',
        type: 'Side Project',
        icon: 'mdi-card-account-details-outline',
        btn: 'View Github',
        colour: '#1363DF',
        showInfo: false
      },
      {
        name: 'Terminal',
        tech: 'Java',
        link: 'https://github.com/lynjust2/Java-Mock-Terminal',
        type: 'Group Project',
        icon: 'mdi-console',
        btn: 'View Github',
        colour: '#00AD28',
        showInfo: false
      },
      {
        name: 'DFI Chatbot',
        tech: 'Java • Angular • IBM Watson',
        link: 'https://github.com/lynjust2/CSCC01-Chatbot-Project',
        type: 'Group Project',
        icon: 'mdi-chat-processing-outline',
        btn: 'View Github',
        colour: '#DC143C',
        showInfo: false
      }
    ]
  })
}
</script>

<style scoped>
  >>>.theme--light.v-sheet {
    color: transparent;
  }
  >>>.theme--dark.v-sheet {
    color: transparent;
  }
  >>>.v-overlay__content {
    height: 100%;
    width: 100%;
    text-align: left;
    padding: 15px;
    display: flex;
    align-items: flex-end;
  }

  .projectRow {
    padding-top: 10px;
    margin: 0 -24px;
  }

</style>
