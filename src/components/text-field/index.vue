<template>
  <v-text-field
    v-model="model"
    :label="label"
    :rules="rules"
    v-bind="$attrs"
    v-on="$listeners"
  ></v-text-field>
</template>

<script>
import validate from "../../mixins/validate.js"

export default {
  name: "SvTextField",
  mixins: [validate]
}
</script>

<style scoped></style>
