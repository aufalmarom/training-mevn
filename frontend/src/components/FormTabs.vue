<template>
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-text-field
            v-model="firstName"
            class="mb-2"
            clearable
            label="First Name"
          ></v-text-field>
        </v-window-item>

        <v-window-item value="two">
          <v-text-field
            v-model="lastName"
            class="mb-2"
            clearable
            label="Last Name"
          ></v-text-field>
        </v-window-item>

        <v-window-item value="three">
          <v-text-field
            v-model="bornOn"
            class="mb-2"
            clearable
            label="Born On"
          ></v-text-field>
        </v-window-item>
      </v-window>
      <v-btn
        block
        color="success"
        size="large"
        type="button"
        @click="onSubmit"
        variant="elevated"
      >
        Submit
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
      tab: null,
      firstName: '',
      lastName: '',
      bornOn: '',
  }),
  methods: {
    onSubmit() {
      console.log('firstName : ', this.firstName);
      console.log('lastName : ', this.lastName);
      console.log('bornOn : ', this.bornOn);
      this.$store.dispatch('saveForm', {
        firstName: this.firstName,
        lastName: this.lastName,
        bornOn: this.bornOn
      });
    }
  }
}
</script>