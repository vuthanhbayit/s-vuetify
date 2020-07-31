import TextField from "./index.vue"

TextField.install = function(Vue) {
  Vue.component(TextField.name, TextField)
}

export { TextField }

export default TextField
