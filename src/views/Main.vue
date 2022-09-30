<template>
  <container :value="'90'" :unit="'%'">
    <div
        class="card-wrapper"
        v-if="films.length > 1"
    >
      <card
          v-for="film in filterFilmsToSearchQuery"
          :title="film.nameRu"
          :description-year="film.year"
          :image-url="film.posterUrl"
          @click="$router.push(`/card/${film.filmId}`)"
      />
    </div>
    <div
        v-else
        style="
          width: 100%;
          height: 100%;
          display:flex;
          align-items: center;
          justify-content: center;
        "
    >
      <loader/>
    </div>
  </container>
</template>

<script>
import Card from "@/views/Card/Card";
import Container from "@/components/Container/Container";
import {getTopFilmsAsync} from "@/api/request/getTopFilmsAsync";

export default {
  name: "Main",
  components: { Container, Card },
  props: {
    searchQuery: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      films: [],
      maxCountPage: 1
    }
  },
  mounted() {
    (async () => {
      setTimeout(async () => {
        const {films, pageCount} = await getTopFilmsAsync();
        this.films = films;
        this.maxCountPage = pageCount;
      }, 2000)
    })()
  },
  computed: {
    filterFilmsToSearchQuery() {
      return this.films.filter(film => film.nameRu.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  }
}
</script>

<style>
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>