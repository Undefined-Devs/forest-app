<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-gradient-success sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
      <i class="fas fa-tree" style="font-size:1.6rem;"></i>
      <div class="sidebar-brand-text mx-3">Forest App <sup>1.0</sup></div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <li class="nav-item">
      <a
        class="nav-link text-center text-white"
      >
        <span class="mr-2 d-none d-lg-inline "><strong>Cristopher PS</strong></span>
        <i class="fas fa-user text-white"></i>
      </a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">
      MENU
    </div>

    <li :class="route == 'Home' ? 'nav-item active' : 'nav-item'">
      <a class="nav-link" href="/">
        <i class="fas fa-home"></i>
        <span>Inicio</span></a
      >
    </li>
    
    <li :class="route == 'Challenges' ? 'nav-item active' : 'nav-item'">
      <a class="nav-link" href="/challenges">
        <i class="fas fa-fan"></i>
        <span>Retos</span></a
      >
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <li :class="route == 'Login' ? 'nav-item active' : 'nav-item'">
      <a class="nav-link" href="/login">
        <i class="fas fa-sign-in-alt"></i>
        <span>Ingresar</span></a
      >
    </li>

    <li :class="route == 'NewUser' ? 'nav-item active' : 'nav-item'">
      <a class="nav-link" href="/new-user">
        <i class="fas fa-users"></i>
        <span>Registrarse</span></a
      >
    </li>

    <li :class="'nav-item'">
      <a class="nav-link" href="/">
        <i class="fas fa-sign-out-alt"></i>
        <span>Salir</span></a
      >
    </li>

  </ul>
  <!-- End of Sidebar -->
</template>

<script>
export default {
  name: 'SideBar',
  computed: {
    route () {      
      return this.$router.history.current.name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
