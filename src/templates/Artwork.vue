<template>
  <Layout v-if="$page && $page.artwork">
    <div class="columns is-mobile nav-prev-next mb-5">
      <router-link v-if="hasNextArtwork" class="column" :to="'/artwork/' + nextArtwork.id">
        <p class="prev-next-label icon">
          <i class="fas fa-lg fa-chevron-left"></i>
        </p>
      </router-link>
      <div v-else class="column"></div>
      <router-link class="column to-gallery" :to="backToGallery($page.artwork.tags)">Back</router-link>
      <router-link v-if="hasPrevArtwork" class="column" :to="'/artwork/' + prevArtwork.id">
        <p class="prev-next-label icon">
          <i class="fas fa-lg fa-chevron-right"></i>
        </p>
      </router-link>

      <div v-else class="column"></div>
    </div>
    <div class="columns is-desktop is-variable is-8">
      <div class="column is-three-fifths image-container">
        <div v-for="(image, index) in $page.artwork.images" :key="index">
          <g-image v-if="image" :src="image" :immediate="true" />
        </div>
      </div>
      <div class="column content content-container" v-html="$page.artwork.content" />
    </div>
  </Layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class ArtworkPost extends Vue {
  $page: any
  backToGallery(tags: Array<string>): string {
    if (tags.some((tag: string) => tag.toUpperCase() === 'PERSONAL WORKS')) {
      return '/gallery?tags=Personal%20works'
    } else if (tags.some((tag: string) => tag.toUpperCase() === 'CLIENT WORKS')) {
      return '/gallery?tags=Client%20works'
    }
    return '/gallery?tags='
  }

  get currentArtworkIndex() {
    const edges: Array<any> = this.$page.artworks.edges
    const currentArtworkId = this.$page.artwork.id

    return this.filteredArtworks.map((edge) => edge.node.id).indexOf(currentArtworkId)
  }

  get currentArtworkCategory() {
    const tags: Array<any> = this.$page.artwork.tags
    if (tags.some((tag: string) => tag.toUpperCase() === 'PERSONAL WORKS')) return 'PERSONAL WORKS'
    if (tags.some((tag: string) => tag.toUpperCase() === 'CLIENT WORKS')) return 'CLIENT WORKS'
    return ''
  }

  get filteredArtworks() {
    const edges: Array<any> = this.$page.artworks.edges
    return edges.filter((edge) => edge.node.tags.includes(this.currentArtworkCategory))
  }

  get hasPrevArtwork() {
    const edges: Array<any> = this.filteredArtworks
    return this.currentArtworkIndex < edges.length - 1
  }
  get prevArtwork() {
    const edges: Array<any> = this.filteredArtworks
    return edges[this.currentArtworkIndex + 1].node
  }
  get hasNextArtwork() {
    return this.currentArtworkIndex > 0
  }
  get nextArtwork() {
    const edges: Array<any> = this.filteredArtworks
    return edges[this.currentArtworkIndex - 1].node
  }
}
</script>

<page-query>
query Artwork($id: ID!) {
  artwork: artwork(id: $id) {
    title
    id
    thumbnail
    images
    date
    content
    tags
  }
  artworks: allArtwork(sortBy: "date") {
    edges {
      node {
        id
        title
        tags
      }
    }
  }
}
</page-query>

<style lang="scss">
@import '../../node_modules/bulma/bulma.sass';

.image-container {
  text-align: center;
  img {
    height: auto !important;
    width: auto !important;
    max-height: 70vh !important;
    max-width: 100% !important;
    margin: 0 auto !important;
  }
}


.nav-prev-next {
  text-align: center;
  a.column {
    &:hover {
      background-color: #f0f0f0;
        background:url(
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVQYV2M8fvz4f0tLS0YGKIAzMARgKjFUAABfnQgFlPu/LwAAAABJRU5ErkJggg==   ) repeat;
    }
  }
  .to-gallery {
    line-height: 27px;
    color: #8f8f8f !important;
    font-size: 0.8em;
  }
  .prev-next-label {
    font-size: 0.8em;
    color: gray;
  }
  .prev-next-title {
    font-size: 0.8em;
  }
}
</style>
