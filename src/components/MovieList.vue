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
    <div class="list-container">
        <h1 class="movies">Film</h1>
    <ul>
        <li v-for="movie in store.movieList">
            <CardMovie :movie="movie"></CardMovie>
        
        </li>
    </ul>
    </div>
   
</template>

<style lang="scss" scoped>
.list-container{
    padding-left: 20px;
    background-color: #161616;
}
ul{
    width: 100%;
    background-color: #161616;
    display: flex;
    list-style-type: none;
    gap: 10px;
    overflow:scroll;
}
h1{
    padding: 20px 0;
    color: white;
}
</style>