<script >
import { store, searchMovie } from "../store";
export default {
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
    <li v-for="movie in store.movieList">
        <p>{{ movie.title }}</p>titolo
        <p>{{ movie.original_title }}</p>titolo originale
        <p>{{ movie.original_language}}</p>lingua
        <p>{{ movie.vote_average }}</p>voto
    </li>
</ul>
</template>

<style lang="scss" scoped>

</style>