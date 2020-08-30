<template>
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <!-- Begin Page Content -->
      <div class="container-fluid mt-4">
        <div class="row">
          <div class="col-md-12">
            <h1>Estás a punto de aceptar el reto 🙌🏼</h1>
            <hr>
            <form role="form">
              <div class="form-group">
                <label for="titulo">Título</label>
                <input type="text" class="form-control" id="title" />
              </div>
              <div class="form-group">
                <label for="descripcion">Descripción</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label for="descripcion">Elige tu video</label>
                <input class="ml-4" for="video" type="file" id="video" accept="video/mp4" />
              </div>

              <button class="btn btn-primary mr-2">Enviar</button>
              <a class="btn btn-secondary" href="/challenges">Cancelar</a>

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
