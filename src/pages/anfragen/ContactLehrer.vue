<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Email-Adresse</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Nachricht</label>
      <textarea id="message" rows="5" v-model.trim="message"></textarea>
    </div>
    <p class="errors" v-if="!isValid">
      Bitte überprüfen Sie Ihre Eingaben. Es dürfen keine leere Nachrichten
      versendet werden.
    </p>
    <div class="actions">
      <base-button>Senden</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      isValid: true,
    };
  },
  methods: {
    submitForm() {
      this.isValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === ""
      ) {
        this.isValid = false;
        return;
      }

      const information = {
        email: this.email,
        message: this.message,
        lehrerId: this.$route.params.id,
      };

      // console.log(information.lehrerId);
      // console.log(this.$route);
      // console.log(this.$route.params);

      this.$store.dispatch("anfragenKey/contactLehrer", information);

      this.$router.replace('/lehrer')
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
