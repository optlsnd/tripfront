<template>
  <div :class="modalClass" @openPreviewModal="openModal">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content" @click="closeModal">
      <div class="has-text-centered">
        <img :src="cdnUrl" alt="" />
      </div>
      <div
        class="notification is-size-7"
        style="max-width: 300px; margin: auto;"
      >
        <div>Name: {{ asset.name }}</div>
        <div>Type: {{ asset.type }}</div>
        <div>Collection: {{ asset.collection }}</div>
        <div>Uploaded: {{ formatDate(asset.date_uploaded) }}</div>
        <div v-if="asset.description">Description: {{ asset.description }}</div>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="closeModal"
    ></button>
  </div>
</template>

<script>
import { prettyDate } from '~/utils/date.js'

export default {
  props: {
    asset: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    modalClass() {
      return `modal ${this.isOpen ? 'is-active' : ''}`
    },
    cdnUrl() {
      return `https://ucarecdn.com/${
        this.asset.uuid
      }/-/resize/300x/-/format/jpeg/-/quality/lighter/`
    }
  },
  methods: {
    closeModal() {
      this.isOpen = false
    },
    openModal() {
      this.isOpen = true
    },
    formatDate(date) {
      return prettyDate(date)
    }
  }
}
</script>
