import TimePicker from "./index.vue"

TimePicker.install = function(Vue) {
  Vue.component(TimePicker.name, TimePicker)
}

export { TimePicker }

export default TimePicker
