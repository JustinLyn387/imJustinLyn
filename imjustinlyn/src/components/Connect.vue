<template>
  <v-container class="container">
    <!-- Let's connect links and icons -->
    <v-row justify="center" align="center" class="connectRow">
      <v-col class="contentCol">
        <v-row align="center" justify="center">
          <v-col class="connectCol">
            <v-btn href="https://www.linkedin.com/in/justin-lyn/" target="_blank" icon>
              <v-icon size="55" color="text">mdi-linkedin</v-icon>
            </v-btn>
            <p class="pt-5 text--secondary">Let's Connect</p>
          </v-col>
          <v-col class="connectCol">
            <v-btn href="mailto:lyn.justin@outlook.com" icon>
              <v-icon size="55" color="text">mdi-email-outline</v-icon>
            </v-btn>
            <p class="pt-5 text--secondary">Email Me At</p>
          </v-col>
          <v-col class="connectCol">
            <v-btn href="https://www.facebook.com/Justinlyn387/" target="_blank" icon>
              <v-icon size="55" color="text">mdi-facebook</v-icon>
            </v-btn>
            <p class="pt-5 text--secondary">Let's Be Friends</p>
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
  .connectRow {
    min-height: 20vh;
    padding: 35px 65px 0 65px;
  }
  .connectCol {
    text-align: center;
    min-width: 185px;
  }

</style>
