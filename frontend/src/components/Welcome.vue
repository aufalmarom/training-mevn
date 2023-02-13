<template>
    <v-row class="text-center">
      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome ...
        </h1>
        <p class="subheading font-weight-regular">
          This is dashboard page
        </p>
      </v-col>
    </v-row>
</template>

<script>

export default {
  name: 'HelloWorld',
  watch:{
    $route (){
      this.$store.commit("setAlertSuccess",
        {
          title: 'Berhasil disimpan',
          show: false,
        },
      );
    }
  },
}
</script>
