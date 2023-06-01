<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="secondary">
        <b-navbar-brand href="#">
          <img src="https://placekitten.com/g/30/30" alt="Kitten">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form> -->

            <b-nav-item-dropdown text="Usuarios" right>
              <b-dropdown-item href="#">Usuarios</b-dropdown-item>
              <b-dropdown-item href="#">Equipos de trabajo</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-navbar-nav>
              <b-nav-item href="#">Mediciones</b-nav-item>
              <b-nav-item href="#">Periodos</b-nav-item>
              <b-nav-item href="#">Checklist</b-nav-item>
              <b-nav-item href="#">Checklisttttttttttttttttttttttttttttttttttttttttttttttttt</b-nav-item>
              <!--               <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
            </b-navbar-nav>

            <!-- <b-nav-item-dropdown right>       
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
            <b-navbar-nav >
              <b-nav-item href="#">Perfil</b-nav-item>
              <b-nav-item href="#">Cerrar sesion</b-nav-item>
              <!--               <b-nav-item href="#" disabled>Disabled</b-nav-item>-->
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/people">Personas</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>