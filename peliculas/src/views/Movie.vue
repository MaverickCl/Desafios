<template>
  <div>
    <div class="card mt-3 mx-30" >
      <div class="row no-gutters m-4">
        <div class="col-md-6">
          <img :src=movie.poster_path />
        </div>
        <div class="col-md-6" >
          <div class="card-body">
            <h2 class="card-title mb-5">{{movie.title}}</h2>
            <p class="card-text">
              <b-icon icon="star-fill" animation="fade" font-scale="2"></b-icon>{{ movie.vote_average }}
            </p>
            <div class="card-text justify-text">
             <h3 class="mb-3">Argumento</h3>
             {{ movie.overview }}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.service.js";
import Movie from "@/models/Movie.js";

export default {
  data() {
    return {
      movie: Movie,
    };
  },
  mounted() {
    this.getMovie(this.$route.params.id);
  },

  methods: {
    async getMovie(id) {
      const { data } = await api.getMovie(id);
      this.movie = new Movie(data);
    },
  },
};
</script>

<style>
.card-title{
  font-family: "Lucida Console", "Courier New", monospace;
  
}
</style>