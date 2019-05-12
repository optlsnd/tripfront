<template>
  <nav class="navbar is-light">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item">Tripfront</div>
        <!-- <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button> -->
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div
            v-if="isAuthenticated"
            class="navbar-item has-dropdown is-hoverable"
          >
            <a class="navbar-link">
              <i class="fas fa-user"></i>&nbsp;{{ loggedInUser.name }}
            </a>
            <div class="navbar-dropdown">
              <nuxt-link class="navbar-item" to="/dashboard">
                Dashboard
              </nuxt-link>
              <nuxt-link class="navbar-item" to="/settings">
                Settings
              </nuxt-link>
              <nuxt-link class="navbar-item" to="/profile">
                Profile
              </nuxt-link>
              <hr class="navbar-divider" />
              <a class="navbar-item" @click="logout">Sign out</a>
            </div>
          </div>
          <template v-else>
            <div class="navbar-item">
              <a href="" @click.prevent="login">Sign in</a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import { webAuth } from '~/utils/auth0'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      webAuth.logout({
        federated: true
      })
    },

    async login() {
      try {
        await this.$auth.loginWith('auth0')
      } catch (e) {
        this.error = e.response.data.error.message
      }
    }
  }
}
</script>
