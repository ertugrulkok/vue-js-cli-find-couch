<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>{{ rateP }}€/h</h4>
    <div>
      <base-badge
        v-for="area in areasP"
        :key="area"
        :type-p="area"
        :title-p="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button modeP="outline" link-p :to="lehrerContactLink"
        >Kontaktieren</base-button
      >
      <base-button link-p :to="lehrerDetailsLink">Details</base-button>
    </div>
  </li>
</template>

<script>
import BaseBadge from "../ui/BaseBadge.vue";
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: { BaseButton, BaseBadge },
  props: ["idP", "firstNameP", "lastNameP", "rateP", "areasP"],
  computed: {
    fullName() {
      return this.firstNameP + " " + this.lastNameP;
    },
    lehrerContactLink() {
      return this.$route.path + "/" + this.idP + "/contact";
    },
    lehrerDetailsLink() {
      // herausfinden wohin wir gehen -> kommt von einer komponente
      return this.$route.path + "/" + this.idP;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
