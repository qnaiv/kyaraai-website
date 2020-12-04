<template>
  <Layout>
    <div class="top-page">
      <RecentNews class="recent-news"></RecentNews>
      <g-image class="top-image" src="~/assets/top.jpg" />
    </div>
  </Layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import RecentNews from '../components/RecentNews.vue'

@Component({
  components: {
    RecentNews,
  },
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.top-page {
  width: 100%;
  // padding: 10px 0 0 0px;
}
.top-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.recent-news {
  margin-bottom: 30px;
}
</style>
