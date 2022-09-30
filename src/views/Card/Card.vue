<template>
  <div class="card">
    <p>{{title}}</p>
    <img :src="imageUrl" alt="">
    <p>{{descriptionYear}}</p>
  </div>
</template>

<script>
import ironMan from "@/assets/image/iron-man.jpg"
export default {
  name: "Card",
  data() {
    return {
      ironMan,
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    descriptionYear: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped src="./style.scss" lang="scss"/>