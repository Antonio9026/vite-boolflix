<script >
import { store, searchMovie } from "../store";
import LangFlag from 'vue-lang-code-flags';
import CardMovie from "./CardMovie.vue"

export default {
    
    components: {
        LangFlag,
        CardMovie

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
    <h1 class="movies">Film</h1>
    <ul>
        <li v-for="movie in store.movieList">
            <CardMovie :movie="movie"></CardMovie>
        
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul{
    display: flex;
    list-style-type: none;
    gap: 10px;
    overflow: auto;
}
</style>