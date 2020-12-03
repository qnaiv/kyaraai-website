<template>
  <div class="layout">
    <SideMenu></SideMenu>
    <div class="main-contents">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
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
import { Vue, Component, Prop, Watch, Emit, Ref } from "vue-property-decorator";
import SideMenu from "@/components/SideMenu.vue";

@Component(
  {
    components: {
      SideMenu
    }
  }
)
export default class Default extends Vue {
  
}
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  min-height: 100%;
  color: #767676;
}

a{text-decoration: none;}
a:link { color: #67bdcd; }
a:visited { color: #67bdcd; }
a:hover { color: #4e8f9b; }
a:active { color: #4e8f9b; }

.main-contents {
  max-width: 760px;
  margin: 0 0 0 300px;
  padding-left: 80px;
  padding-right: 80px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
