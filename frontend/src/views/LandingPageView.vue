<template>
  <ProjectComponent />
  <FormTabs />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import ProjectComponent from '../components/ProjectComponent.vue';
import FormTabs from '../components/FormTabs.vue';

export default defineComponent({
  name: 'LandingPageView',

  components: {
    ProjectComponent,
    FormTabs
  },
});
</script>
