<template>
  <section>
    <base-card>
      <h2>Registriere dich als Lehrer</h2>
      <lehrer-form @save-data="saveData"></lehrer-form>
    </base-card>
  </section>
  <!--   <p>{{ alleLehrer }}</p> -->
</template>

<script>
import LehrerForm from "@/components/lehrer/LehrerForm.vue";
import { mapState } from "vuex";

export default {
  components: {
    LehrerForm,
  },
  methods: {
    saveData(data) {
      // console.log(data);
      this.$store.dispatch("lehrerKey/registerLehrer", data);
      this.$router.replace("/lehrer");
      // console.log(this.alleLehrer);
    },
  },
  computed: {
    ...mapState({
      // alleLehrer: (state) => state.lehrerKey.lehrer,
    }),
  },
};
</script>
