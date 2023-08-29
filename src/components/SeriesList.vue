<script >
import { store, searchMovie } from "../store";
import LangFlag from 'vue-lang-code-flags';
import CardSeries from "./CardSeries.vue";
export default {
    components: {
        LangFlag,
        CardSeries
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
        <h1 class="series">Serie TV</h1>
        <ul>
            <li v-for="series in store.seriesList">
                <CardSeries :series="series"></CardSeries>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.list-container{
   padding-left: 20px;
    background-color: #161616;
}
ul {
    display: flex;
    list-style-type: none;
    gap: 10px;
    overflow: auto;
  
}
h1{
    padding: 20px 0;
    color: white;
}
</style>