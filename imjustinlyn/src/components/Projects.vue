<template>
    <v-container class="projectContainer">
        <v-row justify="center">
            <v-col id="contentCol">
                <h1 class="heading">My Projects</h1>
                <v-row class="pt-12">
                    <v-col class="fullCol">
                        <v-row style="min-height: 32vh">
                            <v-col>
                                <v-card color="orange" class="projectCard">
                                    <p class="pt-4 pl-4 mb-0">VUE • GRAPHQL • EXPRESS • MONGOOSE</p>
                                    <h1 class="pl-4">Cubing Cafe</h1>
                                    <v-img class="projectImg" src="../assets/cubingcafe.png">
                                        <v-btn class="viewBtn" href="https://github.com/No-Way-Jose/CubingCafe" target="_blank" color="#6495ED">View on Github</v-btn>
                                    </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row style="min-height: 42vh">
                            <v-col class="halfCol">
                                <v-card color="red" class="projectCard">
                                    <p class="projectText pt-4 pl-4 mb-0">JAVA • MAVEN • HTML</p>
                                    <h1 class="projectText pl-4">Kijiji Mapper</h1>
                                    <v-img class="projectImg" src="../assets/kijijiCrawler.jpeg">

                                    </v-img>
                                    <v-btn class="viewBtn" href="https://github.com/JustinLyn387/Kijiji-Crawler-Assignment" target="_blank">View on Github</v-btn>
                                </v-card>
                            </v-col>
                            <v-col class="halfCol">
                                <v-card color="blue" class="projectCard">
                                    <p>VUE • PYTHON • SQL</p>
                                    <h1>UTSC Course Tree</h1>
                                    <v-btn class="viewBtn" href="https://github.com/JustinLyn387/utsc-coursetree" target="_blank">View on Github</v-btn>
                                </v-card>
                            </v-col>

                        </v-row>
                    </v-col>
                    <v-col class="fullCol">
                        <v-row style="min-height: 42vh">
                            <v-col class="halfCol">
                                <v-card color="pink" class="projectCard">
                                    <p class="projectText pt-4 pl-4 mb-0">JAVA • ANGULAR • IBM WATSON</p>
                                    <h1 class="projectText pl-4">DFI Chatbot</h1>
                                    <v-img class="projectImg" src="../assets/chatbot.jpeg">
                                        <v-btn class="viewBtn" href="https://github.com/JustinLyn387/CSCC01-Chatbot-Project" target="_blank">View on Github</v-btn>
                                    </v-img>
                                </v-card>
                            </v-col>
                            <v-col class="halfCol">
                                <v-card color="green" class="projectCard">
                                    <p class="projectText pt-4 pl-4 mb-0">JAVA</p>
                                    <h1 class="projectText pl-4" >Terminal</h1>
                                    <v-img class="projectImg" src="../assets/terminal.jpeg">
                                        <v-btn class="viewBtn" href="https://github.com/JustinLyn387/Java-Mock-Terminal" target="_blank">View on Github</v-btn>
                                    </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row style="min-height: 32vh">
                            <v-col>
                                <v-card color="purple" class="projectCard">
                                    <p class="projectText pt-4 pl-4 mb-0">VUE • PYTHON • NoSQL</p>
                                    <h1 class="projectText pl-4">WatchedBox</h1>
                                    <v-img class="projectImg" src="../assets/watchedbox.png">
                                        <v-btn class="viewBtn" href="https://github.com/JustinLyn387/WatchedBox" target="_blank">View on Github</v-btn>
                                    </v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Projects'
}
</script>

<style scoped>
    .projectContainer {
        min-width: 100%;
        background-color: #121212;
        color: #FFFFFF;
    }
    .projectCard {
        height: 100%;
        width: 100%;
    }
    .fullCol {
        min-width: 385px;
    }
    .halfCol {
        min-width: 225px;
    }
    .viewBtn {
        position: absolute;
        bottom: 20px;
        margin-left: 20px;
    }
    .projectImg {
        height: 70%;
    }
    .projectText {
        color: #FFFFFF;
        font-weight: bold;
    }

</style>