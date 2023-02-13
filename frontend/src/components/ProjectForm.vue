<template>
  <h1 class="display-2 font-weight-bold mb-3" v-if="!$route.params.id">
     Create New Project
  </h1>
  <h1 class="display-2 font-weight-bold mb-3" v-else>
     Update Project
  </h1>
  <form>
      <v-img :src="imageUrl" height="200" v-if="imageUrl"></v-img>
    <v-file-input label="File Image"  accept="image/*" @change="uploadImage" :clearable="false" v-if="!imageUrl"></v-file-input>
    <v-text-field
      v-model= "title"
      label="Title"
    ></v-text-field>

    <v-textarea label="Description" v-model="description"></v-textarea>
    <v-btn
      prepend-icon="mdi-arrow-left"
      color="orange-darken-2"
      class="me-4"
      @click="Kembali"
    >
      Cancel
    </v-btn>
    <v-btn
      prepend-icon="mdi-content-save"
      color="primary"
      class="me-4"
      @click="save"
      v-if="!$route.params.id"
    >
      Simpan
    </v-btn>
    <v-btn
      prepend-icon="mdi-content-save"
      color="primary"
      class="me-4"
      @click="update"
      v-else
    >
      Update
    </v-btn>
  </form>
</template>

<script>
import { useRoute } from 'vue-router'
import randomstring from 'randomstring'

  export default {
    created(){
      const route = useRoute()
      if(route.params.id){
        this.$store.dispatch("GetProjectById",route.params.id).then(()=>{
          this.title = this.$store.getters.projectEdit.title
          this.description = this.$store.getters.projectEdit.description
          this.imageUrl = `http://localhost:5000/v1/api/projects/photoImage/${this.$store.getters.projectEdit.image}`
        })
      }
    },
    watch:{
      $route (){
          this.$store.commit("setAlertError",
            {
              title: 'Berhasil disimpan',
              show: false,
            },
          );
      }
    },
    data : () => ({
      imageUrl:null,
      imageUpload: null,
      title:null,
      description: null
    }),
    computed:{
      getFileExt(){
        const length  = this.imageUpload.name.split('.').length;
        return this.imageUpload.name.split('.')[length-1].toLowerCase();
      }
    },
    methods:{
        Kembali(){
          this.$store.commit("setBreadCrumb", [
            {
              text: 'Dashboard',
              disabled: true,
            },
            {
              text: 'Project',
              disabled: true,
            },
          ]);
          this.$router.push('/project')
        },  
        uploadImage(event){
          this.$store.commit("setAlertError",{
            show: false
          })
          this.imageUpload = event.target.files[0];
          if(this.getFileExt !== "png" && this.getFileExt !== "jpeg" && this.getFileExt !== "jpg"){
            this.$store.commit("setAlertError",{
              title: "Format file harus .jpg, .jpeg, atau .png",
              show: true
            });
            this.imageUpload = null;
          }
        },
        save () {
          if(!this.imageUpload || !this.title || !this.description){
            this.$store.commit("setAlertError",{
              title: 'Semua field harus di isi',
              show: true,
            });
            return;
          }
          this.$store.dispatch("CreateProject",{
            fileName: randomstring.generate(10),
            title: this.title,
            image: this.imageUpload,
            description: this.description
          }).then(()=>{
            this.$router.push('/project')
          })
       },
       update () {
          if(!this.title || !this.description){
            this.$store.commit("setAlertError",{
              title: 'Semua field harus di isi',
              show: true,
            });
            return;
          }
          this.$store.dispatch("UpdateProject",{
            title: this.title,
            description: this.description,
            id: this.$route.params.id
          }).then(()=>{
            this.$router.push('/project')
          })
       }
    },
  }
</script>
