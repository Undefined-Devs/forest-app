<template>
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <!-- Begin Page Content -->
      <div class="container-fluid mt-4">
        <!-- <article>
          <p
            class="text-dark challenge-description text-center"
          >Realiza una maceta con 3 botellas de plastico y envia una foto o graba un video del proceso que hiciste</p>
          <button class="button">Aceptar reto</button>
        </article>-->
        <div class="grid-cards">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Haz una maceta</h5>
              <p
                class="card-text"
              >Realiza una maceta con 3 botellas de plastico y envia una foto o graba un video del proceso que hiciste</p>
              <button class="button">Aceptar reto</button>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Haz una maceta</h5>
              <p
                class="card-text"
              >Realiza una maceta con 3 botellas de plastico y envia una foto o graba un video del proceso que hiciste</p>
              <button class="button">Aceptar reto</button>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Haz una maceta</h5>
              <p
                class="card-text"
              >Realiza una maceta con 3 botellas de plastico y envia una foto o graba un video del proceso que hiciste</p>
              <button class="button">Aceptar reto</button>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Haz una maceta</h5>
              <p
                class="card-text"
              >Realiza una maceta con 3 botellas de plastico y envia una foto o graba un video del proceso que hiciste</p>
              <button class="button">Aceptar reto</button>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Haz una maceta</h5>
              <p
                class="card-text"
              >Realiza una maceta con 3 botellas de plastico y envia una foto o graba un video del proceso que hiciste</p>
              <button class="button">Aceptar reto</button>
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