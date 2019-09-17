<template lang="pug">
  VFooter.px-3(
    app
    dark
  )
    VLayout.row.wrap.mx-2.hidden-md-and-down
      template.footer-items.mx-1
        VFlex
          VBtn(
            small
            text
            target="_blank"
            style="textTransform: none"
          )
            | {{ "Bla" }}
        | &nbsp;

    VSpacer

    VLayout
      VFlex.font-weight-light.copyright.text-xs-right.caption(style="text-align: right")
        | &copy;
        | {{ (new Date()).getFullYear() }}
        | The master Company —
        | Test Version
</template>

<style>
#layout-footer {
  z-index: 0;
}
</style>
