<template lang="pug">
  VLayout.row.wrap
    VContainer
      VCard(
        color="grey lighten-4"
        flat
        tile
      )
        VToolbar(dense)
          VTextField(
            v-model="jobsCounter"
            type="number"
            label="Number of Cards"
            required
            style="margin-bottom: -2em"
          )

          VSpacer

        VCardText.row
          VFlex.xs12.sm6.md4.pa-2(v-for="job in jobs" :key="job._id")
            a
              VCard(
                :outlined="!job.defaultJob"
                :color="job.defaultJob?'blue-grey lighten-4':null"
                :elevation="job.defaultJob?5:0"
              )
                VCardText.black--text
                  div.headline(style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;") {{ job.name }}
                  div.caption @{{ job.company_name }}
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      syncCmdDialog: false,
      statusIcons: [
        {
          icon: 'mdi-account-multiple-plus',
          hint: 'jobs.hint_to_connect'
        },
        {
          icon: 'mdi-account-network',
          hint: 'jobs.hint_connected'
        },
        {
          icon: 'mdi-human-greeting',
          hint: 'jobs.hint_invited'
        },
        {
          icon: 'mdi-trophy',
          hint: 'jobs.hint_win'
        }
      ],
      jobsCounter: 2
    }
  },

  computed: {
    jobs() {
      const jobs = []

      for (let index = 0; index < this.jobsCounter; index++) {
        const random = Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, '')
          .substr(0, 5)

        const job = {
          company_name: random,
          name: random,
          _id: random
        }

        jobs.push(job)
      }

      return jobs
    }
  }
}
</script>
