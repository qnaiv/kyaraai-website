<template>
  <Layout>
    <h1 class="title">Contact</h1>
    <form name="contact" method="POST" data-netlify="true" @submit.prevent="handleSubmit">
      <div class="field">
        <label class="label">お名前</label>
        <div class="control">
          <input v-model="formData.name" class="input" type="text" name="name" />
        </div>
      </div>
      <div class="field">
        <label class="label">メールアドレス</label>
        <div class="control">
          <input v-model="formData.email" class="input" type="email" name="email" />
        </div>
      </div>
      <div class="field">
        <label class="label">件名</label>
        <div class="control">
          <input v-model="formData.subject" class="input" type="text" name="subject" />
        </div>
      </div>
      <div class="field">
        <label class="label">内容</label>
        <div class="control">
          <textarea v-model="formData.message" class="textarea" name="message" />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-link has-text-white">送信</button>
        </div>
      </div>
    </form>
  </Layout>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class Contact extends Vue {
  formData = {}
  handleSubmit(e: any): void {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this._encode({
        'form-name': e.target.getAttribute('name'),
        ...this.formData,
      }),
    })
      .then(() => this.$router.push('/send-success'))
      .catch((error) => alert(error))
  }
  _encode(data: any) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
}
</script>
<style></style>
