<template>
  <ProjectForm />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import ProjectForm from '../components/ProjectForm.vue';

export default defineComponent({
  name: 'ProjectCreateView',
  components: {
    ProjectForm,
  },
});
</script>
