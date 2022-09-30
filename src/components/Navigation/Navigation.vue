<template>
  <div class="navigation">
    <div>
      <my-input placeholder="Поиск..." v-model="modelValue"/>
    </div>
  </div>
</template>

<script>

export default {
  name: "Navigation",
  props: {
    modelValue: [String],
  },
  watch: {
    modelValue(value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<style src="./style.scss" lang="scss"/>