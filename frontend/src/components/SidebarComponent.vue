<template>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title style="cursor: pointer" @click="Home" >MEVN Exercise</v-toolbar-title>
        
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="left"
        permanent
      >
        <v-list>
          <div v-for="(item, i) in items" :key="i">
            <v-list-item :to="item.link" link v-if="!getToken && item.title == 'Login'">
              <v-list-item-title @click="updateBreadCrumb(item.breadcrumb)">{{item.title}}</v-list-item-title>
            </v-list-item>
            <v-list-item :to="item.link" link v-if="getToken && item.title !== 'Login'">
              <v-list-item-title @click="updateBreadCrumb(item.breadcrumb)">{{item.title}}</v-list-item-title>
            </v-list-item>
          </div>
        </v-list>
        <v-row class="text-center">
          <v-col>
            <v-btn 
              variant="flat"
              color="error"
              @click="logout"
              v-if="getToken"
            >
                Logout
            </v-btn>
          </v-col>
        </v-row>
      </v-navigation-drawer>
</template>

<script>

  export default {
    created(){
      this.$store.commit("setToken",localStorage.getItem('user'))
    },
    methods:{
      updateBreadCrumb (data) {
        this.$store.commit("setBreadCrumb", data);
      },
      logout(){
        this.$store.dispatch("Logout")
        setTimeout(() => {
          this.$store.commit("setAlertSuccess",{
            show: false
          })
        }, 2000);
      },
      Home () {
        this.$store.commit("setBreadCrumb", [{
          text: 'Landing Page',
          disabled: true,
        }]);
        this.$router.push('/');
      },
    },
    computed:{
      getToken(){
        return this.$store.getters.token;
      }
    },
    data: () => ({
      drawer: false,
      group: null,
      items: [
        {
          title: 'Dashboard',
          link:"/dashboard",
          breadcrumb: [
              {
                text: 'Dashboard',
                disabled: true,
              }
          ]
        },
        {
          title: 'Project',
          link:"/project",
          breadcrumb: [
              {
                text: 'Dashboard',
                disabled: true,
              },
              {
                text: 'Project',
                disabled: true,
              }
          ]
        },
        {
          title: 'Login',
          value: 'bar',
          link:"/login",
          breadcrumb: [
              {
                text: 'Landing Page',
                disabled: true,
              },
              {
                text: 'Login',
                disabled: true,
              }
          ]
        },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>