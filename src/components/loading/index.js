import Loading from "./index.vue"

/**
 * @use this.$loading.show()
 * @use await Promise()
 * @use this.$loading.hide()
 *
 */

const install = (Vue) => {
  const SvLoading = Vue.extend(Loading)
  const container = document.querySelector("[data-app=true]") || document.body
  let loading = null

  function show() {
    loading = new SvLoading({
      mounted: () => {
        loading.visible = true
      }
    })
    container.appendChild(loading.$mount().$el)
  }

  function hide() {
    loading.visible = false
    container.removeChild(loading.$el)
  }

  Vue.prototype.$loading = {
    show,
    hide
  }
}

Loading.install = install

export { Loading }

export default Loading
