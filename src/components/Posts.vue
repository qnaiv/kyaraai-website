<template>
  <div>
    <ClientOnly>
      <div v-masonry transition-duration="0.3s" item-selector=".item">
        <div v-for="(post, index) in posts" :key="index" v-masonry-tile class="item">
          <g-link :to="'/' + category + '/' + post.node.id">
            <g-image class="thumbnail" :src="post.node.thumbnail" :immediate="true" />
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
@import '~/assets/style/_variables.scss';

.thumbnail {
  width: calc(14vw - #{$main-container-padding-x});
  height: calc(14vw - #{$main-container-padding-x});

  object-fit: cover;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);

  margin: 1vw;
}

@media screen and (max-width: $tablet) {
  .thumbnail {
    width: calc(25vw - #{$main-container-padding-x});
    height: calc(25vw - #{$main-container-padding-x});
  }
}
</style>
