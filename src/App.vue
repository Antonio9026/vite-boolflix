<script >
import TheHeader from "./components/TheHeader.vue";
import MovieList from "./components/MovieList.vue";
import SeriesList from "./components/SeriesList.vue";

export default {
  components: {
    TheHeader,
    MovieList,
    SeriesList
}
}
</script>

<template>
 <TheHeader></TheHeader>
 <MovieList></MovieList>
 <SeriesList></SeriesList>
</template>

<style lang="scss" scoped>

</style>
