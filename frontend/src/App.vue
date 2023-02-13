<template>
  <v-app>
    <v-main>
      <SidebarComponent/>
      <v-container>
        <BreadCrumb />
        <AlertSuccess />
        <AlertError />
        <router-view class="mt-4"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SidebarComponent from './components/SidebarComponent.vue';
import BreadCrumb from './components/BreadCrumb.vue';
import AlertSuccess from './components/AlertSuccess.vue';
import AlertError from './components/AlertError.vue';

export default {
  name: 'App',
  components:{
    SidebarComponent,
    BreadCrumb,
    AlertSuccess,
    AlertError
  },
}
</script>
