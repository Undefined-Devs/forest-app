<template>
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">

      <!-- Begin Page Content -->
      <div class="container-fluid mt-4">

        <top/>

        <hr>

        <!-- Content Row -->
        <div class="row">
          <!-- Area Chart -->
          <div class="col-xl-12" v-for="post in posts" :key="`post-${post.id}`">
            <div class="card shadow mb-4">
              <!-- Card Header - Dropdown -->
              <div
                class="card-header py-3 d-flex flex-row
                align-items-center justify-content-between"
              >
                <div class="row">
                  <div class="col h5 mb-0 text-gray-800">
                    <strong>Cristopher PS </strong>
                    <i class="fas fa-crown mr-1"></i>
                    <label class="font-weight-bold text-success text-uppercase mb-1">
                      +85k
                    </label>
                  </div>
                  <div class="col mb-0 text-right">
                    <a href="/" class="badge badge-success" style="font-size: 0.8rem;">Reto: Planta 3 arboles en tu comunidad</a>
                  </div>
                </div>
                
              </div>
              <!-- Card Body -->
              <div class="card-body mb-0 pb-0">
                <div class="chart-area">
                  <video v-if="post.movie_url" id="player" controls width="100%" height="100%">
                    <source :src="post.movie_url" type="video/mp4">
                  </video>
                  <div v-else class="d-flex justify-content-center align-items-center bg-dark h-100">
                    <h1>SIN VIDEO</h1>
                  </div>
                </div>
                <hr>
                <div class="row between text-lg text-gray-800 mt-2 mb-3">
                  <div class="col">
                    {{post.title}}
                  </div>
                  <div class="col text-right">
                    <a @click="showDescription(post.id)" class="h6 font-weight-bold text-primary cursor-pointer">
                      {{ post.isShowing ? 'Ocultar descripción ' : 'Ver descripción '}}
                      <i v-show="!post.isShowing" class="fas fa-eye"></i>
                      <i v-show="post.isShowing" class="fas fa-eye-slash"></i>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Card Footer -->
              <div class="card-footer text-justify" v-show="post.isShowing">
                {{post.description}}
              </div>
            </div>
          </div>

        </div>

      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- End of Main Content -->

    <!-- Footer -->
    <vue-footer/>

  </div>
  <!-- End of Content Wrapper -->
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = 'http://thisjesusmartinez.com:3001/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

export default {
  name: 'Home',
  created () {
    this.posts = this.getPosts();
  },
  data () {
    return {
       posts: null
    }
  },
  methods: {
    getPosts () {
      // Se obtienen datos del Store
      return this.$store.state.posts.map(post => {
        post.isShowing = false;
        return post;
      });
    },
    showDescription (id) {
      this.posts.forEach(post => {
        if (post.id == id) {
          post.isShowing = !post.isShowing;
          this.$forceUpdate();
        }
      });
    }
  }
};
</script>
