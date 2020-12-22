<template>
  <Layout v-if="isLoaded()">
    <h2 class="title">{{ $page.news.title }}</h2>
    <h3 class="subtitle">{{ $page.news.subtitle }}</h3>
    <div class="content content-container" v-html="$page.news.content" />
  </Layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class News extends Vue {
  $page: any
  isLoaded(): boolean {
    return this.$page.news
  }
}
</script>

<page-query>
query News($id: ID!) {
  news: news(id: $id) {
    title
    subtitle
    id
    thumbnail
    date
    content
  }
}
</page-query>

<style lang="scss" scoped></style>
