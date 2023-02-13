<template>
      <v-row class="text-center">
        <v-col>
          <h1 class="display-2 font-weight-bold mb-3">
            Login
          </h1>
        </v-col>
      </v-row>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
        >
          <v-text-field
            v-model="username"
            :rules="[required]"
            class="mb-2"
            clearable
            label="Username"
          ></v-text-field>
  
          <v-text-field
            v-model="password"
            :rules="[required]"
            clearable
            label="Password"
            type="password"
            placeholder="Enter your password"
          ></v-text-field>
  
          <br>
  
          <v-btn
            :disabled="!form"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
          >
            Sign In
          </v-btn>
        </v-form>
      </v-card>
</template>

<script>
// import axios from "axios";
export default {
  data: () => ({
    form: false,
    username: null,
    password: null,
  }),

  methods: {
    onSubmit (){
      this.$store.dispatch('Login',{
        username: this.username,
        password: this.password
      })
      setTimeout(() => {
          this.$store.commit("setAlertSuccess",{
            show: false
          })
        }, 2000);
    },
    required (v) {
      return !!v || 'Field is required'
    },
  },
}
</script>