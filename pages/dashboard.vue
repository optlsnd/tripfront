<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
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
        <div class="columns">
          <div class="column is-one-quarter">
            <div class="field">
              <label class="label is-small">Find by name</label>
              <div class="control has-icons-left">
                <input
                  v-model="nameFilter"
                  class="input
                  is-small"
                  type="text"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-filter"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="column is-one-third">
            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label is-small">Filter by collection</label>
                  <div class="control has-icons-left">
                    <div class="select is-small">
                      <select v-model="filterCollections">
                        <option value="">All collections</option>
                        <option
                          v-for="(col, i) in collections"
                          :key="i"
                          :value="col.name"
                        >
                          {{ col.name }}
                        </option>
                      </select>
                    </div>
                    <div class="icon is-small is-left">
                      <i class="fas fa-filter"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <label class="label is-small">Filter by type</label>
                  <div class="control">
                    <label class="checkbox is-size-7">
                      <input v-model="filterFrames" type="checkbox" />
                      Frames
                    </label>
                    <label class="checkbox is-size-7">
                      <input v-model="filterBorders" type="checkbox" />
                      Borders
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <AssetsTable
      :name-filter="nameFilter"
      :filter-frames="filterFrames"
      :filter-borders="filterBorders"
      :filter-collections="filterCollections"
    />
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
import { mapGetters } from 'vuex'

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
      nameFilter: '',
      filterFrames: true,
      filterBorders: true,
      filterCollections: ''
    }
  },
  computed: {
    ...mapGetters({
      collections: 'collections/collections'
    })
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
