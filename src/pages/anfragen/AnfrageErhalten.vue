<template>
  <base-dialog
    :show="!!error"
    title="Ein Fehler ist aufgetreten"
    @close="handleError"
  >
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Eingegangene Anfragen</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hatAnfragen && !isLoading">
        <anfragen-item
          v-for="req in erhalteneAnfragen"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></anfragen-item>
      </ul>
      <h3 v-else>Du hast keine Nachrichten erhalten</h3>
    </base-card>
  </section>
</template>

<script>
import AnfragenItem from "@/components/anfragen/AnfragenItem.vue";
export default {
  components: {
    AnfragenItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    erhalteneAnfragen() {
      return this.$store.getters["anfragenKey/anfragen"];
    },
    hatAnfragen() {
      return this.$store.getters["anfragenKey/hatAnfragen"];
    },
  },
  created() {
    this.loadAnfragen();
  },
  methods: {
    async loadAnfragen() {
      this.isLoading = true;

      try {
        await this.$store.dispatch("anfragenKey/fetchAnfragen");
      } catch (error) {
        this.error = error.message || "Daten konnten nicht geladen werden";
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
