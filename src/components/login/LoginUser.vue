<template>
  <div class="login-wrapper">
    <label for="login">User</label>
    <input type="text" id="login" v-model="user" />
    <base-button @click="login" modeP="login">Login</base-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "l1",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.user);
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  max-width: 300px;
/*   border: 2px solid rgb(255, 255, 255); */
  border-radius: 20px;
  padding: 1rem;
  color: white;
}

label {
  text-transform: uppercase;
  margin-right: 1rem;
}

#login {
  padding: 2px;
  border-radius: 5px;
}

</style>
