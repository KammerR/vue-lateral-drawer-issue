<template lang="pug">
  VLayout#toolbar_div(dark)
    VAppBar.ma-0(color="primaryDark")
</template>

<script>
export default {
  data: () => ({
    title: 'Testing'
  }),

  watch: {
    $route(val) {
      this.title = this.$t(`routes.${val.name}`)
    }
  },

  mounted() {
    this.title = this.$route.name
  }
}
</script>

<style>
#default-toolbar a {
  text-decoration: none;
}
</style>
