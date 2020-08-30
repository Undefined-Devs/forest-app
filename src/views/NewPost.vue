<template>
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <!-- Begin Page Content -->
      <div class="container-fluid mt-4">
        <div class="row">
          <div class="col-md-12">
            <h1>Reto aceptado</h1>
            <form role="form">
              <div class="form-group">
                <label for="titulo">Titulo</label>
                <input type="text" class="form-control" id="title" />
              </div>
              <div class="form-group">
                <label for="descripcion">Descripcion</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label for="descripcion">Subir video</label>
                <input class="ml-4" for="video" type="file" id="video" accept="video/mp4" />
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
