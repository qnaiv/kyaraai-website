<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
    <ClientOnly>
        <div v-masonry="containerId" transition-duration="0.3s" item-selector=".item">
          <div v-masonry-tile class="item" v-for="artwork in $page.artworks.edges" :key="artwork.id">
            <g-link :to="'/artwork/'+ artwork.node.id">
              <g-image class="thumbnail" :src="artwork.node.thumbnail" />
            </g-link>
          </div>
        </div>
    </ClientOnly>

  </Layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from "vue-property-decorator";

@Component
export default class component_name extends Vue {
  
}
</script>

<page-query>
query{
  artworks: allArtwork(sortBy: "date"){
    edges{
      node{
        id,
        thumbnail (quality: 10),
        date
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.home-links a {
  margin-right: 1rem;
}
.thumbnail{
  width: 200px;
  height: 200px;
  object-fit: cover;
  
}
</style>
