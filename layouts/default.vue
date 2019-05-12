<template>
  <div class="site">
    <Navbar />
    <div class="site__content">
      <nuxt />
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p class="is-size-7">
          Tripfront CMS. All rights reserved. 2019
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
} */

/* *,
*:before,
*:after {
  box-sizing: border-box;
} */

.footer,
.section {
  padding: 1rem;
}

.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site__content {
  flex: 1;
}

label .checkbox {
  user-select: none;
}
</style>
