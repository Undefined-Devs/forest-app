<template>
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <!-- Begin Page Content -->
      <div class="container-fluid mt-4">

        <div class="row bg-dark text-white text-center pl-2 pr-2 mt-0 ml-0 mr-0 mb-4" style="height: 15rem;background-image: url('./assets/banner.jpeg');">
          <div class="d-flex justify-content-center align-items-center w-100 h-100">
            <p class="h1">
              Acepta un reto y ayuda a salvar el planeta
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-4 mb-4" v-for="challenge in challenges" :key="`challenge-${challenge.id}`">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{challenge.name}}</h5>
                <p
                  class="card-text text-justify"
                >
                  {{challenge.description}}
                </p>
                <a class="btn btn-primary" :href="currentUser ? `/new-post/${challenge.id}`: `/login`">Aceptar reto 👊🏼</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- End of Main Content -->

    <!-- Footer -->
    <vue-footer />
  </div>
  <!-- End of Content Wrapper -->
</template>

<script>
// @ is an alias to /src
export default {
  name: "Challenges",
  data () {
    return {
      challenges: null
    }
  },
  async created () {
    await this.$store.dispatch('getChallenges');
    this.challenges = this.$store.state.challenges;
  },
  computed: {
    currentUser () { 
      return this.$store.state.currentUser;
    }
  }
};
</script>

<style scoped>
.challenge-description {
  font-size: 30px;
}
.button {
  border: none;
  color: white;
  background: #292828;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
}
.grid-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;
}
</style>