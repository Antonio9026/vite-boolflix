<script >
import { store, searchMovie, changeAverageVote,  } from "../store";
import LangFlag from 'vue-lang-code-flags';


export default {
    props: {
        series: {
            type: Object,
            required: true,
        },

    },
    components: {
        LangFlag,

    },
    data() {
        return {
            store,


        }
    },
    methods: {
        searchMovie,
        changeAverageVote,
       

         getUrlImage(nomeImg) {
            if (!this.series.poster_path) {
                return new URL(`../assets/logo/boolflix-logo.png`, import.meta.url).href

            }

            return "https://image.tmdb.org/t/p/w342/" + this.series.poster_path


        }
    },

}




</script>

<template>
    <div class="card-container">
        <div class="img-container">
            <img :src="getUrlImage(boolflix - logo)" alt="">
        </div>
        <div class="card-info">
            <p>titolo serie: {{ series.name }}</p>
            <p>titolo originale-serie: {{ series.original_name }}</p>
            <p> lingua-serie: <lang-flag :iso="series.original_language" /></p>
            <p>voto-serie: <i class="fa-solid fa-star" v-for="i in changeAverageVote(series.vote_average)"></i></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-container {
    padding-bottom: 40px;
    position: relative;
    height: 100%;
    width: 200px;
}

.card-container:hover {

    .card-info {
        opacity: 1;
    }
}

.card-info {
    height: 50%;
    position: absolute;
    top: 20px;
    left: 10px;
    opacity: 0;
    color: white;
}

.img-container {
    width: 100%;
    height: 100%;
}

img {
    width: 100%;
    height: 100%;
}

img:hover {
    opacity: 0.1;
}

.fa-star {
    color: gold;
}
</style>