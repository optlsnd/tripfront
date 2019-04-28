<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter">
            <div class="field">
              <label class="label is-small">Find by name</label>
              <div class="control">
                <input
                  v-model="nameFilter"
                  class="input
                  is-small"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <label class="label is-small">Actions</label>
            <div>
              <button
                class="button is-info is-small"
                @click="assetModalOpen = true"
              >
                <span class="icon">
                  <i class="fas fa-plus"></i>
                </span>
                <span>Add asset</span>
              </button>
              <button
                class="button is-info is-small"
                @click="collectionModalOpen = true"
              >
                <span class="icon">
                  <i class="fas fa-plus"></i>
                </span>
                <span>Add collection</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AssetsTable :name-filter="nameFilter" />
    <AddNewForm :is-open="assetModalOpen" @closeAssetModal="closeAssetModal" />
    <AddCollection
      :is-open="collectionModalOpen"
      @closeCollectionModal="closeCollectionModal"
    />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import AssetsTable from '~/components/AssetsTable'
import AddNewForm from '~/components/AddNewForm'
import AddCollection from '~/components/AddCollection'

export default {
  components: {
    AssetsTable,
    AddNewForm,
    AddCollection
  },
  data() {
    return {
      assetModalOpen: false,
      collectionModalOpen: false,
      nameFilter: ''
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('assets/GET_ASSETS')
    await store.dispatch('collections/GET_COLLECTIONS')
  },
  methods: {
    closeAssetModal() {
      this.assetModalOpen = false
    },
    closeCollectionModal() {
      this.collectionModalOpen = false
    }
  },
  middleware: 'auth'
}
</script>
