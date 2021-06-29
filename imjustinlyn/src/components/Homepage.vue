<template>
    <v-container class="homeContainer">
        <section>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>
        <v-row class="homeText">
            <v-col class="py-0 homeColumn">
                <h1 style="font-size: 7em">Justin? WHO?</h1>
                <h2>Hey there! Welcome to my website where you can find out a little bit more about who I am ...</h2>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import anime from 'animejs'

export default {
    name: 'Homepage',
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
    }
}
</script>

<style scoped>
    .homeContainer {
        padding: 0;
        min-width: 100%;
        overflow-y: hidden;
        overflow-x: hidden;
        max-height: 100vh;
        background-color: #FFFFFF;
    }
    section {
        display: grid;
        grid-template-columns: repeat(10, auto);
    }
    div {
        height: 101vh;
        transition: background-color 1s;
        z-index: 5;
    }
    h1, h2 {
        padding-right: 25px;
    }
    h2 {
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

</style>