<template>
  <div class="container has-text-centered" style="margin-top: 2rem;">
    <h1 class="title">An error occured &#128546;</h1>
    <p v-if="error.statusCode === 404">Page not found</p>
    <p v-else class="has-text-danger">{{ error.message }}</p>
    <nuxt-link to="/">Back</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>
