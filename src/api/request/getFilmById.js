import callApi from '@/api'
import {URL_FILM_BY_ID} from "@/constants/api/urls";
import {API_KEY} from "@/constants/api";

export const getFilmById = async (id) => {
	const {response} = await callApi.get(URL_FILM_BY_ID + id, {
		'X-API-KEY': API_KEY
	}, {})
	return response
}