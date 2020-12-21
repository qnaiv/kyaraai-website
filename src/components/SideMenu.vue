<template>
  <div class="side-menu has-page-width-mobile">
    <g-link to="/">
      <g-image class="logo" src="~/assets/logo.png" immediate="true" />
    </g-link>
    <MenuItems />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import MenuItems from '@/components/MenuItems.vue'

@Component({
  components: {
    MenuItems,
  },
})
export default class SideMenu extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  width: 300px;
  z-index: 9999;
  top: 30px;
  left: 30px;
}
.side-menu {
  top: 0px;
  bottom: 0px;
  background-color: #fff;
  padding: 200px 10px 0 10px;
  position: sticky;
  display: inline-block;
  vertical-align: top;
  max-height: 100vh;
  min-height: 100vh;
  min-width: 250px;
}

@media screen and (max-width: 768px) {
  .side-menu {
    left: -100%;
  }
}
</style>
