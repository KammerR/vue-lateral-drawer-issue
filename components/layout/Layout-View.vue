<template lang="pug">
  VContent#content_div
    VLayout#layout-view.ma-4.row.wrap
      VFlex.xs12(light)
        h1(v-t="`routes.${$route.name}`" style="color:black")

      VFadeTransition(mode="out-in")
        VContainer.pt-2(
          fluid
          grid-list-lg
          light
        )
          nuxt
</template>

<script>
export default {
  head: () => ({
    title: 'HunterConquest'
  })
}
</script>

<style>
#layout-view {
  padding-bottom: 100px;
}
</style>
