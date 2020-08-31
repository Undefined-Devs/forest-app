<template>
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <!-- Begin Page Content -->
      <div class="container-fluid mt-4">
        <div class="row">
          <div class="col-md-12">
            <h1>Te estás uniendo a la comunidad 🙌🏼</h1>
            <hr>
            <div >
              <div class="form-group">
                <label for="username"> Usuario </label>
                <input type="text" class="form-control" id="username" v-model="nickname" />
              </div>
              <div class="form-group">
                <label for="email"> Correo </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  pattern="^[a-zA-Z0-9][a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}(?:\.[a-zA-Z]{2})?$"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label for="password"> Contraseña </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                />
              </div>
              <div class="form-group">
                <label for="fistname"> Nombres </label>
                <input type="text" class="form-control" id="fistname" v-model="name" />
              </div>
              <div class="form-group">
                <label for="lastname"> Apellidos </label>
                <input type="text" class="form-control" id="lastname" v-model="last_name" />
              </div>
              <div class="form-group">
                <label for="age"> Edad </label>
                <input type="number" min="1" max="99" class="form-control" id="age" v-model="age" />
              </div>
              <div class="alert alert-success" role="alert" v-if="successMessage">
                {{successMessage}} <a href="/login">Ingresar</a>
              </div>
              <div class="alert alert-danger" role="alert" v-if="errorMessage">
                {{errorMessage}}
              </div>
              <button type="submit" class="btn btn-primary" @click="register">Registrarse 👊🏼</button>
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
import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json';

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
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      try {
        this.successMessage = '';
        this.errorMessage = '';
        let response = await axios.post("http://thisjesusmartinez.com/api/v1/users", {
          user: {
            email: this.email,
            password: this.password,
            profile_attributes: {
              name: this.name,
              last_name: this.last_name,
              age: this.age,
              nickname: this.nickname,
            },
          }
        });
        this.successMessage = 'Tu usuario se ha creado correctamente. Puedes iniciar sesión.'
        console.log(response.data);
      } catch (error) {
        console.log('error');
        this.errorMessage = 'Ocurrio un error, por favor revisa los campos.'
      }
    },
  },
};
</script>
