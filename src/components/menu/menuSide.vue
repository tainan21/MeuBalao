<template>
    <div class="hidden">
      <vs-navbar shadow square center-collapsed v-model="active">
        <template #left>
          <vs-button @click="activeSidebar = !activeSidebar" flat icon>
            <i class='bx bx-menu'></i>
          </vs-button>
        </template>
            <vs-navbar-item :active="active == 'guide'" item:id="guide">Home</vs-navbar-item>
            <vs-navbar-item :active="active == 'docs'" id="docs">Empresa</vs-navbar-item>
            <vs-navbar-item :active="active == 'components'" id="components">Serviços</vs-navbar-item>
            <vs-navbar-item :active="active == 'components'" id="components">Galeria</vs-navbar-item>
            <vs-navbar-item :active="active == 'license'" id="license">Contato</vs-navbar-item>
        <template #right>
            <router-link to="#ancora"> Teste </router-link>
        </template>
      </vs-navbar>
      <vs-sidebar
        absolute
        v-model="active"
        :open.sync="activeSidebar"
        >
        <template #logo>
          <!-- ...img logo -->
        </template>
        <vs-sidebar-item id="home">
          <template #icon>
            <i class='bx bx-home'></i>
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="market">
          <template #icon>
            <i class='bx bx-grid-alt'></i>
          </template>
          Market Overview
        </vs-sidebar-item>
        <vs-sidebar-item id="Music">
          <template #icon>
            <i class='bx bxs-music'></i>
          </template>
          Music
        </vs-sidebar-item>
      </vs-sidebar>
    </div>
  </template>
<script>
  export default {
    data:() => ({
      active: 'home',
      activeSidebar: false
    })
  }
  </script>

        