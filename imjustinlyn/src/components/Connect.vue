<template>
    <v-container class="connectContainer">
        <v-row justify="center" class="connectRow">
            <v-col id="contentCol">
                <h1 class="heading mb-12">Let's Connect</h1>
                <v-row class="pt-12">
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
    }
    .connectRow {
        min-height: 100%;
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