<template>
  <section class="section">
    <div class="container is-size-7">
      <table class="table is-hoverable is-fullwidth align-vertical">
        <thead>
          <tr>
            <th style="width: 20px;"></th>
            <th style="width: 80px;">Preview</th>
            <th style="width: 80px;">Type</th>
            <th style="width: 160px;">Name</th>
            <th style="width: 240px;">Collection</th>
            <th>Description</th>
            <th class="has-text-centered" style="width: 80px;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(asset, i) in assetsFiltered" :key="i">
            <td class="has-text-centered">
              <input type="checkbox" />
            </td>
            <td class="has-text-centered">
              <img
                :src="generateThumb(asset.uuid)"
                :alt="asset.name"
                class="image-thumbnail"
                @click="showPreview(asset)"
              />
            </td>
            <td>{{ asset.type }}</td>
            <td>
              <strong>{{ asset.name }}</strong>
            </td>
            <td>{{ asset.collection }}</td>
            <!-- <td>{{ asset.uuid }}</td> -->
            <td>{{ asset.description }}</td>
            <!-- <td>{{ asset.date_uploaded }}</td> -->
            <td class="has-text-centered">
              <button
                href=""
                class="button is-small"
                @click.prevent="deleteAsset(asset.uuid, $event)"
              >
                <span class="icon">
                  <i class="fas fa-trash"></i>
                </span>
                <span>Delete</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <AssetPreview ref="previewModal" :asset="assetToPreview" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import AssetPreview from '~/components/AssetPreview'

export default {
  components: {
    AssetPreview
  },
  props: {
    nameFilter: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      assetToPreview: {}
    }
  },
  computed: {
    ...mapGetters({
      assets: 'assets/uploadedAssets'
    }),
    assetsFiltered() {
      return this.$store.state.assets.assets.filter(asset => {
        const f = this.nameFilter.toLowerCase()
        return asset.name.toLowerCase().indexOf(f) > -1
      })
    }
  },
  methods: {
    async deleteAsset(uuid, e) {
      if (confirm('Are you sure?')) {
        e.target.closest('button').classList.add('is-loading')
        await this.$store.dispatch('assets/DELETE_ASSET', uuid)
        e.target.closest('button').classList.remove('is-loading')
      }
    },
    showPreview(asset) {
      this.assetToPreview = asset
      this.$refs.previewModal.openModal()
    },
    generateThumb(uuid) {
      return `https://ucarecdn.com/${uuid}/-/preview/-/crop/120x120/0,0/-/resize/60x/-/enhance/-/format/auto/`
    }
  }
}
</script>

<style>
.image-thumbnail {
  border-radius: 5px;
  cursor: pointer;
}
.align-vertical td {
  vertical-align: middle !important;
}
</style>
