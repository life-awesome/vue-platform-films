
export const ENDPOINT = 'https://kinopoiskapiunofficial.tech/api/'

class ApiCall {
	constructor(domain) {
		this.domain = domain
	}

	async perform(url, header = {}, data = null, config) {
		const request = await fetch(`${this.domain}${url}`, {
			...config,
			body: data ? JSON.stringify(data) : null,
			headers: {
				'Content-Type': 'application/json',
				...header,
			},
		})
		return {
			isError: request.status >= 400,
			code: request.status,
			response: await request.json(),
		}
	}

	async get(path, header = {}, params) {
		return await this.perform(
			path + '?' + new URLSearchParams(params),
			header,
			null,
			{
				method: 'GET',
			}
		)
	}

	async post(path, header = {}, payload = {}, ) {
		return await this.perform(path, header, payload, {
			method: 'POST',
		})
	}

	async put(path, header, payload) {
		return await this.perform(path, header, payload, {
			method: 'PUT',
		})
	}

	async delete(path) {
		return await this.perform(path, {}, null, {
			method: 'DELETE',
		})
	}
}

export default new ApiCall(ENDPOINT)
