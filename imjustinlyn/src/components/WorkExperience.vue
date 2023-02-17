<template>
  <v-container class="container justify-center">
    <v-row class="mt-0 mt-md-4" justify="center">
      <v-col class="contentCol pb-0 pl-0 pl-md-3">
        <!-- Work experience timeline -->
        <v-timeline dense class="mb-12">
          <v-timeline-item v-for="(job, i) in experience" :key="i" :icon="job.icon" :color="job.colour" fill-dot>
            <div class="py-4">
              <h2 class="text-h6 text-md-h5 font-weight-bold mb-0">{{ job.position }}</h2>
              <p class="text-body-1 text-md-h6 font-weight-medium mb-0">{{ job.company }}</p>
              <p class="text--secondary">{{ job.time }}</p>
              <ul>
                <li v-for="(role, i) in job.role" :key="i">{{ role }}</li>
              </ul>
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
    experience: [
      {
        company: 'ADP Canada Co.',
        time: 'Sept 2022',
        position: 'Associate Application Developer',
        role: [
          'Coming soon ...'
        ],
        colour: 'red',
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
        colour: 'red',
        icon: 'mdi-laptop'
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
  })
}
</script>

<style scoped>
  li {
    padding-bottom: 5px;
  }

</style>
