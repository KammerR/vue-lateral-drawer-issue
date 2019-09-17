<template lang="pug">
  VLayout.row.wrap
    VContainer
      VCard(
        color="grey lighten-4"
        flat
        tile
      )
        VToolbar(dense)
          VTooltip(top)
            template(v-slot:activator="{ on }")
              VBtn(text v-on="on" disabled)
                VIcon mdi-note-plus
                | &nbsp;New Job
            span New Job

          div
            VTooltip(top)
              template(v-slot:activator="{ on }")
                VBtn(
                  text
                  v-on="on"
                )
                  VIcon mdi-cloud-download
              span Import

            VTooltip(top)
              template(v-slot:activator="{ on }")
                VBtn(
                  text
                  v-on="on"
                )
                  VIcon mdi-cloud-sync
              span Sync

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
                VCardText
                  VLayout.row.wrap
                    VFlex.xs3(v-for="s,idx in statusIcons" :key="idx")
                      VTooltip(top)
                        template(v-slot:activator="{ on }")
                          VBtn(text v-on="on" color="grey")
                            VIcon {{ s.icon}}
                            span.title &nbsp; 0
                        span.caption {{ "Hint" }}
                VCardActions
                  VBtn(
                    v-t="'general.open'"
                    color="primary"
                    text
                  )

                  VBtn(
                    v-if="!job.defaultJob"
                    v-t="'jobs.make_default'"
                    color="primary"
                    text
                  )
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
      jobs: [
        {
          company_name: 'A company',
          name: 'Developer',
          _id: '1'
        },
        {
          company_name: 'Another Company',
          name: 'Designer',
          _id: '2'
        }
      ]
    }
  }
}
</script>
