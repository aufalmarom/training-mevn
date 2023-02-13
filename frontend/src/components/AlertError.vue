<template>
    <v-alert v-if="getAlertError.show"
        type="error"
    >
        <v-alert-title>
        {{getAlertError.title}}
        </v-alert-title>
    </v-alert>
</template>

<script>

export default {
  computed: {
        getAlertError () {
            return this.$store.getters.alertError
        }
    }
}
</script>