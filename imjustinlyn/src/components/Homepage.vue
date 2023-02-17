<template>
  <v-container class="homeContainer">
    <!-- Main homepage section for content -->
    <span v-if="$vuetify.breakpoint.lgAndUp">
      <div class="cube1"/>
      <div class="cube2"/>
      <div class="cube3"/>
    </span>

    <v-row class="homeText">
      <v-col class="py-0 homeColumn">
        <p class="text-h1 font-weight-bold">Justin? <strong class="primary--text">WHO?</strong></p>
        <p class="text-h6 text-sm-h5">Hey there! Welcome to my website where you can find out a little bit more about who I am</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Homepage'
}
</script>

<style scoped>
  h1 {
    padding-right: 25px;
    font-size: 7em
  }

  .homeContainer {
    padding: 0;
    height: 100vh;
    min-width: 100%;
    overflow-x: hidden;
    margin: 0;
  }
  .text-sm-h5 {
    padding-right: 25px;
    max-width: 600px;
  }
  .homeText {
    left: min(max(calc(calc(100% - 1200px) / 2), 25px), 12%);
    position: absolute;
    bottom: 25%;
    height: fit-content;
  }
  .homeColumn {
    height: fit-content;
  }
  .cube1 {
    height: 40vh;
    width: 40vh;
    top: 15%;
    right: 22%;
    position: absolute;
    background: var(--v-background-base);
    border: 3px solid var(--v-text-base);
  }
  .cube2 {
    height: 20vh;
    width: 20vh;
    top: 30%;
    right: 15%;
    position: absolute;
    background: var(--v-text-base);
  }
  .cube3 {
    height: 30vh;
    width: 30vh;
    top: 45%;
    right: 17%;
    position: absolute;
    background: transparent;
    border: 10px solid var(--v-primary-base);
  }

</style>
