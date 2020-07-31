import Select from "./index.vue"

Select.install = function(Vue) {
  Vue.component(Select.name, Select)
}

export { Select }

export default Select
