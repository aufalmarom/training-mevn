<template>
  <v-card>
    <v-card-title>
      <v-col class="d-flex justify-space-between">
        <h1 class="display-2 font-weight-bold mb-3">
          Project Management Page
        </h1>
          <v-btn
            class="ma-2"
            color="primary"
            prepend-icon="mdi-pencil"
            @click="create"
          >
            new project
          </v-btn>
        </v-col>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="$store.getters.project"
      :search="search"
      :items-per-page="5"
      v-if="$store.getters.project"
    >
      <template v-slot:item="data" >
          <tr>
            <td>{{data.item.raw.title}}</td>
            <td>
              <v-img
                :src="`http://localhost:5000/v1/api/projects/photoImage/${data.item.raw.image}`"
                height="70px"
              ></v-img>
            </td>
            <td>{{data.item.raw.description}}</td>
            <td class="text-center">
              
              <v-btn prepend-icon="mdi-pencil" class="mr-2" color="warning" size="small" @click="Edit(data.item.raw.id)">
                Edit
              </v-btn>
              <v-btn prepend-icon="mdi-delete" color="error" size="small" @click="Delete(data.item.raw.id)">
                Delete
              </v-btn>
            </td>
          </tr>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
  export default {
    created(){
      this.$store.dispatch("GetProjectManagement");
    },
    methods:{
      Edit(id){
        this.$store.commit("setBreadCrumb", [
          {
            text: 'Dashboard',
            disabled: true,
          },
          {
            text: 'Project',
            disabled: true,
          },
          {
            text: 'Edit',
            disabled: true,
          },
        ]);
        this.$router.push(`/project/${id}`);
        this.$store.dispatch("GetProjectById",id)
      },
      Delete(id){
        this.$store.dispatch("DeleteProject",id);
      },
      imageURL(photoImage){
        const Url = `http://localhost:5000/v1/api/projects/photoImage/${photoImage}`;
        return Url;
      },
      create () {
        this.$store.dispatch('GetProjectManagement');
        this.$store.commit("setBreadCrumb", [
          {
            text: 'Dashboard',
            disabled: true,
          },
          {
            text: 'Project',
            disabled: true,
          },
          {
            text: 'Create',
            disabled: true,
          },
        ]);
        this.$router.push('/project/create');
      }
    },
    data () {
      return {
        search: '',
        headers: [
          {
            key: 'title',
            title: 'Title',
          },
          { key: 'image', title: 'Image', align: 'middle' },
          { key: 'description', title: 'Description' },
        ],
        page: 1,
        limit:10,
      }
    },
    watch:{
      $route (){
        this.$store.commit("setAlertSuccess",
          {
            show: false,
          },
        );
      }    
    } 
  }
</script>

<style>
  .search{
    min-width: 300px;
    display: flex;
  }
  .page{
    min-width: 500px;
  }
  .select {
    max-width: 80px;
  }
  </style>