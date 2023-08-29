<script >
import { store, searchMovie } from "../store";
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
            store
        }
    },
    methods: {
        searchMovie
    }
}




</script>

<template>
    <img :src="`//image.tmdb.org/t/p/w342/${series.poster_path}`" alt="">

    <p>titolo serie:{{ series.name }}</p>
    <p>titolo originale-serie:{{ series.original_name }}</p>
    <p> lingua-serie:<lang-flag :iso="series.original_language" /></p>
    <p>voto-serie:{{ series.vote_average }}</p>
</template>

<style lang="scss" scoped></style>