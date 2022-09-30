<template>
  <div
      style="margin: 0 auto; height: 100%;"
      :style="{ width: `${value}${unit}` }">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: {
    unit: {
      type: String,
      default: '%'
    },
    value: {
      type: String,
      default: 100
    }
  }
}
</script>

<style scoped>

</style>