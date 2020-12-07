<template>
  <ul class="menu">
    <div v-for="item in menuItems" :key="item.label">
      <a v-if="item.isExternal" :href="item.url" target="_blank" rel="noopener noreferrer">
        <li :class="getMenuItemClasses(item)" class="link">
          {{ item.label }}
        </li>
      </a>
      <g-link v-else-if="item.url" :to="item.url">
        <li :class="getMenuItemClasses(item)" class="link">
          {{ item.label }}
        </li>
      </g-link>
      <li v-else>
        {{ item.label }}
        <ul v-if="item.children">
          <div v-for="child in item.children" :key="child.label">
            <g-link :to="child.url">
              <li class="child link">
                {{ child.label }}
              </li>
            </g-link>
          </div>
        </ul>
      </li>
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
      margin-right: 8px;
    }

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
      font-size: 1.5em;
      line-height: 2em;
      ul {
        .child {
          &::before {
            width: 0.5em;
            height: 0.5em;
            margin-right: 4px;
          }
          line-height: 1.5em;
          font-size: 1em;
          font-weight: 300;
        }
      }
    }
  }
}
</style>
