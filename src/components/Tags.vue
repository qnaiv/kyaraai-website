<template>
  <div>
    <span v-for="(tag, index) in tags" :key="index" class="tag" :style="{ backgroundColor: tag.colorCode }">
      {{ tag.tagName }}
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

export interface TagInfo {
  tagName: string
  colorCode: string
}

@Component
export default class Tags extends Vue {
  @Prop({ required: true })
  tags!: Array<TagInfo>
}
</script>

<style lang="scss" scoped>
.tag {
  color: white;
  background-color: orange;
  padding: 1px 9px;
  border-radius: 20px;
  font-size: 0.7em;
  min-width: 43px;
  display: inline-block;
  text-align: center;
}
</style>
