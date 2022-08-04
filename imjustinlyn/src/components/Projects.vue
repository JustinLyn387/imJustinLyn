<template>
    <v-container class="projectContainer" :style="themeColour">
        <v-row justify="center">
            <v-col id="contentCol">
                <h1 class="heading">My Projects</h1>

                <!-- Row of project cards -->
                <v-row class="pt-12 pb-4" justify="center">
                    <v-col v-for="(project, i) in projects" :key="i" lg="4" md="4" xs="12" class="projCol">
                        <v-card class="projectCard pb-6" elevation="12">
                            <v-col style="height: 100%">
                                <v-row justify="center" class="pa-5" style="height: 55%">
                                    <v-icon class="projectIcon" :color="project.colour">{{ project.icon }}</v-icon>
                                </v-row>
                                <v-row>
                                    <v-col class="projectText">
                                        <h1>{{ project.name }}</h1>
                                        <p>{{ project.tech }}</p>
                                        <p><b>Status: {{project.status }}</b></p>
                                        <v-btn v-bind:color="project.colour" class="viewBtn" v-bind:href="project.link"
                                               target="_blank">{{ project.btn }}</v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-card>
                    </v-col>
                </v-row>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Projects',
    props: {
        accentColour: String
    },
    computed: {
        themeColour () {
            return { '--accent-colour': this.accentColour }
        }
    },
    data: () => ({
        projects: [
            {
              name:'UofT Index',
              tech:'VUE • PYTHON • MONGODB',
              link:'https://uoftindex.ca',
              status:'Online',
              icon:'mdi-book-open-page-variant',
              btn: 'Visit Website',
              colour:'#004699'
            },
            {
              name:'Cubing Cafe',
              tech:'VUE • GRAPHQL • MONGOOSE',
              link:'https://thecubingcafe.herokuapp.com/',
              status:'Online',
              icon:'mdi-cube-scan',
              btn: 'Visit Website',
              colour:'orange'
            },
            {
              name:'imJustinLyn',
              tech:'VUE • FIREBASE',
              link:'https://github.com/JustinLyn387/imJustinLyn',
              status:'Online',
              icon:'mdi-card-account-details-outline',
              btn: 'View on Github',
              colour:'#DC143C'
            },
            {
              name:'DFI Chatbot',
              tech:'JAVA • ANGULAR • IBM WATSON',
              link:'https://github.com/JustinLyn387/CSCC01-Chatbot-Project',
              status:'Complete',
              icon:'mdi-chat-processing-outline',
              btn: 'View on Github',
              colour:'blue'
            },
            {
              name:'Kijiji Mapper',
              tech:'JAVA • MAVEN • HTML',
              link:'https://github.com/JustinLyn387/Kijiji-Crawler-Assignment',
              status:'Complete',
              icon:'mdi-map-marker-multiple-outline',
              btn: 'View on Github',
              colour:'#373373'
            },
            {
              name:'Terminal',
              tech:'JAVA',
              link:'https://github.com/JustinLyn387/Java-Mock-Terminal',
              status:'Complete',
              icon:'mdi-console',
              btn: 'View on Github',
              colour:'#00AD28'
            }
        ]
    })
}
</script>

<style scoped>
    .projectContainer {
        min-width: 100%;
        background-color: var(--accent-colour);
        color: #FFFFFF;
    }
    .heading {
        width: fit-content;
        font-family: 'Ramabhadra', sans-serif;
        font-weight: bolder;
        font-size: 40px;
        padding-bottom: 10px;
        background: linear-gradient(#181818, transparent) bottom /var(--d, 35%) 4px no-repeat;
        transition:0.5s;
    }
    .heading:hover {
        --d: 85%;
    }
    .projCol {
        padding: 10px 20px;
    }
    .projectCard {
        height: 35vh;
        min-width: 285px;
        padding: 10px;
        min-height: 400px;
    }
    .projectIcon {
        font-size: 115px;
    }
    .projectIcon:hover {
        font-size: 145px;
    }
    .viewBtn {
        color: #FFFFFF;
    }
    .projectText {
        text-align: center;
    }

</style>
