<template>
  <div :class="modalClass">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box box__fixed-width">
        <h2 class="title is-size-5">Add a new asset</h2>
        <hr />
        <form class="form">
          <div class="field">
            <label class="label is-size-7">Image</label>
            <div class="control">
              <input
                class="input"
                type="hidden"
                role="uploadcare-uploader"
                :data-public-key="publicKey"
                :data-tabs="ucTabs"
                data-images-only
              />
            </div>
          </div>
          <div class="field">
            <label class="label is-size-7">Type</label>
            <div class="control">
              <div class="select">
                <select v-model="type">
                  <option value="frame" selected>Frame</option>
                  <option value="border">Border</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label is-size-7">Collection</label>
            <div class="control">
              <div class="select">
                <select v-model="collection">
                  <option
                    v-for="(col, i) in collections"
                    :key="i"
                    :value="col.name"
                  >
                    {{ col.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label is-size-7">Name</label>
            <div class="control">
              <input v-model="name" class="input" type="text" />
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
                @click.prevent="addAsset($event)"
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
import uploadcare from 'uploadcare-widget'
import { mapGetters } from 'vuex'

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
      uuid: '',
      name: '',
      collection: '',
      description: '',
      type: 'frame',
      publicKey: 'demopublickey',
      ucTabs: 'file',
      widget: null
    }
  },
  computed: {
    ...mapGetters({
      collections: 'collections/collections'
    }),
    formValidated() {
      return this.uuid.length > 0 && this.name.length > 0
    },
    modalClass() {
      return `modal ${this.isOpen ? 'is-active' : ''}`
    }
  },
  mounted() {
    this.collection = this.collections[0].name
    this.widget = uploadcare.Widget('[role=uploadcare-uploader]')
    this.widget.onUploadComplete(info => {
      this.uuid = info.uuid
    })
  },
  methods: {
    async addAsset(e) {
      const itemToAdd = [
        {
          type: this.type,
          uuid: this.uuid,
          name: this.name,
          collection: this.collection,
          description: this.description
        }
      ]
      e.target.classList.add('is-loading')
      await this.$store.dispatch('assets/ADD_ASSET', itemToAdd)
      this.widget.value(null)
      this.uuid = ''
      this.name = ''
      this.description = ''
      e.target.classList.remove('is-loading')
      this.closeModal()
    },
    closeModal() {
      this.$emit('closeAssetModal')
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

input[role='uploadcare-uploader'] {
  display: none;
}
</style>
