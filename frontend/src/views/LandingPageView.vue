<template>
  <ProjectComponent />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import ProjectComponent from '../components/ProjectComponent.vue';

export default defineComponent({
  name: 'LandingPageView',

  components: {
    ProjectComponent,
  },
});
</script>
