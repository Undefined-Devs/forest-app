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
                        <input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address...">
                        </div>
                        <div class="form-group">
                        <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password">
                        </div>
                        <a href="index.html" class="btn btn-primary btn-user btn-block">
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
export default {
  name: 'Login',
};
</script>