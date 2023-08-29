<script >
import { store, searchMovie } from "../store";
import LangFlag from 'vue-lang-code-flags';

export default {
    components: {
        LangFlag,

    },
    data() {
        return {
            store
        }
    },
    methods: {
        searchMovie
    }
}




</script>

<template>
    <ul>
        <li v-for="movie in store.movieList">
            <img :src= "`//image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">

            <p>titolo:{{ movie.title }}</p>
            <p>titolo originale:{{ movie.original_title }}</p>
            lingua:<lang-flag :iso="movie.original_language" />

            <p>voto:{{ movie.vote_average }}</p>
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>