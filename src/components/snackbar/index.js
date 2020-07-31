import Snackbar from "./index.vue"

const install = (Vue, { vuetify }) => {
  if (!vuetify) {
    // eslint-disable-next-line no-console
    console.warn(
      "Module vuetify-confirm needs vuetify instance. Use Vue.use(VuetifyConfirm, { vuetify })"
    )
  }
  const SvSnackbar = Vue.extend(Object.assign({ vuetify }, Snackbar))
  function createNotification(options) {
    const container = document.querySelector("[data-app=true]") || document.body
    const notify = new SvSnackbar(
      Object.assign(
        {},
        {
          propsData: Object.assign({}, options),
          mounted: () => {
            notify.visible = true
          }
        }
      )
    )
    container.appendChild(notify.$mount().$el)
  }

  function success(message) {
    const options = {
      message,
      type: "success"
    }
    createNotification(options)
  }
  function error(message) {
    const options = { message, type: "error" }
    createNotification(options)
  }
  function warning(message) {
    const options = { message, type: "warning" }
    createNotification(options)
  }
  function info(message) {
    const options = { message, type: "info" }
    createNotification(options)
  }

  Vue.prototype.$success = success
  Vue.prototype.$error = error
  Vue.prototype.$warning = warning
  Vue.prototype.$info = info
}

Snackbar.install = install

export { Snackbar }

export default Snackbar
