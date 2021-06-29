<template>
    <v-container class="connectContainer">
        <v-row justify="center"><h1 class="heading">Let's Connect</h1></v-row>
        <v-row justify="center" align="center" class="connectRow">
            <v-col id="contentCol">
                <v-row align="center" justify="center">
                    <v-col class="connectCol">
                        <v-icon class="connectIcon">mdi-linkedin</v-icon>
                        <p class="subHead">Let's Connect</p>
                        <a href="https://www.linkedin.com/in/justin-lyn-b9626114b/" target="_blank">Linkedin Profile</a>
                    </v-col>
                    <v-col class="connectCol">
                        <v-icon class="connectIcon">mdi-email-outline</v-icon>
                        <p class="subHead">Email Me At</p>
                        <a href="mailto:justin.lyn@mail.utoronto.ca">justin.lyn@mail.utoronto.ca</a>
                    </v-col>
                    <v-col class="connectCol">
                        <v-icon class="connectIcon">mdi-facebook</v-icon>
                        <p class="subHead">Let's Be Friends</p>
                        <a href="https://www.facebook.com/Justinlyn387/" target="_blank">Facebook Page</a>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Connect'
}
</script>

<style scoped>
    .v-application a {
        color: #FFFFFF;
        font-weight: bold;
        font-size: 0.85em;
    }
    .connectContainer {
        min-width: 100%;
        background-color: #121212;
        color: #FFFFFF;
        padding-bottom: 25px;
    }
    .connectRow {
        min-height: 30vh;
    }
    .connectCol {
        text-align: center;
        min-width: 185px;
    }
    .connectIcon {
        color: #FFFFFF;
        font-size: 55px;
    }
    .subHead {
        color: #DC143C;
        font-size: 1.25em;
        font-weight: bold;
        padding-top: 10px;
    }

</style>