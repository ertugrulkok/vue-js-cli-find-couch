<template>
  <section>
    <base-card>
      <h2>{{ fullNameP }}</h2>
      <h3>{{ rateP }}€/h</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areasP"
        :key="area"
        :type-p="area"
        :title-p="area"
      ></base-badge>
      <p>{{ descriptionP }}</p>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Bei Interesse gerne melden!!!</h2>
        <base-button link-p :to="contactTeacherLink">Kontakt</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
</template>

<script>
export default {
  // herausfinden wo wir sind -> kommt direkt vom router
  props: ["id"],
  data() {
    return {
      selectedLehrer: null,
    };
  },
  computed: {
    fullNameP() {
      console.log(this.id);
      return this.selectedLehrer.firstName + " " + this.selectedLehrer.lastName;
    },
    rateP() {
      return this.selectedLehrer.hourlyRate;
    },
    contactTeacherLink() {
      return this.$route.path + "/" + "contact";
    },
    areasP() {
      return this.selectedLehrer.areas;
    },
    descriptionP() {
      return this.selectedLehrer.description;
    },
  },
  created() {
    this.selectedLehrer = this.$store.getters["lehrerKey/lehrer"].find(
      (lehrer) => lehrer.id === this.id
    );
  },
};
</script>
