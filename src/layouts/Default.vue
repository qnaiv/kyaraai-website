<template>
  <div class="layout">
    <SideMenu></SideMenu>
    <div class="main-contents">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import SideMenu from '@/components/SideMenu.vue'

@Component({
  components: {
    SideMenu,
  },
})
export default class Default extends Vue {}
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  min-height: 100%;
  color: #767676;
}

a {
  text-decoration: none;
}
a:link,
a:visited {
  color: #67bdcd;
}
a:hover,
a:active {
  color: #4e8f9b;
}

.main-contents {
  max-width: 760px;
  margin: 0 0 0 270px;
  padding-top: 20px;
  padding-left: 80px;
  padding-right: 80px;
}
</style>
