<template>
    <div class="container">
        <div class="row justify-content-center align-items-center h-100 pb-5">

        <div class="col-xl-10 col-lg-12 col-md-9">

            <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-7">
                    <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900">¡Bienvenido!</h1>
                        <p class="text-sm text-justify">Ingresa sesión para subir tu reto y empezar a cambiar al mundo.</p>
                    </div>
                    <form class="user">
                        <div class="form-group">
                            <input type="email" v-model="email" class="form-control form-control-user" id="exampleInputEmail"  placeholder="Escribe tu correo electrónico">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Contraseña">
                        </div>
                        <div class="alert alert-danger" role="alert" v-if="errorMessage">
                            {{errorMessage}}
                        </div>
                        <a @click="login" class="btn btn-primary btn-user btn-block">
                            Acceder
                        </a>
                    </form>
                    <hr>
                    <div class="text-center">
                        <a class="small" href="/new-user">¡Registrarse!</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>

        </div>
    </div>
</template>

<script>
import auth from '@/helpers/auth';
export default {
  name: 'Login',
  data: function () {
    return {
      email: "",
      password: "",
      errorMessage: '',
      successMessage: '',
      submitted: false
    };
  },
  methods: {
    async login() {
      try {
        this.successMessage = '';
        this.errorMessage = '';
	    this.submitted = true;
        await auth.authenticate({
          email: this.email,
          password: this.password
        });
        window.location = '/';
      } catch (error) {
        console.log(error);
        this.errorMessage = 'Ocurrio un error, por favor revisa los campos.';
        if (error.response.data.response) this.errorMessage = error.response.data.response;
      } finally {
        this.submitted = false;
      }
    },
  },
};
</script>