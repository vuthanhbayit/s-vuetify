<template>
  <v-overlay :value="visible" :zIndex="99">
    <v-progress-circular
      indeterminate
      size="64"
      color="black"
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: "SvLoading",
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style scoped></style>
