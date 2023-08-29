import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    searchMovie: "",
    movieList: [],
    seriesList:[]
})

export function searchMovie() {
    axios
        .get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
                api_key: "ce632c45436b38c696f8d2038a9db232",
                query: store.searchMovie,
            }
        })
        .then((response) => {
            store.movieList = response.data.results;
            console.log(response.data.results);
        });
        searchSeries();
}
export function searchSeries() {
    axios
        .get(`https://api.themoviedb.org/3/search/tv`, {
            params: {
                api_key: "ce632c45436b38c696f8d2038a9db232",
                query: store.searchMovie,
            }
        })
        .then((response) => {
            store.seriesList = response.data.results;
            console.log(response.data.results);
        });
}