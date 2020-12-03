<template>
  <div class="side-menu">
    <g-link to="/">
      <g-image class="logo" src="~/assets/logo.png" />
    </g-link>
    <ul class="menu">
      <li v-for="item in menuItems" :key="item.label" :class="getMenuItemClasses(item)">
        <g-link :to="item.url">{{item.label}}</g-link>
        <ul v-if="item.children">
          <li v-for="child in item.children" :key="child.label" class="child">
            {{child.label}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from "vue-property-decorator";

// class MenuItem {
//   constructor(label:string, url:string, isExternal:boolean){
//     this.label = label
//     this.url = url
//     this.isExternal = isExternal
//   }

//   label: string
//   url: string
//   isExternal: boolean
// }
interface MenuItem{
  label: string
  url?: string
  isExternal: boolean
  children?: MenuItem[]
}

@Component
export default class SideMenu extends Vue {
    menuItems: Array<MenuItem> = [
      {
        label: "Home",
        url: "/",
        isExternal: false
      },
      {
        label: "Profile",
        url: "/about",
        isExternal: false
      },
      {
        label: "News",
        url: "/news",
        isExternal: false
      },
      {
        label: "Artwork",
        isExternal: false,
        children: [
          {
            label: "Painting",
            url: "",
            isExternal: false
          },
          {
            label: "Digital art",
            url: "",
            isExternal: false
          },
          {
            label: "Work",
            url: "",
            isExternal: false
          }
        ]
      },
      {
        label: "Blog[FANBOX]",
        url: "/fanbox",
        isExternal: true
      },
      {
        label: "Shop",
        url: "/shop",
        isExternal: true
      },
      {
        label: "Contact",
        url: "/contact",
        isExternal: false
      },
    ]

    getMenuItemClasses(item:MenuItem){
      let classes: string[] = []
      if(item.isExternal) classes.push("external")
      return classes
    }
}
</script>

<style lang="scss" scoped>
  .logo{
    position: absolute;
    width:300px;
    z-index: 9999999; 
    top: 30px;
    left: 50px;
  }
  .side-menu{
    position: fixed;
    width: 300px;
    height: 100%;
    background-color: #E3E7EE;
    padding: 200px 10px 0 10px;
  }

  ul.menu{
    padding-left: 90px;
    li{
      a{text-decoration: none;}
      a:link { color: #AE596C; }
      a:visited { color: #AE596C; }
      a:hover { color: #AE596C; }
      a:active { color: #AE596C; }
      
      font-weight: bold;
      font-style: italic;
      list-style-type: none!important;/*ポチ消す*/
      line-height: 2em;

      &:before{ 
        display:inline-block; 
        vertical-align: middle;
        /*以下白丸つくる*/
        content:'';
        width:1em;
        height: 1em;
          background: #E9A5B8;
        margin-right: 8px;
        
      }
      ul{
        padding-left: 25px;
      }
      .child{
        color: #636363;
        line-height: 1.5em;
        font-size: 0.9em;
        font-weight: 300;

        &::before{
          width: 0.5em;
          height: 0.5em;
          margin-right: 4px;
        }

      }
      &.external{
        a:link { color: #296A88; }
        a:visited { color: #296A88; }
        a:hover { color: #296A88; }
        a:active { color: #296A88; }
        &::before{
        background: #8AAEC7;
        }
      }
    }
  }
</style>