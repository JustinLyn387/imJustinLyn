<template>
    <v-container class="connectContainer">
        <v-row justify="center"><h1 class="heading" :style="underlineColour">Let's Connect</h1></v-row>

        <!-- Let's connect links and icons -->
        <v-row justify="center" align="center" class="connectRow">
            <v-col id="contentCol">
                <v-row align="center" justify="center">
                    <v-col class="connectCol">
                        <v-icon class="connectIcon">mdi-linkedin</v-icon>
                        <p class="subHead" :style="themeColour">Let's Connect</p>
                        <a href="https://www.linkedin.com/in/justin-lyn-b9626114b/" target="_blank">Linkedin Profile</a>
                    </v-col>
                    <v-col class="connectCol">
                        <v-icon class="connectIcon">mdi-email-outline</v-icon>
                        <p class="subHead" :style="themeColour">Email Me At</p>
                        <a href="mailto:justin.lyn@mail.utoronto.ca">justin.lyn@mail.utoronto.ca</a>
                    </v-col>
                    <v-col class="connectCol">
                        <v-icon class="connectIcon">mdi-facebook</v-icon>
                        <p class="subHead" :style="themeColour">Let's Be Friends</p>
                        <a href="https://www.facebook.com/Justinlyn387/" target="_blank">Facebook Page</a>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    name: 'Connect',
    props: {
        accentColour: String
    },
    computed: {
        themeColour () {
            return { '--accent-colour': this.accentColour }
        },
        underlineColour () {
            return { '--underline-colour': `linear-gradient(${this.accentColour}, transparent) bottom /var(--d, 35%) 4px no-repeat` }
        }
    },
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
        min-height: 20vh;
        padding: 35px 65px 0 65px;
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
        color: var(--accent-colour);
        font-size: 1.25em;
        font-weight: bold;
        padding-top: 10px;
    }

</style>