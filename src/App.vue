<template>
   <div>
     <navigation :value="searchQuery" :searchQuery="this.searchQuery" v-model="searchQuery"/>
   </div>
  <router-view :searchQuery="searchQuery"/>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation";
export default {
  components: {Navigation},
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    getValue(value) {
      this.searchQuery = value
    }
  }
}
</script>

<style lang="scss" src="./assets/styles/style.scss"/>