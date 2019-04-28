<template>
  <div :class="modalClass">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box box__fixed-width">
        <h2 class="title is-size-5">Add a new collection</h2>
        <hr />
        <form class="form">
          <div class="field">
            <label class="label is-size-7">Name</label>
            <div class="control">
              <input v-model="name" class="input" type="text" required />
            </div>
          </div>
          <div class="field">
            <label class="label is-size-7">Description (optional)</label>
            <div class="control">
              <textarea
                v-model="description"
                class="textarea"
                maxlength="115"
              ></textarea>
            </div>
          </div>
          <div v-show="formValidated" class="field">
            <div class="control">
              <button
                class="button is-info is-fullwidth"
                @click.prevent="addCollection($event)"
              >
                Add
              </button>
            </div>
          </div>
        </form>
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
export default {
  props: {
    isOpen: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      name: '',
      description: ''
    }
  },
  computed: {
    modalClass() {
      return `modal ${this.isOpen ? 'is-active' : ''}`
    },
    formValidated() {
      return this.name.length > 0
    }
  },
  methods: {
    async addCollection(e) {
      const itemToAdd = [
        {
          name: this.name,
          description: this.description
        }
      ]
      e.target.classList.add('is-loading')
      await this.$store.dispatch('collections/ADD_COLLECTION', itemToAdd)
      this.name = ''
      this.description = ''
      e.target.classList.remove('is-loading')
      this.closeModal()
    },
    closeModal() {
      this.$emit('closeCollectionModal')
    }
  }
}
</script>

<style>
.box__fixed-width {
  width: 450px;
  max-width: 450px;
  margin: auto;
}
</style>
