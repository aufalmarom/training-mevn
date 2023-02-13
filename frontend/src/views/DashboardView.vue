<template>
  <Welcome />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Welcome from '../components/Welcome.vue';

export default defineComponent({
  name: 'DashboardView',

  components: {
    Welcome,
  },
});
</script>
