import DataTable from "./index.vue"

DataTable.install = function(Vue) {
  Vue.component(DataTable.name, DataTable)
}

export { DataTable }

export default DataTable
