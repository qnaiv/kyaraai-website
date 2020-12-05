<template>
  <ul class="menu">
    <li v-for="item in menuItems" :key="item.label" :class="getMenuItemClasses(item)">
      <a v-if="item.isExternal" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.label }}</a>
      <g-link v-else-if="item.url" :to="item.url">{{ item.label }}</g-link>
      <span v-else>{{ item.label }}</span>
      <ul v-if="item.children">
        <li v-for="child in item.children" :key="child.label" class="child">
          <g-link :to="child.url">
            {{ child.label }}
          </g-link>
        </li>
      </ul>
    </li>
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
      label: 'Artwork',
      isExternal: false,
      children: [
        {
          label: 'Painting',
          url: '/artworks?tags=PAINTING',
          isExternal: false,
        },
        {
          label: 'Digital art',
          url: '/artworks?tags=DIGITAL',
          isExternal: false,
        },
        {
          label: 'Work',
          url: '/artworks?tags=WORK',
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
      url: 'https://iceya.thebase.in/',
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
    return classes
  }
}
</script>

<style lang="scss" scoped>
ul.menu {
  padding-left: 60px;
  color: #ae596c;
  letter-spacing: 1px;
  li {
    &:before {
      display: inline-block;
      vertical-align: middle;
      /*以下白丸つくる*/
      content: '';
      width: 0.7em;
      height: 0.7em;
      background: #e9a5b8;
      margin-right: 8px;
    }

    font-weight: bold;
    font-style: italic;
    list-style-type: none !important; /*ポチ消す*/
    line-height: 2em;

    a {
      text-decoration: none;
    }
    a:link,
    a:visited {
      color: #ae596c;
    }
    a:hover,
    a:active {
      color: #ae596c;
    }

    ul {
      padding-left: 25px;
      margin-bottom: 20px;
      .child {
        &::before {
          width: 0.5em;
          height: 0.5em;
          margin-right: 4px;
        }
        color: #636363;
        line-height: 1.5em;
        font-size: 0.9em;
        font-weight: 600;
        a:link,
        a:visited,
        a:hover,
        a:active {
          color: #636363;
        }
      }
    }
    &.external {
      &::before {
        background: #8aaec7;
      }
      color: #296a88;
      a:link,
      a:visited {
        color: #296a88;
      }
      a:hover,
      a:active {
        color: #296a88;
      }
    }
  }
}
</style>