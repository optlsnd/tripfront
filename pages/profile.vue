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
                  <div>Name: {{ loggedInUser.nickname }}</div>
                  <div>Email: {{ loggedInUser.email }}</div>
                  <div>Admin: {{ isAdmin }}</div>
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
    ...mapGetters(['loggedInUser']),
    isAdmin() {
      return this.loggedInUser['https://tripfront.now.sh/user_metadata']
        .tripfront_admin
        ? 'yes'
        : 'no'
    }
  },
  middleware: 'auth'
}
</script>
