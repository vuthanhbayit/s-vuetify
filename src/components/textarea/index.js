import Textarea from "./index.vue"

Textarea.install = function(Vue) {
  Vue.component(Textarea.name, Textarea)
}

export { Textarea }

export default Textarea
