<template>
  <v-text-field
    v-model.lazy="number"
    v-money="money"
    :label="label"
    :maxlength="19"
  ></v-text-field>
</template>

<script>
import { VMoney } from "v-money"

const OPTIONS_MONEY_DEFAULT = {
  decimal: ",",
  thousands: ".",
  prefix: "",
  suffix: "",
  precision: 0,
  masked: false
}
export default {
  name: "SvTextFieldCurrency",
  directives: { money: VMoney },
  props: {
    value: {
      type: Number,
      required: true
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
      money: OPTIONS_MONEY_DEFAULT,
      number: this.value
    }
  },
  watch: {
    number: {
      handler: "handlerWatchNumber",
      immediate: true
    }
  },
  methods: {
    handlerWatchNumber(newVal) {
      let value = newVal
      if (typeof value === "string") {
        value = +value.replace(/\./gi, "")
      }
      this.$emit("input", value)
    }
  }
}
</script>

<style scoped></style>
