<template>
  <base-card>
    <h2>Finde deinen Lehrer</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="consulting" checked @change="setFilter" />
      <label for="consulting">consulting</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        consulting: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      //console.log(event);
      const inputID = event.target.id;
      const isChecked = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputID]: isChecked,
      };
      // console.log(this.filters);
      this.filters = updatedFilters;
      // console.log(updatedFilters);
      // console.log(this.filters);
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
