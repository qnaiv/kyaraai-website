<template>
  <div class="recent-news-container">
    <h2 class="header">News</h2>
    <div class="news-list">
      <div v-for="news in $static.recentNews.edges" :key="news.node.id" class="news">
        <g-link :to="'/news/' + news.node.id">
          {{ getCategory(news) }} | {{ news.node.title }} {{ news.node.subtitle }}
        </g-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class RecentNews extends Vue {
  $static: any
  getCategory(news: any) {
    return news.node.tags[0]
  }
}
</script>
<static-query>
query {
  recentNews: allNews(sortBy: "date", order: DESC, limit: 3) {
    edges {
      node {
        id
        date(format: "YYYY")
        title
        subtitle
        tags
        thumbnail(quality: 90)
      }
    }
  }
}
</static-query>
<style lang="scss" scoped>
.recent-news-container {
  display: grid;
  grid-template-areas: 'header news-list';
  grid-template-columns: 80px 1fr;
  .header {
    grid-area: header;
    margin: 0px;
    line-height: 1;
  }
  .news-list {
    grid-area: news-list;
    .news {
      font-size: 0.8em;
      font-weight: 600;
      margin-bottom: 5px;
    }
  }
}
</style>
