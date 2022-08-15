<template>
    <v-container class="workContainer">
        <v-row justify="center">
            <v-col id="contentCol" :class="(smallScreen) ? 'pb-0 px-0' : 'pb-0'">
                <v-row justify="center" class="pb-8">
                    <h1 class="heading" :style="underlineColour">Work Experience</h1>
                </v-row>

                <!-- Work experience timeline -->
                <v-timeline v-bind:dense="smallScreen" class="timeline">
                    <v-timeline-item v-for="(job, i) in experience" :key="i" :class="!smallScreen ? 'py-4' : ''" :icon="job.icon" :color="job.colour" fill-dot>
                        <template v-slot:opposite>
                            <v-col>
                                <p :class="`headline font-weight-bold ${job.colour}--text`" class="mb-0">{{ job.company }}</p>
                                <p :class="`text-body-1 ${job.colour}--text`">{{ job.time }}</p>
                            </v-col>
                        </template>
                        <div class="py-4">
                            <h2 v-if="!smallScreen" :class="`headline font-weight-bold mb-2 ${job.colour}--text`">{{ job.position }}</h2>
                            <h2 v-else :class="`headline font-weight-bold mb-2 ${job.colour}--text`" class="pb-0">{{ job.position }}</h2>
                            <p v-if="smallScreen" :class="`text-body-2 ${job.colour}--text`">{{ job.company}} • {{ job.time }}</p>
                            <ul><li v-for="(role, i) in job.role" :key="i">{{ role }}</li></ul>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'WorkExperience',
    props: {
        accentColour: String
    },
    data: () => ({
        smallScreen: false,
        experience: [
            {
              company: 'ADP Canada Co.',
              time: 'Sept 2022',
              position: 'Associate Application Developer',
              role: [
                'Coming soon ...'
              ],
              colour: 'text--darken-1 red',
              icon: 'mdi-monitor-cellphone'
            },
            {
                company: 'SS&C Technologies',
                time: 'May 2020 - Aug 2020',
                position: 'Software Developer',
                role: [
                    'Daily involvement with ETL processes and utilization of SQL Server management, reporting, and integration software',
                    'Actively participated in bi-weekly sprint meetings and group projects assisting others and taking initiative when needed',
                    'Performed user acceptance testing and created documentation for code releases'
                ],
                colour: 'blue',
                icon: 'mdi-dev-to'
            },
            {
                company: 'International Financial Data Services (IFDS)',
                time: 'Jan 2020 - May 2020',
                position: 'Software Developer',
                role: [
                    'Created and modified data reports for company resources and troubleshot issues related to data, software, and authorization',
                    'Provided support for internal services and developed new features based on business needs',
                    'Integrated a process which enabled the automation of data extraction and updates used for reporting and billing'
                ],
                colour: 'primary',
                icon: 'mdi-console'
            },
            {
                company: 'CGI Group Inc.',
                time: 'Aug 2018 - Apr 2019',
                position: 'Desktop Technician & Consultant',
                role: [
                    'Facilitated a Canada-wide Bell Distribution Inc. project that involved imaging and configuring desktops and tablets',
                    'Managed the deployment of desktops and laptops for new and returning employees',
                    'Assisted Bell & CGI employees with various technical problems ranging from software installation to replacing device hardware'
                ],
                colour: 'text--darken-1 red',
                icon: 'mdi-account-details'
            },
            {
                company: 'B&C Aquatics',
                time: 'Sept 2017 - Sept 2018',
                position: 'Swimming Instructor',
                role: [
                    'Organized and planned lessons to guarantee each swimmer learns and practices the required abilities to improve',
                    'Adapted different methods and teachings to try and accommodate each and every swimmer in the program',
                    'Collaborated with other instructors on the progress of their swimmers and different teaching techniques to expand knowledge of different practices'
                ],
                colour: 'primary',
                icon: 'mdi-swim'
            },
            {
                company: 'B&C Aquatics',
                time: 'May 2013 - Aug 2017',
                position: 'Deck Attendant',
                role: [
                    'Facilitated the instructor during lessons by helping swimmers work on their strokes or providing constant feedback on ways for them to improve',
                    'Enforced pool safety and regulations to ensure that the swimming environment was safe for everyone',
                    'Coordinated groups of children and taught water safety classes and drills'
                ],
                colour: 'primary',
                icon: 'mdi-lifebuoy'
            }
        ]
    }),
    mounted() {
        this.$nextTick(function() {
            window.addEventListener('resize', this.getWindowWidth);
            this.getWindowWidth()
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getWindowWidth);
    },
    computed: {
        underlineColour () {
            return { '--underline-colour': `linear-gradient(${this.accentColour}, transparent) bottom /var(--d, 35%) 4px no-repeat` }
        }
    },
    methods: {
        getWindowWidth() {
            this.smallScreen = document.documentElement.clientWidth < 700;
        }
    },
}
</script>

<style scoped>
    li {
        padding-bottom: 5px;
    }
    .workContainer {
        min-width: 100%;
        background-color: #FFFFFF;
        justify-content: center;
    }
    .timeline {
        margin: 45px 0;
    }

</style>
