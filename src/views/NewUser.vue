<template>
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <!-- Begin Page Content -->
      <div class="container-fluid mt-4">
        <div class="row">
          <div class="col-md-12">
            <h1>Registro</h1>
            <form role="form">
              <div class="form-group">
                <label for="username"> Usuario </label>
                <input type="text" class="form-control" id="username" />
              </div>
              <div class="form-group">
                <label for="email"> Correo </label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="form-group">
                <label for="password"> Contraseña </label>
                <input type="password" class="form-control" id="password" />
              </div>
              <div class="form-group">
                <label for="fist_name"> Nombres </label>
                <input type="text" class="form-control" id="fist_name" />
              </div>
              <div class="form-group">
                <label for="last_name"> Apellidos </label>
                <input type="text" class="form-control" id="last_name" />
              </div>
              <div class="form-group">
                <label for="age"> Edad </label>
                <input type="number" min="1" max="99" class="form-control" id="age" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
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
  name: "NewUser",
};
</script>
