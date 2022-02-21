
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Netflix Originals',
                items: await basicFetch(`/discover/tv?with_networks=213&language=en-BR&api_key=${process.env.REACT_APP_API_KEY }`)
            },
            {
                slug: 'sci-fi',
                title: 'sci-fi',
                items: await basicFetch(`/discover/movie?with_genres=878&language=en-BR&api_key=${process.env.REACT_APP_API_KEY }`)
            },
            {
                slug: 'fantasy',
                title: 'Fantasy',
                items: await basicFetch(`/discover/movie?with_genres=14&language=en-BR&api_key=${process.env.REACT_APP_API_KEY }`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&language=en-BR&api_key=${process.env.REACT_APP_API_KEY }`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&language=en-BR&api_key=${process.env.REACT_APP_API_KEY }`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=en-BR&api_key=${process.env.REACT_APP_API_KEY }`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=en-BR&api_key=${process.env.REACT_APP_API_KEY }`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch(`/discover/movie?with_genres=99&language=en-BR&api_key=${process.env.REACT_APP_API_KEY }`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=en-BR&api_key=${process.env.REACT_APP_API_KEY }`)
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=en-BR&api_key=${process.env.REACT_APP_API_KEY }`)
                    break;
                default:
                    info = null;
                    break;
            }
        }
        return info;
    }
}