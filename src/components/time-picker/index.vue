<template>
  <v-dialog
    ref="dialog"
    v-model="visible"
    :return-value.sync="time"
    width="400px"
  >
    <template v-slot:activator="{ on }">
      <sv-text-field
        v-model="time"
        :label="$t(label)"
        v-on="on"
        v-bind="$attrs"
        readonly
      ></sv-text-field>
    </template>
    <v-time-picker
      v-if="visible"
      v-model="time"
      format="24hr"
      full-width
      :color="color"
      v-bind="$attrs"
    >
      <v-spacer></v-spacer>
      <v-btn @click="visible = false" text>Cancel</v-btn>
      <v-btn @click="$refs.dialog.save(time)" text>OK</v-btn>
    </v-time-picker>
  </v-dialog>
</template>

<script>
export default {
  name: "SvTimePicker",
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "black"
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    time: {
      get() {
        return this.value
      },
      set(value) {
        return this.$emit("input", value)
      }
    }
  }
}
</script>

<style scoped></style>
