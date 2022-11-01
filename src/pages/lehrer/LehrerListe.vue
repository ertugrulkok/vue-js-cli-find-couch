<template>
  <section>
    <lehrer-filter @change-filter="setFilters"></lehrer-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode-p="outline" @click="loadLehrer(true)"
          >Aktualisieren</base-button
        >
        <base-button v-if="!isLehrer" link-p to="/registration"
          >Registrieren</base-button
        >
      </div>
      <ul v-if="hasLehrer">
        <lehrer-item
          v-for="lehrer in filteredLehrer"
          :key="lehrer.id"
          :idP="lehrer.id"
          :first-name-p="lehrer.firstName"
          :last-name-p="lehrer.lastName"
          :rate-p="lehrer.hourlyRate"
          :areas-p="lehrer.areas"
        ></lehrer-item>
      </ul>
      <h3 v-else>Es sind keine Lehrer registriert</h3>
    </base-card>
  </section>
</template>

<script>
import LehrerItem from "../../components/lehrer/LehrerItem.vue";
import LehrerFilter from "@/components/lehrer/LehrerFilter.vue";
export default {
  components: {
    LehrerItem,
    LehrerFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        consulting: true,
      },
      isLoading: false,
      error: null,
    };
  },
  computed: {
    filteredLehrer() {
      const lehrer = this.$store.getters["lehrerKey/lehrer"]; // ['namespacedKey / getternName']
      return lehrer.filter((lehrer) => {
        if (this.activeFilters.frontend && lehrer.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && lehrer.areas.includes("backend")) {
          return true;
        }
        if (
          this.activeFilters.consulting &&
          lehrer.areas.includes("consulting")
        ) {
          return true;
        }
        return false;
      });
    },
    hasLehrer() {
      return this.$store.getters["lehrerKey/hasLehrer"];
    },
    isLehrer() {
      return this.$store.getters["lehrerKey/isLehrer"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadLehrer(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("lehrerKey/loadLehrer", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scroped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
