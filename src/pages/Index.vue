<template>
  <Layout>
    <div class="top-page">
      <RecentNews class="recent-news"></RecentNews>
      <g-image class="top-image" src="~/assets/top.jpg" :immediate="true" />
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
.top-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.recent-news {
  margin-bottom: 10px;
}
</style>
