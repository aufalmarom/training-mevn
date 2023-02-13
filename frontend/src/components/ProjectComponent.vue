<template>
  <v-row>
    <v-col
      v-for="item in getProject"
      :key="item.id"
      cols="3"
    >
    <v-card
      class="mx-auto pb-10"
      max-width="344"
    >
      <v-img
          :src="`http://localhost:5000/v1/api/projects/photoImage/${item.image}`"
          height="200px"
        ></v-img>

        <v-card-title>
          {{ item.title }}
        </v-card-title>

        <v-card-subtitle>
          {{ item.description }}
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  created(){
    this.$store.dispatch('GetProjectLanding');
  },
  computed:{
    getProject(){
      return this.$store.getters.project
    }
  }
}
</script>