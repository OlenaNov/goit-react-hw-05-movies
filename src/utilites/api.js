import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = '84bdbe2f4baecea0c1be28902afc6a5b';


const fetchMovies = async (typeRequest, controller, query) => {

    const request = await axios.get(typeRequest, {
        params: {
            api_key: API_KEY,
            query,
        },
        signal: controller.signal,
    });
    return request.data;
};



export default fetchMovies;