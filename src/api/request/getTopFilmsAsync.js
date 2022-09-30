import callApi from '@/api'
import {URL_TOP_FILMS} from "@/constants/api/urls";
import {API_KEY} from "@/constants/api";

export const getTopFilmsAsync = async (page) => {
	const {response} = await callApi.get(URL_TOP_FILMS, {
		'X-API-KEY': API_KEY
	}, {
		type: 'TOP_250_BEST_FILMS',
		page
	})
	return response
}