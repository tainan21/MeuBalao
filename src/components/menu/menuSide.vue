<template>
    <div class="hidden">
      <div class="barshow">
        <vs-navbar shadow square center-collapsed
        data-aos="zoom-in"
        data-aos-ease="ease"
        data-aos-duration="1500"
        data-aos-delay='400'
        >
          <template #left>
              <div class="card-logo">
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
          <template>
              <div class="card-logo-app">
                <img src="@/assets/images/logo-trans.png" class="logoimgapp" alt="meubalao">
              </div>
          </template>
          <template #right>
            <vs-button  href="https://www.instagram.com/meubalaoboituva/"  flat icon>
              <i class='bx bxl-instagram'></i>
            </vs-button>
            <vs-button  href="https://www.facebook.com/meubalaoboituva" flat icon>
              <i class='bx bxl-facebook'></i>
            </vs-button>
            <vs-button  href="https://wa.me/5515997150101?text=Ola"  flat icon>
              <i class='bx bxl-whatsapp'></i>
            </vs-button>
          </template>
        </vs-navbar>
      <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
        <template #logo><!-- ...img logo --></template>
        <div @click="setFocus()">
          <vs-sidebar-item id="home" >
            <template #icon> <i class='bx bx-home'></i></template>Home
          </vs-sidebar-item>
        </div>
        <div  @click="setFocusAbout()">
          <vs-sidebar-item id="market">
            <template #icon ><i class='bx bx-grid-alt'></i></template>Sobre
          </vs-sidebar-item>
        </div>
        <div @click="setFocusServices()">
          <vs-sidebar-item id="services"  >
            <template #icon ><i class='bx bxs-music'></i></template>Serviços
          </vs-sidebar-item>
        </div>
        <div @click="setFocusDepoiment()">
          <vs-sidebar-item id="depoiment">
            <template #icon   ><i class='bx bxs-music'></i></template>Depoimentos
          </vs-sidebar-item>
        </div>
        <div @click="setFocusGallery()">
          <vs-sidebar-item id="galery" >
            <template #icon><i class='bx bxs-music'></i></template>Galeria
          </vs-sidebar-item>
        </div>
        <div @click="setFocusContact()">
          <vs-sidebar-item id="contact" >
            <template #icon ><i class='bx bxs-music'></i></template>Contato
          </vs-sidebar-item>
        </div>
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
.card-logo-app{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 32%; top: 0px; bottom: -10px;
  background: white;
  width: 100px;
  height: 60px;
  color: white;
  border-bottom-right-radius: 110%;
  border-bottom-left-radius: 110%;
}
.logoimgapp{
  position: relative;
  width: 45px !important;
  height: 45px !important; 
}
@media (max-width: 599px)
{
  .barshow{
    display: none;
    margin: 0 !important;
   }
  .vs-navbar-content{
    position: relative !important;
  }
}
@media (min-width: 600px)
{
  .topbarshowphone{
    display: none;
   }
   .vs-navbar-content{
      position: fixed !important;
    }
}

</style>
