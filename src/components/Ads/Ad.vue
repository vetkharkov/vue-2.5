<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-media :src="ad.imageSrc" height="300px"></v-card-media>
          <v-card-text>
            <h1 class="text--primary">{{ ad.title }}</h1>
            <p>{{ ad.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <addEditAdModal :ad="ad" v-if="isOwner"></addEditAdModal>
            <app-buy-modal :ad="ad"></app-buy-modal>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal'

export default {
  props: ['id'],
  computed: {
    ad() {
      const id = this.id
      return this.$store.getters.adById(id)
    },
    loading() {
      return this.$store.getters.loading
    },
    isOwner() {
      return this.ad.ownerId === this.$store.getters.user.id
    }
  },
  components: {
    addEditAdModal: EditAdModal
  }
}
</script>
