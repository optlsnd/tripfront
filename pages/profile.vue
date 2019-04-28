<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img :src="loggedInUser.picture" alt="userpic" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-5">Name: {{ loggedInUser.nickname }}</p>
                  <p class="subtitle is-6">Email: {{ loggedInUser.email }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loggedInUser'])
  },
  middleware: 'auth'
}
</script>
