<template>
  <container :value="80">
    <div v-if="filmDate" class="film-wrapper">
      <span class="back-arrow">
        <font-awesome-icon icon="arrow-left" size="2x" @click="$router.push('/')"/>
      </span>
      <div class="banner">
        <img :src="filmDate.posterUrl" alt="">
        <span>{{}}</span>
      </div>
      <div class="film_description">
        <p>Название фильма: {{ filmDate.nameRu }}</p>
        <p>Описание: {{ filmDate.shortDescription }}</p>
        <p>Жанры:
          <span v-for="genre in getGenre" style="margin: 0 2px">{{ genre }}</span>
        </p>
        <p>Продолжительность фильма: {{ filmDate.filmLength }}</p>
        <p>Страны: <span v-for="country in getCountries" style="margin: 0 2px">{{ country }}</span>
        </p>
      </div>
    </div>
    <div v-else style="width: 100%;height: 100%;display: flex;justify-content: center;">
      <loader/>
    </div>
  </container>
</template>

<script>
import {getFilmById} from "@/api/request/getFilmById";
import Container from "@/components/Container/Container";
import Loader from "@/components/UI/Loader/Loader";

export default {
  name: "DescriptionCard",
  components: {Loader, Container},
  data() {
    return {
      filmDate: null
    }
  },
  mounted() {
    (async () => {
      this.filmDate = await getFilmById(this.$route.params.id)
    })()
  },
  computed: {
    getCountries() {
      const {countries} = this.filmDate
      return countries.map(country => country.country)
    },
    getGenre() {
      const {genres} = this.filmDate
      return genres.map(genre => genre.genre)
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss"/>