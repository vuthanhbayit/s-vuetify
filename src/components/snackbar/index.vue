<template>
  <v-snackbar v-model="visible" :color="type" :timeout="timeout" top right>
    <div class="flex items-center space-x-2">
      <div class="w-1/6">
        <v-icon dark large class="text-white">
          {{ icon }}
        </v-icon>
      </div>
      <div class="w-5/6">
        <div class="font-bold text-base">{{ title }}</div>
        <div class="text-md">{{ message }}</div>
      </div>
    </div>
  </v-snackbar>
</template>

<script>
export default {
  name: "SvSnackbar",
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      validate(value) {
        return ["success", "error", "warning", "info"].includes(value)
      }
    },
    timeout: {
      type: Number,
      default: 6000
    }
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    icon() {
      return icons[this.type]
    },
    title() {
      return this.type.charAt(0).toUpperCase() + this.type.slice(1)
    }
  }
}
const icons = {
  success: "mdi-check",
  error: "mdi-close-circle-outline",
  warning: "mdi-alert-circle-outline",
  info: "mdi-information-variant"
}
</script>
