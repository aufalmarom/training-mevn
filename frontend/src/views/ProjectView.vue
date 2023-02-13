<template>
  <ProjectTable />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import ProjectTable from '../components/ProjectTable.vue';

export default defineComponent({
  name: 'ProjectView',

  components: {
    ProjectTable,
  },
});
</script>
