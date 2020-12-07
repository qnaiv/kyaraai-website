<template>
  <div class="main-container">
    <nav class="navbar is-fixed-top is-hidden-tablet">
      <div class="navbar-brand">
        <g-link class="logo" to="/">
          <g-image src="~/assets/logo.png" fit="inside" width="200" height="80" />
        </g-link>
      </div>
      <ClientOnly>
        <Slide right no-overlay>
          <MenuItems />
        </Slide>
      </ClientOnly>
    </nav>

    <div class="columns is-gapless">
      <div class="column is-narrow is-hidden-mobile">
        <SideMenu />
      </div>
      <div class="column">
        <div class="section has-padding-top-100-mobile has-padding-50-tablet">
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
@import '../../node_modules/bulma/bulma.sass';
@import '../assets/style/color.scss';

.logo {
  position: fixed;
  top: 10px;
  left: 20px;
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
}
.bm-item-list > * {
  display: inherit !important;
  padding: inherit !important;
  text-decoration: inherit !important;
}
</style>
