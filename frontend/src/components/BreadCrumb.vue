<template>
    <div>
      <v-breadcrumbs>
          <v-breadcrumbs-item
              v-for="(item, i) in getBreadCrumb" :key="i"
            :disabled="item.disabled"
          >
            {{ item.text }} /
          </v-breadcrumbs-item>
      </v-breadcrumbs>
    </div>
  </template>
  

<script>
export default {
    computed: {
        getBreadCrumb () {
            return this.$store.getters.breadcrumb
        }
    }
}
</script>