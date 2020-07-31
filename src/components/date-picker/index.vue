<template>
  <v-dialog
    ref="dialog"
    v-model="visible"
    :return-value.sync="date"
    width="300px"
  >
    <template v-slot:activator="{ on }">
      <sv-text-field
        :value="dateLocale"
        :label="$t(label)"
        v-on="on"
        v-bind="$attrs"
        readonly
      ></sv-text-field>
    </template>
    <v-date-picker
      v-model="date"
      :locale="locale"
      :type="type"
      :color="color"
      v-bind="$attrs"
    >
      <v-spacer></v-spacer>
      <v-btn @click="visible = false" text>Cancel</v-btn>
      <v-btn @click="onSave" text>OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  name: "SvDatePicker",
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "date"
    },
    color: {
      type: String,
      default: "black"
    }
  },
  data() {
    return {
      visible: false,
      date: this.value
    }
  },
  computed: {
    locale() {
      return this.$i18n.locale
    },
    dateLocale() {
      if (!this.value) return ""

      if (this.type === "month") {
        return this.$moment(this.value)
          .locale(this.locale)
          .format("MMMM YYYY")
      } else {
        return this.$formatLocaleTime({ date: this.value })
      }
    }
  },
  watch: {
    visible(value) {
      if (!value) return
      this.date = this.value
    }
  },
  methods: {
    onSave() {
      this.$emit("input", this.date)
      this.visible = false
    }
  }
}
</script>

<style scoped></style>
