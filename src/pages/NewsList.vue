<template>
  <Layout v-if="isLoaded()">
    <h2 class="title">News</h2>
    <ClientOnly>
      <div v-masonry transition-duration="0.3s" item-selector=".item" gutter=".gutter-item">
        <div v-for="n in $page.allNews.edges" :key="n.node.id">
          <div class="gutter-item" />
          <div v-masonry-tile class="item">
            <g-link :to="'/news/' + n.node.id">
              <g-image class="news-thumbnail" :src="n.node.thumbnail"></g-image>
              <div class="card-content">
                <p class="title is-6">&nbsp;{{ n.node.title }}</p>
                <p class="subtitle is-6 mb-1">&nbsp;{{ n.node.subtitle }}</p>
                <Tags :tags="getTagInfoList(n.node.tags)"></Tags>
              </div>
            </g-link>
          </div>
        </div>
      </div>
    </ClientOnly>
  </Layout>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import Tags, { TagInfo } from '../components/Tags.vue'

@Component({
  components: {
    Tags,
  },
})
export default class News extends Vue {
  $page: any
  isLoaded(): boolean {
    return this.$page && this.$page.allNews
  }
  getTagInfoList(tags: Array<string>) {
    const tagInfoList: Array<TagInfo> = []
    tags.forEach((t) => {
      let colorCode = 'gray'
      if (t === '告知') colorCode = '#e9a5b8'
      if (t === '記録') colorCode = '#8aaec7'
      tagInfoList.push({ tagName: t, colorCode: colorCode })
    })
    return tagInfoList
  }
}
</script>
<page-query>
query {
  allNews: allNews(sortBy: "date") {
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
</page-query>
<style lang="scss" scoped>
@import '../../node_modules/bulma/bulma.sass';

a:link,
a:visited,
a:hover,
a:active {
  color: #636363 !important;
  font-size: 0.8em;
  font-weight: 600;
}
.gutter-item {
  width: 20px;
}
.item {
  width: 30vw;
  margin-bottom: 20px;
  padding: 0px;
  border: 1px solid #e8e7e7;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  .card-content {
    padding: 2px 10px 10px 10px;
  }
  .tags {
    margin: 0px 0px;
  }
  .news-thumbnail {
    margin: 0px;
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
}

@media screen and (max-width: $tablet) {
  .item {
    width: 100%;
  }
}
</style>
