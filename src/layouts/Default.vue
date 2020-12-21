<template>
  <div class="main-container">
    <nav class="navbar is-fixed-top is-hidden-tablet">
      <div class="navbar-brand">
        <g-link class="logo" to="/">
          <g-image src="~/assets/logo.png" fit="inside"  quality="100" immediate="true" />
        </g-link>
      </div>
      <ClientOnly>
        <Slide right no-overlay :close-on-navigation="true">
          <MenuItems />
        </Slide>
      </ClientOnly>
    </nav>

    <div class="columns is-gapless">
      <div class="column is-narrow is-hidden-mobile">
        <SideMenu />
      </div>
      <div class="column">
        <div class="section has-padding-top-145-mobile has-padding-50-tablet">
          <slot />
        </div>
      </div>
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
import MenuItems from '@/components/MenuItems.vue'

@Component({
  components: {
    SideMenu,
    MenuItems,
  },
})
export default class Default extends Vue {}
</script>

<style lang="scss">
@import '../assets/style/_variables.scss';
/* .main-container {
  margin: 0px !important;
} */
.logo {
  position: fixed;
  top: 10px;
  left: 20px;
  img{
    width: auto;
    height: 100px;
  }
}
.bm-burger-button {
  top: 22px !important;
  right: 20px !important;
  width: 25px !important;
  height: 20px !important;
}
.bm-cross-button {
  height: 36px !important;
  width: 36px !important;
  top: 12px;
  left: 30px;
}
.bm-cross {
  background: #bdc3c7;
  width: 4px !important;
  height: 30px !important;
}
.bm-menu {
  background-color: $menu-bg-color !important; /* Black*/
  white-space: nowrap;
}
.bm-item-list > * {
  display: inherit !important;
  padding: inherit !important;
  text-decoration: inherit !important;
}
</style>
