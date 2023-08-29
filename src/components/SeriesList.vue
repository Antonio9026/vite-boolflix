<script >
import { store, searchMovie } from "../store";
import LangFlag from 'vue-lang-code-flags';
import CardSeries from "./CardSeries.vue";
export default {
    components:{
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
<ul >
    <li v-for="series in store.seriesList">
        <CardSeries :series="series"></CardSeries>
    </li>
</ul>
</template>

<style lang="scss" scoped>

</style>