<template>
    <div class="hidden">
      <div class="barshow">
        <vs-navbar shadow square center-collapsed v-model="active">
          <template #left>
              <div class="testesupremo">
                <div class="image">
                  <img src="@/assets/images/logo-trans.png" class="logoimg" alt="meubalao">
                </div>
              </div>
          </template>
          <template #right>
            <div class="barshow">
              <vs-navbar-item :active="active == 'guide'" item:id="guide" @click="setFocus()">Home</vs-navbar-item>
              <vs-navbar-item :active="active == 'docs'" id="docs" @click="setFocusAbout()">Sobre</vs-navbar-item>
              <vs-navbar-item :active="active == 'Services'" id="Services" @click="setFocusServices()">Serviços</vs-navbar-item>
              <vs-navbar-item :active="active == 'Depoiment'" id="Depoiment" @click="setFocusDepoiment()">Depoimentos</vs-navbar-item>
              <vs-navbar-item :active="active == 'galery'" id="galery" @click="setFocusGallery()">Galeria</vs-navbar-item>
              <vs-navbar-item :active="active == 'license'" id="license" @click="setFocusContact()">Contato</vs-navbar-item>
            </div>
          </template>
        </vs-navbar>
      </div>
      <div class="topbarshowphone">
        <vs-navbar shadow square center-collapsed v-model="active">
          <template #left>
            <vs-button @click="activeSidebar = !activeSidebar" flat icon>
              <i class='bx bx-menu'></i>
            </vs-button>
          </template>
        </vs-navbar>
      <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
        <template #logo><!-- ...img logo --></template>
        <vs-sidebar-item id="home">
          <template #icon>
            <i class='bx bx-home'></i>
          </template>Home
        </vs-sidebar-item>
        <vs-sidebar-item id="market">
          <template #icon><i class='bx bx-grid-alt'></i></template>Home
        </vs-sidebar-item>
        <vs-sidebar-item id="Music">
          <template #icon><i class='bx bxs-music'></i></template>Empresa
        </vs-sidebar-item>
      </vs-sidebar>
      </div>
    </div>
  </template>
<script>
import {EventBus} from "@/eventbus"
  export default {
    data:() => ({
      active: 'home',
      activeSidebar: false
    }),
    methods: {
      setFocus(){
        EventBus.$emit('focus')
      },
      setFocusAbout(){
        EventBus.$emit('focusabout')
      },
      setFocusServices(){
        EventBus.$emit('focusservices')
      },
      setFocusDepoiment(){
        EventBus.$emit('focusdepoiment')
      },
      setFocusGallery(){
        EventBus.$emit('focusgallery')
      },
      setFocusContact(){
        EventBus.$emit('focuscontact')
      },
    }
  }
  </script>

        
 <style>
@media (max-width: 599px)
{
  .barshow{
    display: none;
    margin: 0 !important;
   }
}
@media (min-width: 600px)
{
  .topbarshowphone{
    display: none;
   }
}

</style>
