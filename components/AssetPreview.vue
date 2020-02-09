<template>
  <div :class="modalClass" @openPreviewModal="openModal">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content" @click="closeModal">
      <div class="has-text-centered">
        <img :src="previewUrl" alt="" />
      </div>
      <div
        class="notification is-size-7"
        style="max-width: 300px; margin: auto;"
      >
        <div class="content">
          <dl>
            <li>Name: {{ asset.name || 'untitled' }}</li>
            <li>Type: {{ asset.type || 'no type' }}</li>
            <li>Orientation: {{ asset.orientation || 'no orientation' }}</li>
            <li>Collection: {{ asset.collection || 'not in collection' }}</li>
            <li>
              Uploaded: {{ formatDate(asset.date_uploaded) || 'unknown' }}
            </li>
            <li>Description: {{ asset.description || 'no description' }}</li>
          </dl>
          <a :href="originalUrl" class="is-size-6">Download</a>
        </div>
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
    previewUrl() {
      return `https://ucarecdn.com/${
        this.asset.uuid
      }/-/resize/300x/-/format/jpeg/-/quality/lighter/-/progressive/yes/`
    },
    originalUrl() {
      return `https://ucarecdn.com/${this.asset.uuid}/-/inline/no/`
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
