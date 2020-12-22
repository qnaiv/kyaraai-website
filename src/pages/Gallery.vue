<template>
  <Layout>
    <h2 class="list-title mb-2">
      Gallery <span v-if="tags"> - {{ tags }}</span>
    </h2>
    <Posts :posts="getFilteredArtworksByTag()" :category="'artwork'"></Posts>
  </Layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import Posts from '../components/Posts.vue'
import { Route } from 'vue-router'

@Component({
  components: { Posts },
})
export default class Artworks extends Vue {
  $route!: Route
  $page!: any
  get tags(): string | Array<string | null> {
    return this.$route.query.tags
  }

  getFilteredArtworksByTag(): Array<any> {
    let artworks: Array<any> = this.$page.artworks.edges
    const query = this.tags
    if (query == null) {
      return artworks
    }

    let currentTag: string | null = query instanceof Array ? query[0] : query
    if (!currentTag) {
      return artworks
    }

    return artworks.filter((a: any) =>
      a.node.tags.map((t: string) => t.toUpperCase()).includes(currentTag?.toUpperCase())
    )
    // return artworks.filter((a: any) => a.node.tags.includes(currentTag))
  }
}
</script>

<page-query>
query {
  artworks: allArtwork(sortBy: "date") {
    edges {
      node {
        id
        thumbnail(quality: 10)
        date
        tags
      }
    }
  }
}
</page-query>
<style lang="scss" scoped>
.title {
  font-weight: 300 !important;
  font-size: 1em !important;
}
</style>
