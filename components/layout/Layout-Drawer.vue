<template lang="pug">
  VNavigationDrawer#layout-drawer(
    v-model="show"
    fill-height
    expand-on-hover
    dark
  )
    VLayout.fill-height
      VFlex.xs12
        VList#menu_list.xs12(dark)
          div(
            v-for="(link, i) in links"
            :key="i"
          )
            VListItem(
              v-if="!link.items"
              :to="link.to"
            )
              VListItemAction
                VIcon {{ link.icon }}
              VListItemContent
                VListItemTitle &nbsp; {{ $tc(link.text, 2) }}

            VListGroup(
              v-if="link.items"
              :prepend-icon="link.icon"
            )
              template(slot="activator")
                VListItemTitle &nbsp;{{ $tc(link.text, 1) }}

              VListTile(
                v-for="(subItem, j) in link.items"
                :key="j"
                active-class="primary"
                :to="subItem.to"
              )
                template
                  VListTileTitle {{ $tc(subItem.text, 2) }}
</template>

<script>
import SideMenu from '@/components/Side-Menu.js'

export default {
  data() {
    return {
      show: true,
      links: SideMenu.getMenu(this)
    }
  },

  methods: {
    goTo(link) {
      if (link.external) {
        window.open(link.to, '_blank')
      } else {
        this.$router.push(link.to)
      }
    }
  }
}
</script>
