<template>
  <v-container class="container">
    <v-row justify="center">
      <!-- Main content col sectioned into rows -->
      <v-col class="contentCol">
        <v-row justify="center" align="center" class="py-2">
          <v-col cols="12" class="col-md-4 text-center">
            <img src="../assets/profile.jpg" class="mt-2 profilePic">
          </v-col>
          <v-col cols="12" class="col-md-8 bio px-5 px-md-12">
            <h1 class="name text-center text-md-left">Justin Lyn</h1>
            <p class="font-weight-medium text-center text-md-left primary--text">
              Coder | Designer | Rubik's cube solver | K-Drama watcher
            </p>
            <p>Hey there! I’m Justin, a recent graduate from the University of Toronto, founder of UofT Index, and associate application developer at ADP.</p>
            <p>I enjoy learning new concepts and technologies and building things that people can use and share with others. With my enthusiasm for coding, web development, and problem-solving, I strive to pursue opportunities where I can design and create new ways for people to interact with technology and information.</p>
            <p>Outside the office, you’ll find me solving Rubik’s cubes, bike riding along the lake, and binge-watching the latest K-Dramas.</p>
          </v-col>
        </v-row>
        <v-row class="mx-0 mt-8 mb-4 mx-2 align-center">
          <h2 class="font-weight-regular mr-12">Recent Tech Stack</h2>
          <v-divider/>
        </v-row>

        <v-row class="pt-5 pb-10 mx-2">
          <v-col v-for="(tech, idx) in techStack" :key="idx" class="text-center" cols="4" md="2">
            <v-icon x-large color="text">{{ tech.icon }}</v-icon>
            <p class="text--secondary mt-3">{{ tech.label }}</p>
          </v-col>
        </v-row>

        <v-row class="my-4 mx-2 align-center">
          <h2 class="font-weight-regular mr-12">Interests & Hobbies</h2>
          <v-divider/>
        </v-row>
        <v-row class="pt-5 pb-10 mx-2">
          <v-col class="text-center" cols="12" md="3">• Solving Rubik's cubes</v-col>
          <v-col class="text-center" cols="12" md="3">• Designing new UI/Xs</v-col>
          <v-col class="text-center" cols="12" md="3">• Skiing & Swimming</v-col>
          <v-col class="text-center" cols="12" md="3">• Playing the piano</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutMe',
  data: () => ({
    techStack: [
      { label: 'Vue', icon: 'mdi-vuejs' },
      { label: 'Javascript', icon: 'mdi-language-javascript' },
      { label: 'Jira', icon: 'mdi-jira' },
      { label: 'Python', icon: 'mdi-language-python' },
      { label: 'Nodejs', icon: 'mdi-nodejs' },
      { label: 'SQL Server', icon: 'mdi-database' },
      { label: 'Java', icon: 'mdi-language-java' },
      { label: 'HTML', icon: 'mdi-language-html5' },
      { label: 'Spring', icon: 'mdi-leaf' },
      { label: 'Cypress', icon: 'mdi-alpha-c-circle-outline' },
      { label: 'Github', icon: 'mdi-github' },
      { label: 'Docker', icon: 'mdi-docker' }
    ]
  })
}
</script>

<style scoped>
  .bio {
    max-width: 925px;
  }

  img {
    max-width: 250px;
    height: auto;
    width: auto \9;
    image-orientation: from-image;
    border-radius: 50%;
    border: 2px solid #000000;
  }

</style>
