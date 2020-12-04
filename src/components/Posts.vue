<template>
  <div>
    <ClientOnly>
      <div v-masonry transition-duration="0.3s" item-selector=".item">
        <div v-for="post in posts" :key="post.id" v-masonry-tile class="item">
          <g-link :to="'/' + category + '/' + post.node.id">
            <g-image class="thumbnail" :src="post.node.thumbnail" />
          </g-link>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class Posts extends Vue {
  @Prop({ required: true })
  category!: string

  @Prop({ required: true })
  posts!: Array<any>
}
</script>
<style lang="scss" scoped>
.thumbnail {
  width: 200px;
  height: 200px;
  object-fit: cover;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);

  margin: 10px;
}
</style>
