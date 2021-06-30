<template>
    <v-container class="educationContainer">
        <v-row justify="center">
            <v-col id="contentCol" class="alignData">
                <h1 class="heading" :style="underlineColour">Education</h1>
                <v-row justify="center" class="pa-12"><v-img src="../assets/utsc.png" contain max-width="325px"/></v-row>
                <h3>4th year • May 2021</h3>
                <h5 :style="themeColour"><b>BSc in Computer Science, Mathematics, Statistics</b></h5>
                <h3>Information Systems Specialist</h3>

                <!-- Data table of courses -->
                <v-row class="py-6 px-4 mt-12">
                    <v-row class="py-6"><h5 :style="themeColour">•</h5><h2>Relevant Courses</h2></v-row>
                    <v-data-table :headers="headerValues" :items="education" :expanded.sync="expanded" :show-expand="showExpand"
                                  item-key="name" class="courseTable" single-expand hide-default-footer dark
                    >
                        <!-- Templates for custom CSS on whatever columns -->
                        <template v-slot:item.course="{ item }">
                            <h4>{{ item.course }}</h4>
                        </template>
                        <template v-slot:item.icon="{ item }">
                            <v-icon small class="mr-2">{{ item.icon }}</v-icon>
                        </template>
                        <template v-slot:expanded-item="{ headers, item }">
                            <td class="pa-8" :colspan="headers.length">{{ item.desc }}</td>
                        </template>
                    </v-data-table>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
    
</template>

<script>
export default {
    name: 'Education',
    props: {
        resolution: Number,
        accentColour: String
    },
    computed: {
        headerValues () {
            if (this.resolution > 600) {
                return this.educationHeaders
            } else {
                return this.educationHeaders.slice(0, -1)
            }
        },
        showExpand () {
            return this.resolution > 600
        },
        themeColour () {
            return { '--accent-colour': this.accentColour }
        },
        underlineColour () {
            console.log(`${this.headingUnderline}`)
            return { '--underline-colour': `linear-gradient(${this.accentColour}, transparent) bottom /var(--d, 35%) 4px no-repeat` }
        }
    },
    data: () => ({
        expanded: [],
        educationHeaders: [
            { text: '', value: 'icon' },
            { text: 'Course', value: 'course' },
            { text: 'Name', value: 'name' },
            { text: 'Category', value: 'category' },
            { text: 'Semester', value: 'taken' },
            { text: '', value: 'data-table-expand' }
        ],
        education: [
            {
                course: 'CSC369',
                name: 'Operating Systems',
                desc: 'Principles of operating systems. The operating system as a control program and as a ' +
                    'resource allocator. The concept of a process and concurrency problems: synchronization, ' +
                    'mutual exclusion, deadlock. Additional topics include memory management, file systems, process ' +
                    'scheduling, threads, and protection.',
                category: 'Computer Science',
                icon: 'mdi-desktop-mac-dashboard',
                taken: '2021 • Winter'
            },
            {
                course: 'CSCD27',
                name: 'Computer and Network Security',
                desc: 'Public and symmetric key algorithms and their application; key management and certification; ' +
                    'authentication protocols; digital signatures and data integrity; secure network and application ' +
                    'protocols; application, system and network attacks and defences; intrusion detection and ' +
                    'prevention; social engineering attacks; risk assessment and management.',
                category: 'Computer Science',
                icon: 'mdi-desktop-mac-dashboard',
                taken: '2020 • Fall'
            },
            {
                course: 'CSCC09',
                name: 'Programming on the Web',
                desc: 'An introduction to software development on the web. Concepts underlying the development of ' +
                    'programs that operate on the web. Operational concepts of the internet and the web, static and ' +
                    'dynamic client content, dynamically served content, n-tiered architectures, web development ' +
                    'processes and security on the web.',
                category: 'Computer Science',
                icon: 'mdi-desktop-mac-dashboard',
                taken: '2021 • Winter'
            },
            {
                course: 'CSCD58',
                name: 'Computer Networks',
                desc: 'Computer communication network principles and practice. The OSI protocol-layer model; Internet ' +
                    'application layer and naming; transport layer and congestion avoidance; network layer and ' +
                    'routing; link layer with local area networks, connection-oriented protocols and error detection ' +
                    'and recovery;',
                category: 'Computer Science',
                icon: 'mdi-desktop-mac-dashboard',
                taken: '2020 • Fall'
            },
            {
                course: 'MGHB02',
                name: 'Managing People & Groups in Organizations',
                desc: 'An introduction to micro- and macro-organizational behaviour theories from both conceptual ' +
                    'and applied perspectives. Students will develop an understanding of the behaviour of individuals ' +
                    'and groups in different organizational settings. Topics covered include: individual differences, ' +
                    'motivation and job design, leadership, organizational design and culture, group dynamics ' +
                    'and inter-group relations.',
                category: 'Management & Business',
                icon: 'mdi-office-building',
                taken: '2021 • Winter'
            },
            {
                course: 'IDSB10',
                name: 'Knowledge and Communication for Development',
                desc: 'Examines in-depth the roles of information and communication technology (ICT) in knowledge ' +
                    'production and their impact on development. Do new forms of social media make communication ' +
                    'more effective, equitable, or productive in the globalized world? How has network media changed ' +
                    'governance, advocacy, and information flow and knowledge exchange and what do these mean ' +
                    'for development?',
                category: 'Development Studies',
                icon: 'mdi-head-lightbulb-outline',
                taken: '2020 • Fall'
            },
            {
                course: 'CSCC10',
                name: 'Human-Computer Interaction',
                desc: 'The course will provide an introduction to the field of Human-Computer Interaction (HCI) ' +
                    'with emphasis on guidelines, principles, methodologies, and tools and techniques for analyzing, ' +
                    'designing and evaluating user interfaces. Subsequent topics include usability assessment of ' +
                    'interactive systems, prototyping tools, information search and visualization, mobile devices, ' +
                    'social media and social networking, and accessibility factors.',
                category: 'Computer Science',
                icon: 'mdi-desktop-mac-dashboard',
                taken: '2021 • Summer'
            },
            {
                course: 'MGEA05',
                name: 'Introduction to Macroeconomics',
                desc: 'Topics include output, employment, prices, interest rates and exchange rates. Although ' +
                    'calculus is not used in this course, algebra and graphs are used extensively to illuminate ' +
                    'economic analysis.',
                category: 'Management & Business',
                icon: 'mdi-office-building',
                taken: '2018 • Winter'
            }
        ]
    })
}
</script>

<style scoped>
    .educationContainer {
        min-width: 100%;
        background-color: #181818;
        color: #FFFFFF;
    }
    .courseTable {
        width: 100%;
    }
    .theme--dark.v-data-table {
        background-color: #181818;
    }
    .alignData {
        text-align: center;
        justify-content: center;
    }
    h5 {
        color: var(--accent-colour);
        font-size: 1.65em;
        padding-right: 10px;
    }

</style>