<script >
import { store, searchMovie } from "../store"
export default {
    data() {
        return {
            store
        };
    },
    methods: {
        searchMovie
    },
    mounted() {

    },

};
</script>

<template>
    <header>
        <div class="nav-container">

          <div class="title">Boolflix</div>
            <div class="d-flex">
                <input class="" type="cerca" v-model="store.searchMovie" placeholder="Cerca">
                <button  @click="searchMovie()">Cerca</button>
            </div>

        </div>
    </header>
</template>

<style lang="scss" scoped></style>