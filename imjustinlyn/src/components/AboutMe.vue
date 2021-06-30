<template>
    <v-container class="aboutContainer">
        <v-row justify="center">

            <!-- Main content col sectioned into rows -->
            <v-col id="contentCol">
                <h1 class="heading" :style="underlineColour">About Me</h1>
                <v-col>
                    <v-row class="pt-10">
                        <v-col style="text-align: center">
                            <h1 class="name" :style="themeColour">Justin Lyn</h1>
                            <h3>Computer Science Student</h3>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center" class="pt-10">
                        <v-col cols="4" class="fullCol px-5">
                            <vue-diagonal :deg="2" :background="this.accentColour" class="picBack2"/>
                            <vue-diagonal :deg="-3" background="#181818" class="picBack1">
                                <img src="../assets/profilePic.jpeg" class="mt-2">
                            </vue-diagonal>
                            <vue-diagonal :deg="3" :background="this.accentColour"  class="picBack2"/>
                        </v-col>
                        <v-col class="bio px-12">
                            <p class="mb-0"><b>I code, design, collaborate, and solve problems.</b> I love learning new concepts and technologies, and
                            creating things that other people can use and share with others.<br><br>
                            My computer science career started back when I was in grade 11 and since attending the University of Toronto
                            in the fall of 2017, I have been narrowing down what path I want to pursue in the world of computer science.
                            I chose to study computer science after watching CSI Cyber and seeing how powerful technology and computers
                            can be and what they are capable of doing. Now in my 3rd year of studies, I’ve gained knowledge in various
                            concepts such as, design patterns, databases, data structures, software life cycles, and the design and
                            operation of digital computers.</p>
                        </v-col>
                    </v-row>
                    <v-row class="pt-12"><h4 :style="themeColour">•</h4><h2>Skills</h2></v-row>
                    <v-row class="pt-5 pb-10">
                        <v-col class="fullCol">
                            <h3>VUE</h3>
                            <v-progress-linear value="88" height="8" rounded color="white"></v-progress-linear>
                            <h3 class="pt-5">PYTHON</h3>
                            <v-progress-linear value="85" height="8" rounded color="white"></v-progress-linear>
                        </v-col>
                        <v-col class="fullCol">
                            <h3>MYSQL</h3>
                            <v-progress-linear value="85" height="8" rounded color="white"></v-progress-linear>
                            <h3 class="pt-5">SSIS & SSRS</h3>
                            <v-progress-linear value="80" height="8" rounded color="white"></v-progress-linear>
                        </v-col>
                        <v-col class="fullCol">
                            <h3>JAVA</h3>
                            <v-progress-linear value="74" height="8" rounded color="white"></v-progress-linear>
                            <h3 class="pt-5">C/C++</h3>
                            <v-progress-linear value="65" height="8" rounded color="white"></v-progress-linear>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="pt-8">
                        <v-btn :color="this.accentColour" outlined large href="/Resume.pdf" target="_blank">View My Resume</v-btn>
                    </v-row>
                </v-col>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'AboutMe',
    props: {
        accentColour: String
    },
    computed: {
        themeColour () {
            return { '--accent-colour': this.accentColour }
        },
        underlineColour () {
            console.log(`${this.headingUnderline}`)
            return { '--underline-colour': `linear-gradient(${this.accentColour}, transparent) bottom /var(--d, 35%) 4px no-repeat` }
        }
    },
}
</script>

<style scoped>
    p {
        font-size: 1.1em;
    }
    h4 {
        color: var(--accent-colour);
        font-size: 1.65em;
        padding-right: 10px;
    }
    .bio {
        max-width: 925px;
        min-width: 450px;
    }
    .name {
        color: var(--accent-colour);
        font-size: 2.5em;
    }
    .aboutContainer {
        min-width: 100%;
        z-index: 10;
        background-color: #121212;
        color: #FFFFFF;
    }
    .fullCol {
        min-width: 335px;
    }
    .picBack1{
        padding: 15px;
        z-index: 1;
    }
    .picBack2{
        height: 2.3vh;
    }
    img {
        max-width: 100%;
        height: auto;
        width: auto\9;
        image-orientation: from-image;
    }

</style>