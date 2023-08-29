<script >
import { store, searchMovie, changeAverageVote } from "../store";
import LangFlag from 'vue-lang-code-flags';

export default {
    props: {
        movie: {
            type: Object,
            required: true,
        }
    },
    components: {
        LangFlag,

    },
    data() {
        return {
            store
        }
    },
    methods: {
        searchMovie,
        changeAverageVote
    }
}




</script>

<template>
<div class="card-container"></div>
    
            <img :src= "`//image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">

            <p>titolo:{{ movie.title }}</p>
            <p>titolo originale:{{ movie.original_title }}</p>
            lingua:<lang-flag :iso="movie.original_language" />

            <p>voto:{{ changeAverageVote( movie.vote_average) }}</p>
   
</template>

<style lang="scss" scoped></style>