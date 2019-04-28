<template>
  <section class="hero is-info is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Tripfront CMS</h1>
        <h2 class="subtitle">
          Sign in to proceed to the dashboard.
        </h2>
        <p class="content">
          Tripfront is a CMS for managing assets for the
          <a
            class="has-text-light"
            href="https://triptych.store/"
            style="text-decoration: underline;"
          >
            Triptych</a
          >
          Shopify store.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'guest'
}
</script>
