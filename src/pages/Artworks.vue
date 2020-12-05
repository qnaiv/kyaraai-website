<template>
  <Layout>
    <h2 class="title mb-2">Artworks - {{ getTags() }}</h2>
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
  getTags(): string | Array<string | null> {
    return this.$route.query.tags
  }
  getFilteredArtworksByTag(): Array<any> {
    const query = this.$route.query.tags
    if (query == null) {
      return []
    }
    let currentTag: string | null = query instanceof Array ? query[0] : query
    let artworks: Array<any> = this.$page.artworks.edges
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
<style></style>
