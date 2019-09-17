<template lang="pug">
  VApp(style="background: #eee;")
    LayoutToolbar
    VLayout.fill-height
      LayoutDrawer
      LayoutView
    LayoutMDPlusFooter
</template>

<script>
import LayoutToolbar from '@/components/layout/Layout-Toolbar'
import LayoutDrawer from '@/components/layout/Layout-Drawer'
import LayoutView from '@/components/layout/Layout-View'
import LayoutMDPlusFooter from '@/components/layout/Layout-MD-Plus-Footer'

export default {
  components: { LayoutToolbar, LayoutDrawer, LayoutView, LayoutMDPlusFooter }
}
</script>
