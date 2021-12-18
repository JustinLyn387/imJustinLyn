<template>
    <v-container class="aboutContainer">
        <v-row justify="center">

            <!-- Main content col sectioned into rows -->
            <v-col id="contentCol">
                <h1 class="heading" :style="underlineColour">About Me</h1>
                <v-col>
                    <v-row class="pt-10">
                        <v-col class="text-center pb-5">
                            <h1 class="name" :style="themeColour">Justin Lyn</h1>
                            <h3>Computer Science Student</h3>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center" class="py-2">
                        <v-col cols="4" class="fullCol justify-center shrink pb-8">
                          <img src="../assets/profilePic.jpg" class="mt-2 profilePic" :style="themeColour">
                        </v-col>
                        <v-col class="bio px-12 grow">
                            <p><b>I code, design, collaborate, and solve problems.</b> I love learning
                                new concepts and technologies, and creating things that other people can use and
                                share with others.</p>
                            <p>My computer science career started back when I was in grade 11, and since attending
                                the University of Toronto in the fall of 2017, I have been narrowing down what path
                                I want to pursue in the world of computer science. Now entering my final semester,
                                the last five years of my educational career have allowed me to learn and experience
                                various aspects and pathways related to the field. Such experiences and knowledge
                                include but are not limited to web development, database management, software life
                                cycles, management, and prototyping.</p>
                        </v-col>
                    </v-row>
                    <v-row class="pt-8"><h4 :style="themeColour">•</h4><h2>Skills</h2></v-row>
                    <v-row class="pt-5 pb-10">
                        <v-col cols="12" sm="4" v-for="(skill, idx) in skills" :key="idx">
                            <h3 class="pb-2">{{ skill.label }}</h3>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-progress-linear :value="skill.value" height="8" rounded color="white" v-bind="attrs" v-on="on"/>
                                </template>
                                <span>{{ skill.value }}/100</span>
                            </v-tooltip>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="pt-4">
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
    data: () => ({
       skills: [
           { label: 'VUE', value: 85 },
           { label: 'MYSQL', value: 83 },
           { label: 'JAVA', value: 73 },
           { label: 'PYTHON', value: 80 },
           { label: 'ETL PROCESS', value: 88 },
           { label: 'C/C++', value: 65 }
       ]
    }),
    computed: {
        themeColour () {
            return { '--accent-colour': this.accentColour }
        },
        underlineColour () {
            return { '--underline-colour': `linear-gradient(${this.accentColour}, transparent) bottom /var(--d, 35%) 4px no-repeat` }
        }
    }
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
        min-width: 290px;
        text-align: center;
    }
    img {
        max-width: 250px;
        height: auto;
        width: auto\9;
        image-orientation: from-image;
        border-radius: 50%;
        border: 5px solid;
        border-color: var(--accent-colour);
    }

</style>