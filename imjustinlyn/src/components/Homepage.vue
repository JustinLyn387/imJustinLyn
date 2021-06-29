<template>
    <v-container class="homeContainer">

        <!-- Full screen navigation menu for smaller screens -->
        <v-btn v-bind:style="menuStyle" @click="showMenu = !showMenu" class="menuBtn" outlined><v-icon>mdi-menu</v-icon></v-btn>
        <v-dialog v-model="showMenu" fullscreen persistent transition="v-scroll-y-transition">
            <v-container class="menu pt-5">
                <v-row justify="start" class="pl-3">
                    <v-btn outlined @click="showMenu = !showMenu" color="white" class="closeBtn"><v-icon>mdi-close</v-icon></v-btn>
                </v-row>
                <v-row class="menuRow">
                    <v-row>
                        <v-col>
                            <v-row v-for="(option, i) in menuOptions" :key="i" justify="center">
                                <v-flex class="menuOption" v-scroll-to="scrollTo(option.value)" @click="showMenu = !showMenu">{{ option.label }}</v-flex>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-row>
            </v-container>
        </v-dialog>

        <!-- Main homepage section for content -->
        <section>
            <div class="panel" v-for="i in 10" :key="i"></div>
        </section>
        <v-row class="homeText">
            <v-col class="py-0 homeColumn">
                <h1>Justin? WHO?</h1>
                <h2>Hey there! Welcome to my website where you can find out a little bit more about who I am ...</h2>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import anime from 'animejs'

export default {
    name: 'Homepage',
    data: () => ({
        showMenu: false,
    }),
    props: {
        menuStyle: String,
        menuOptions: Array
    },
    mounted () {
        const tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
        })
        tl.add({
            targets: 'section div',
            width: '100%',
            backgroundColor: '#DC143C',
            delay: anime.stagger(100) // increase delay by 100ms for each elements.
        })
            .add({
                targets: 'section div',
                width: '90%',
                backgroundColor: '#DC143C'
            })
            .add({
                targets: '.homeText',
                opacity: 1,
                duration: 4000
            }, '-=500')
        anime({
            targets: 'section',
            scaleY: '2.5',
            scaleX: '2.5',
            translateX: '52%',
            rotate: '45deg',
            duration: 5000,
            delay: 2000

        })
    },
    methods: {
        scrollTo (section) {
            return { element: '#' + section, container: '#contentArea', offset: -12 }
        }
    }
}
</script>

<style scoped>
    .homeContainer {
        padding: 0;
        max-width: 100%;
        overflow-y: hidden;
        overflow-x: hidden;
        height: 100vh;
        background-color: #FFFFFF;
    }
    section {
        display: grid;
        grid-template-columns: repeat(10, auto);
    }
    .panel {
        height: 101vh;
        transition: background-color 1s;
        z-index: 5;
    }
    h1 {
        padding-right: 25px;
        font-size: 7em
    }
    h2 {
        padding-right: 25px;
        max-width: 600px;
    }
    .homeText {
        left: 12%;
        opacity: 0;
        position: absolute;
        color: #181818;
        bottom: 20vh;
        height: fit-content;
    }
    .homeColumn{
        height: fit-content;
    }
    .menu{
        min-width: 100%;
        min-height: 102vh;
        background-color: #181818;
    }
    .menuBtn {
        position: absolute;
        margin: 40px 0 0 35px;
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