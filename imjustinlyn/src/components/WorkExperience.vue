<template>
    <v-container class="workContainer">
        <v-row justify="center">
            <v-col id="contentCol">
                <h1 class="heading">Work Experience</h1>
                <v-timeline v-bind:dense="smallScreen" class="timeline">
                    <v-timeline-item v-for="(job, i) in experience" :key="i" :icon="job.icon" :color="job.colour" fill-dot>
                        <template v-slot:opposite>
                            <v-col>
                                <p :class="`headline font-weight-bold ${job.colour}--text`" class="mb-0">{{ job.position }}</p>
                                <p :class="`headline font-weight-light ${job.colour}--text`">{{ job.time }}</p>
                            </v-col>
                        </template>
                        <div class="py-4">
                            <h2 v-if="!smallScreen" :class="`headline font-weight-bold mb-4 ${job.colour}--text`">{{ job.company }}</h2>
                            <h2 v-else :class="`headline font-weight-bold mb-4 ${job.colour}--text`" class="pb-0">{{ job.position }}</h2>
                            <p v-if="smallScreen" :class="`font-weight-light ${job.colour}--text`">{{ job.company}} • {{ job.time }}</p>
                            <div v-for="(role, i) in job.role" :key="i"> ○ {{ role }}</div>
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
    data: () => ({
        smallScreen: false,
        experience: [
            {
                company: 'SS&C Technologies',
                time: 'May 2020 - Aug 2020',
                position: 'Software Developer',
                role: [
                    'Daily interaction with SSMS, SSRS, and SSIS to view, manage, and modify company information',
                    'Actively participate in bi-weekly sprint meetings and group projects assisting others and taking initiative when needed',
                    'Test & Document code releases prior to deployment'
                ],
                colour: 'primary',
                icon: 'mdi-dev-to'
            },
            {
                company: 'International Financial Data Services (IFDS)',
                time: 'Jan 2020 - May 2020',
                position: 'Software Developer',
                role: [
                    'Assist company resources with the creation and modification of reports and troubleshooting of issues related to data, software, and reports',
                    'Provide support for proprietary software and websites, and develop new features based on business needs',
                    'Integrated a new process which allows for the automation of data extraction and updates which is used for reporting and billing'
                ],
                colour: 'blue',
                icon: 'mdi-console'
            },
            {
                company: 'CGI Group Inc.',
                time: 'Aug 2018 - Apr 2019',
                position: 'Desktop Technician & Consultant',
                role: [
                    'Facilitated with a Bell Distribution Inc. project where I had to image and configure 2000+ desktop and tablets and distribute them to Bell and subsidiaries across Canada',
                    'Managed the responsibility of the deployment of desktops and laptops for new and returning employees',
                    'Assisted Bell & CGI employees with various technical problems ranging from the installation of software to replacing device hardware'
                ],
                colour: 'error',
                icon: 'mdi-account-details'
            },
            {
                company: 'B&C Aquatics',
                time: 'Sept 2017 - Sept 2018',
                position: 'Swimming Instructor',
                role: [
                    'Organize and plan each lesson to guarantee each swimmer learns and practices the required abilities to improve',
                    'Continue to develop new and different methods and teachings to try and accommodate each swimmer in the program',
                    'Collaborate with other instructors on the progress of their swimmers and different teaching techniques to expand knowledge of different practices'
                ],
                colour: 'primary',
                icon: 'mdi-swim'
            },
            {
                company: 'B&C Aquatics',
                time: 'May 2013 - Aug 2017',
                position: 'Deck Attendant',
                role: [
                    'Facilitated the instructor during lessons by helping swimmer work on their strokes or providing constant feedback on ways for them to improve',
                    'Enforced pool safety and regulations to ensure that the swimming environment was safe for everyone',
                    'Coordinated groups of children of varying ages and ensured their safety while practicing and waiting for their turn with the instructor'
                ],
                colour: 'primary',
                icon: 'mdi-swim'
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
    methods: {
        getWindowWidth() {
            this.smallScreen = document.documentElement.clientWidth < 700;
        }
    },
}
</script>

<style scoped>
    .workContainer {
        min-width: 100%;
        background-color: #FFFFFF;
        justify-content: center;
    }
    .timeline {
        margin: 45px 0;
    }

</style>