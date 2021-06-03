<template>
  <div>

    <div class="row row-cols-1 row-cols-md-3 m-4">
      <div class="col mb-4" v-for="peli in movies" :key="peli.original_title">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">
              {{ peli.title }}
            </h5>
            <p class="card-text">{{ peli.vote_average }}</p>
             <router-link :to="{ name: 'Movie', params: { id: peli.id } }">
            <img :src="peli.poster_path" class="card-img-top" />
          </router-link>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-dark" @click="addMoreMovies">Ver Mas</button>
  </div>
</template>

<script>
import api from "@/services/api.service.js";
import Movie from "@/models/Movie.js";

export default {
  data() {
    return {
      movies: [],
      moremovies: [],
      pagina: 1,
    };
  },
  mounted() {
    this.getMovies();
  },

  methods: {
    async getMovies() {
      const { data } = await api.getPopular(this.pagina);
      this.movies = data.results;

      this.movies = await Promise.all(
        data.results.map((movie) => this.getMovie(movie.id))
      );
    },

    async getMovie(id) {
      const { data } = await api.getMovie(id);
      return new Movie(data);
    },

    async addMoreMovies() {
      //para agregar 20 mas
      this.pagina++;
      const { data } = await api.getPopular(this.pagina);
      this.moremovies = data.results;
      this.moremovies = await Promise.all(
        data.results.map((movie) => this.getMovie(movie.id))
      );
      this.movies = [...this.movies, ...this.moremovies];
    },
  },
};
</script>

<style>
</style>