import TextFieldCurrency from "./index.vue"

TextFieldCurrency.install = function(Vue) {
  Vue.component(TextFieldCurrency.name, TextFieldCurrency)
}

export { TextFieldCurrency }

export default TextFieldCurrency
