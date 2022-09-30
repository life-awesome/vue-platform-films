import {getTopFilmsAsync} from "@/api/request/getTopFilmsAsync";

export const topFilmsMixin = {
	data() {
		return {
			films: [],
			maxCountPage: 1,
			currentPage: 1
		}
	},
	methods: {
		getToFilms() {
			(async () => {
				const {pagesCount, films} = await getTopFilmsAsync(this.currentPage);
				this.films = films;
				this.maxCountPage = pagesCount;
			})()
		}
	},
	mounted() {
		(() => {
			this.getToFilms()
		})()
	}
}