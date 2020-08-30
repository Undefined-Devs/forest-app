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
            <form role="form" @submit="register()">
              <div class="form-group">
                <label for="username"> Usuario </label>
                <input type="text" class="form-control" id="username" v-model="this.nickname" />
              </div>
              <div class="form-group">
                <label for="email"> Correo </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  pattern="^[a-zA-Z0-9][a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}(?:\.[a-zA-Z]{2})?$"
                  v-model="this.email"
                />
              </div>
              <div class="form-group">
                <label for="password"> Contraseña </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="this.password"
                />
              </div>
              <div class="form-group">
                <label for="fistname"> Nombres </label>
                <input type="text" class="form-control" id="fistname" v-model="this.name" />
              </div>
              <div class="form-group">
                <label for="lastname"> Apellidos </label>
                <input type="text" class="form-control" id="lastname" v-model="this.last_name" />
              </div>
              <div class="form-group">
                <label for="age"> Edad </label>
                <input
                  type="number"
                  min="1"
                  max="99"
                  class="form-control"
                  id="age"
                  v-model="this.age"
                />
              </div>
              <button type="submit" class="btn btn-primary">Enviar</button>
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
import axios from "axios";
// @ is an alias to /src
export default {
  name: "NewUser",
  data: function () {
    return {
      email: "",
      password: "",
      name: "",
      last_name: "",
      age: "",
      nickname: "",
    };
  },
  methods: {
    async register() {
      try {
        return (response = await axios.post("/register", {
          email: email,
          password: password,
          profile_attributes: {
            name: name,
            last_name: last_name,
            age: age,
            nickname: nickname,
          },
        }));
      } catch (error) {
        throw error;
      }
    },
  },
};
</script>
