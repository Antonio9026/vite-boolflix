<script >
import TheHeader from "./components/TheHeader.vue";
import MovieList from "./components/MovieList.vue";
import SeriesList from "./components/SeriesList.vue";


export default {
  components: {
    TheHeader,
    MovieList,
    SeriesList,
  
}
}
</script>

<template>
 <TheHeader></TheHeader>
 <MovieList></MovieList>
 <SeriesList></SeriesList>
</template>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
body{
  font-family: 'Bebas Neue', sans-serif;
}
</style>
