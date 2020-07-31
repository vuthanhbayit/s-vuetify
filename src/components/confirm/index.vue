<template>
  <v-dialog
    @input="change"
    :max-width="width"
    @keydown.esc="choose(false)"
    eager
    value="true"
  >
    <v-card tile>
      <v-toolbar color="warning" dark dense flat>
        <v-icon left>mdi-alert-circle-outline</v-icon>
        <v-toolbar-title class="white--text">
          {{ text.title }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="body-1 py-3">
        {{ message }}
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="grey" @click="choose(false)" text>
          {{ text.no }}
        </v-btn>
        <v-btn color="primary" @click="choose(true)" text>
          {{ text.yes }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "SvConfirm",
  props: {
    message: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 450
    },
    text: {
      type: Object,
      default: () => {
        return {
          title: "Warning",
          yes: "Yes",
          no: "No"
        }
      }
    }
  },
  data() {
    return {
      value: false
    }
  },
  mounted() {
    document.addEventListener("keyup", this.onEnterPressed)
  },
  destroyed() {
    document.removeEventListener("keyup", this.onEnterPressed)
  },
  methods: {
    onEnterPressed(e) {
      if (e.keyCode === 13) {
        e.stopPropagation()
        this.choose(true)
      }
    },
    choose(value) {
      this.$emit("result", value)
      this.value = value
      this.$destroy()
    },
    change() {
      this.$destroy()
    }
  }
}
</script>
