import {
  DatePicker,
  TimePicker,
  DataTable,
  Select,
  Textarea,
  TextField,
  TextFieldCurrency,
  Confirm,
  Snackbar,
  Loading
} from "./components"

const components = [
  DatePicker,
  TimePicker,
  DataTable,
  Select,
  TextField,
  TextFieldCurrency,
  Textarea,
  Confirm,
  Snackbar,
  Loading
]

const install = (Vue, { vuetify }) => {
  components.forEach((component) => {
    Vue.use(component, { vuetify })
  })
}

export default { install }
