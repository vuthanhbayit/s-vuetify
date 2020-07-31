<template>
  <v-data-table
    v-bind="$attrs"
    v-on="$listeners"
    :mobile-breakpoint="400"
    hide-default-header
    loader-height="2"
    class="elevation-1"
  >
    <template v-slot:header="{ props: { headers } }">
      <thead class="v-data-table-header">
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            :class="[genAlign(header)]"
            :style="[genWidth(header)]"
            :colspan="header.colspan || 1"
          >
            <span>{{ $t("common." + header.text) }}</span>
          </th>
        </tr>
      </thead>
    </template>
    <template v-if="error" v-slot:no-data>
      <div class="py-10">
        <div class="text-3xl text-black my-4">
          <span>{{ error.statusCode }}</span>
          <span>{{ error.message }}</span>
        </div>
        <v-btn dark color="primary" @click="$emit('fetch')">Reload</v-btn>
      </div>
    </template>
    <template v-for="(slot, name) in $scopedSlots" v-slot:[name]="item">
      <slot :name="name" v-bind="item"></slot>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "SvDataTable",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  methods: {
    genAlign({ align }) {
      if (!align) return "text-start"
      return "text-" + align
    },
    genWidth({ width }) {
      return { "width": width + "px", "min-width": width + "px" }
    }
  }
}
</script>

<style scoped></style>
