<template>
  <Layout>
    <div class="content" v-html="$page.artwork.content" />
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

<style></style>