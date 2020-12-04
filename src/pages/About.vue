<template>
  <Layout>
    <div class="content" v-html="$page.profiles.edges[0].node.content" />
  </Layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class About extends Vue {}
</script>
<page-query>
query {
  profiles: allAbout {
    edges {
      node {
        id
        content
      }
    }
  }
}
</page-query>
