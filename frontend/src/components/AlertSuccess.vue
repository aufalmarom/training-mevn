<template>
    <v-alert v-if="getAlertSuccess.show"
        type="success"
    >
        <v-alert-title>
        {{getAlertSuccess.title}}
        </v-alert-title>
    </v-alert>
</template>

<script>

export default {
  computed: {
        getAlertSuccess () {
            return this.$store.getters.alertSuccess
        }
    }
}
</script>