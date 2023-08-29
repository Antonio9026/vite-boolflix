<script >
import { store, searchMovie, changeAverageVote } from "../store";
import LangFlag from 'vue-lang-code-flags';


export default {
    props: {
        series: {
            type: Object,
            required: true,
        }
    },
    components: {
        LangFlag,

    },
    data() {
        return {
            store,
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
            <img :src="`//image.tmdb.org/t/p/w342/${series.poster_path}`" alt="">
        </div>
        <div class="card-info">
            <p>titolo serie:{{ series.name }}</p>
            <p>titolo originale-serie:{{ series.original_name }}</p>
            <p> lingua-serie:<lang-flag :iso="series.original_language" /></p>
            <p>voto-serie:{{ changeAverageVote(series.vote_average) }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-container:hover {
    position: relative;
    padding-bottom: 40px;

}

.card-info {
    position: absolute;
    bottom: 450px;
    left: 20px;
}

img:hover {
    opacity: 0.5;
}
</style>