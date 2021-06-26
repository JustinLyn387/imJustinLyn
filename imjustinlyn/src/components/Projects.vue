<template>
    <v-container id="projectContainer">
        <v-row justify="center">
            <v-col id="contentCol">
                <h1 class="heading">My Projects</h1>
                <v-row>
                    <v-col>
                        <v-row style="min-height: 32vh">
                            <v-col>
                                <v-card color="red" class="projectCard">
                                    <h1>Test</h1>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row style="min-height: 42vh">
                            <v-col>
                                <v-card color="orange" class="projectCard">
                                    <h1>Test</h1>
                                </v-card>
                            </v-col>
                            <v-col>
                                <v-card color="blue" class="projectCard">
                                    <h1>Test</h1>
                                </v-card>
                            </v-col>

                        </v-row>
                    </v-col>
                    <v-col>
                        <v-row style="min-height: 42vh">
                            <v-col>
                                <v-card color="pink" class="projectCard">
                                    <h1>Test</h1>
                                </v-card>
                            </v-col>
                            <v-col>
                                <v-card color="green" class="projectCard">
                                    <h1>Test</h1>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row style="min-height: 32vh">
                            <v-col>
                                <v-card color="purple" class="projectCard">
                                    <h1>Test</h1>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Projects'
}
</script>

<style scoped>
    #projectContainer {
        min-width: 100%;
        background-color: #FFFFFF;
    }
    .projectCard {
        height: 100%;
        width: 100%;
    }

</style>