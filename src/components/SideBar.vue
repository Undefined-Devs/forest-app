<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-gradient-success sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <i class="fas fa-tree"></i>
      <div class="sidebar-brand-text mx-3">Forest App <sup>1.0</sup></div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <li class="nav-item">
      <a
        class="nav-link text-center"
        href="#"
      >
        <span class="mr-2 d-none d-lg-inline small"><strong>Cristopher PS</strong></span>
        <img
          class="img-profile rounded-circle"
          src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
        />
      </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">
      MENU
    </div>

    <li class="nav-item active">
      <a class="nav-link" href="/">
        <i class="fas fa-home"></i>
        <span>Inicio</span></a
      >
    </li>

    <li class="nav-item">
      <a class="nav-link" href="/challenges">
        <i class="fas fa-fan"></i>
        <span>Retos</span></a
      >
    </li>

    <li class="nav-item">
      <a class="nav-link" href="/new-user">
        <i class="fas fa-users"></i>
        <span>Registrarse</span></a
      >
    </li>

    <li class="nav-item">
      <a class="nav-link" href="/new-post">
        <span>Aceptar Reto</span></a
      >
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

  </ul>
  <!-- End of Sidebar -->
</template>

<script>
export default {
  name: 'SideBar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
