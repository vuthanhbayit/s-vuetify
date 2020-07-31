import DatePicker from "./index.vue"

DatePicker.install = function(Vue) {
  Vue.component(DatePicker.name, DatePicker)
}

export { DatePicker }

export default DatePicker
