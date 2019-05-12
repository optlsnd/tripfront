<template>
  <div class="site">
    <Navbar />
    <div class="site__content">
      <nuxt />
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p class="is-size-7">
          Tripfront CMS. 2019. <a href="mailto:optlsnd@gmail.com">Contact us</a>
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

.cb-large {
  transform: scale(1.25);
}
</style>
