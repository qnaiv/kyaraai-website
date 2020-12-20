<template>
  <Layout>
    <div class="gallery-content" v-html="$page.artwork.content" />
  </Layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class ArtworkPost extends Vue {}
</script>

<page-query>
query Artwork($id: ID!) {
  artwork: artwork(id: $id) {
    title
    id
    thumbnail
    date
    content
  }
}
</page-query>

<style lang="scss">
@import '../../node_modules/bulma/bulma.sass';

.gallery-content {
  text-align: center;
  img {
    height: auto !important;
    width: auto !important;
    max-height: 70vh !important;
    max-width: 100% !important;
    margin: 0 auto !important;
  }
}
</style>
