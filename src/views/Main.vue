<template>
  <container :unit="'%'" :value="'90'">
    <div
        v-if="films.length > 1"
        class="card-wrapper"
    >
      <card
          v-for="film in filterFilmsToSearchQuery"
          :key="film.filmId"
          :description-year="film.year"
          :image-url="film.posterUrl"
          :title="film.nameRu"
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
    <div class="pagination">
      <span
          v-for="page in [...Array(maxCountPage)].map((x, index) => index)"
          v-if="films.length > 1"
          @click="this.currentPage = page + 1"
      >
        {{ page + 1 }}
      </span>
    </div>
  </container>
</template>

<script>
import Card from "@/views/Card/Card";
import Container from "@/components/Container/Container";
import {getTopFilmsAsync} from "@/api/request/getTopFilmsAsync";
import {topFilmsMixin} from "@/mixins/getTopFilmsRequestMixin";

export default {
  name: "Main",
  components: {Container, Card},
  props: {
    searchQuery: {
      type: String,
      required: true
    }
  },
  mixins: [topFilmsMixin],
  data() {
    return {}
  },
  mounted() {
    (async () => {
      setTimeout(async () => {
        const {pagesCount, films} = await getTopFilmsAsync(this.currentPage);
        this.films = films;
        this.maxCountPage = pagesCount;
      }, 2000)
    })()
  },
  computed: {
    filterFilmsToSearchQuery() {
      return this.films.filter(film => film.nameRu.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    currentPage() {
      (async () => {
        const {films} = await getTopFilmsAsync(this.currentPage);
        this.films = films;
      })()
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

.pagination {
  display: flex;
  justify-content: center;
}

.pagination span {
  padding: 7px;
  border: 1px solid teal;
  margin: 0 2px;
  cursor: pointer;
}
</style>