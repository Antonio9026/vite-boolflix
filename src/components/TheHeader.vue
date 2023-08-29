<script >
import { store, searchMovie } from "../store"
export default {
    data() {
        return {
            store
        };
    },
    methods: {
        searchMovie,

    },
    mounted() {

    },

};
</script>

<template>
    <header>
        <div class="nav-container">

            <div class="title">
                <img src="../assets/logo/boolflix-logo.png" alt="">
            </div>
            <div class="input-container">
                <input class="" type="cerca" @keyup.enter="searchMovie()" v-model="store.searchMovie" placeholder="Cerca">
                <button @click="searchMovie()">Cerca</button>
            </div>

        </div>
    </header>
</template>

<style lang="scss" scoped>
.nav-container {

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    height: 50px;


}

.title {
    width: 100px;
}

img {
    width: 100%;
}

.input-container {
    min-width: 250px;
    display: flex;
    justify-content: space-around;
}

button {
    width: 60px;
    background-color: red;
    border: 0;
    border-radius: 5px;
}</style>