<script >
import { store, searchMovie } from "../store";
import LangFlag from 'vue-lang-code-flags';
export default {
    components:{
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
<ul >
    <li v-for="series in store.seriesList">
        <img :src= "`//image.tmdb.org/t/p/w342/${series.poster_path}`" alt="">

        <p>titolo serie:{{ series.name }}</p>
        <p>titolo originale-serie:{{ series.original_name }}</p>
        lingua-serie:<lang-flag :iso=" series.original_language" />
        <p>voto-serie:{{ series.vote_average }}</p>
    </li>
</ul>
</template>

<style lang="scss" scoped>

</style>