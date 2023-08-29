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
    <div class="card-container">

        <div class="img-container">
            <img :src="`//image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
        </div>
        <div class="card-info">
            <p>titolo:{{ movie.title }}</p>
            <p>titolo originale:{{ movie.original_title }}</p>
            lingua:<lang-flag :iso="movie.original_language" />
            <p>voto:{{ changeAverageVote(movie.vote_average) }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-container:hover {
    position: relative;

}

.card-info {
    position: absolute;
    bottom: 400px;
    left: 10px;



}

img:hover {
    opacity: 0.5;
}
</style>