import Vue from "vue"
import SVuetify from "@vt7/s-vuetify"

export default ({ app }) => {
  Vue.use(SVuetify, { vuetify: app.vuetify })
}
