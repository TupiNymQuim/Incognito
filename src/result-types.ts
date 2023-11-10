interface Thumbnail {
	logo: boolean,
	original: string,
	src: string
};

export interface WebResult {
	age: string,
	description: string,
	family_frinedly: boolean,
	language: string,
	thumbnail: Thumbnail,
	title: string,
	url: string,
};

export interface WebApiResponse {
	web: {
		results: Array<WebResult>,
	}
};
