<template>
  <v-textarea
    v-model="model"
    :label="label"
    :rules="rules"
    v-bind="$attrs"
    v-on="$listeners"
  ></v-textarea>
</template>

<script>
import validate from "../../mixins/validate.js"

export default {
  name: "SvTextarea",
  mixins: [validate]
}
</script>

<style scoped></style>
