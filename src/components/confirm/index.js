import Confirm from "./index.vue"

const install = (Vue, { vuetify }) => {
  if (!vuetify) {
    // eslint-disable-next-line no-console
    console.warn(
      "Module vuetify-confirm needs vuetify instance. Use Vue.use(VuetifyConfirm, { vuetify })"
    )
  }
  const SvConfirm = Vue.extend(Object.assign({ vuetify }, Confirm))

  function createDialogConfirm(options) {
    const container = document.querySelector("[data-app=true]") || document.body
    return new Promise((resolve) => {
      const confirm = new SvConfirm(
        Object.assign(
          {},
          {
            propsData: Object.assign({}, options),
            destroyed: () => {
              container.removeChild(confirm.$el)
              resolve(confirm.value)
            }
          }
        )
      )
      container.appendChild(confirm.$mount().$el)
    })
  }

  function confirm(message, options = {}) {
    options.message = message
    return createDialogConfirm(options)
  }

  Vue.prototype.$confirm = confirm
}

Confirm.install = install

export { Confirm }

export default Confirm
