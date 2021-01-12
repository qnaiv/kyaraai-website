<template>
  <ul class="menu">
    <div v-for="(item, index) in menuItems" :key="index">
      <a v-if="item.isExternal" :href="item.url" target="_blank" rel="noopener noreferrer">
        <li :class="getMenuItemClasses(item)" class="link">
          {{ item.label }}
        </li>
      </a>
      <g-link v-else-if="!item.children" :to="item.url">
        <li :class="getMenuItemClasses(item)" class="link">
          {{ item.label }}
        </li>
      </g-link>
      <div v-else>
        <g-link :to="item.url">
          <li class="link" :class="getMenuItemClasses(item)">
            {{ item.label }}
          </li>
        </g-link>
        <ul v-if="item.children" class="child">
          <div v-for="(child, index) in item.children" :key="index">
            <g-link :to="child.url">
              <li class="link" :class="getMenuItemClasses(child)">
                {{ child.label }}
              </li>
            </g-link>
          </div>
        </ul>
      </div>
    </div>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

interface MenuItem {
  label: string
  url?: string
  isExternal: boolean
  children?: MenuItem[]
}

@Component
export default class MenuItems extends Vue {
  menuItems: Array<MenuItem> = [
    {
      label: 'Home',
      url: '/',
      isExternal: false,
    },
    {
      label: 'Profile',
      url: '/about',
      isExternal: false,
    },
    {
      label: 'News',
      url: '/news-list',
      isExternal: false,
    },
    {
      label: 'Gallery',
      url: '/gallery',
      isExternal: false,
      children: [
        {
          label: 'Personal works',
          url: '/gallery?tags=Personal works',
          isExternal: false,
        },
        {
          label: 'Client works',
          url: '/gallery?tags=Client works',
          isExternal: false,
        },
      ],
    },
    {
      label: 'Blog[FANBOX]',
      url: 'https://kyaraai.fanbox.cc/',
      isExternal: true,
    },
    {
      label: 'Shop',
      url: 'https://iceya.booth.pm/',
      isExternal: true,
    },
    {
      label: 'Contact',
      url: '/contact',
      isExternal: false,
    },
  ]

  getMenuItemClasses(item: MenuItem): string[] {
    let classes: string[] = []
    if (item.isExternal) classes.push('external')
    if(item.url != undefined && encodeURI(item.url) === this.$route.fullPath) classes.push('current')
    return classes
  }
}
</script>

<style lang="scss" scoped>
@import '../../node_modules/bulma/bulma.sass';

ul.menu {
  padding-left: 15%;
  color: #ae596c;
  letter-spacing: 1px;
  list-style-type: none !important; /*ポチ消す*/
  line-height: 2em;

  li {
    &:before {
      display: inline-block;
      vertical-align: middle;
      /*以下白丸つくる*/
      content: '';
      width: 0.7em;
      height: 0.7em;
      background: #e9a5b8;
      margin: 0 8px;
      border-radius: 1px;
    }
    &.current:before {
        border: 1px solid #e9a5b8;
        background: white;
    }

    font-size: 0.8em;
    font-weight: 500;

    &.link {
      &:hover {
        background-color: #d5dae2;
      }
      color: #ae596c;
    }

    &.external {
      &::before {
        background: #8aaec7;
      }
      color: #296a88;
    }
  }
  ul.child {
    padding-left: 25px;
    margin-bottom: 20px;
    li {
      &::before {
        width: 0.5em;
        height: 0.5em;
        margin-right: 4px;
      }
      &.current:before {
          border: 1px solid #e9a5b8;
          background: white;
      }
      color: #636363;
      line-height: 2em;
      font-size: 0.8em;
      font-weight: 400;
      a:link,
      a:visited,
      a:hover,
      a:active {
        color: #636363;
      }
    }
  }
}
@media screen and (max-width: $tablet) {
  ul.menu {
    letter-spacing: 2px;
    li {
      &:before {
        width: 0.7em;
        height: 0.7em;
      }
      font-size: 1.1em;
      font-weight: 300;
      line-height: 2.5em;
    }
    ul.child {
      li {
        &::before {
          width: 0.5em;
          height: 0.5em;
          margin-right: 4px;
        }
        line-height: 2em;
        font-size: 1em;
        font-weight: 300;
      }
    }
  }
}
</style>
