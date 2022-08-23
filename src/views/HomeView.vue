<template>
    <div>
       <div class="topbarshowphone">
        <div class="salvo" >
          <div>
             <vs-button @click="activeSidebar = !activeSidebar" >
              <i class='bx bx-menu-alt-left'></i>
            </vs-button> 
          </div>
          <div >
             <div class="balon-img">
                <img src="@/assets/images/logo-trans.png" class="logoimgapp" alt="meubalao">
              </div>
          </div>
          <div style="display: flex; align-items: center; justify-content: center;">
             <vs-button  href="https://www.instagram.com/meubalaoboituva/"  flat icon>
              <i class='bx bxl-instagram'  style="font-size: 18px !important;"></i>
            </vs-button>
            <vs-button  href="https://www.facebook.com/meubalaoboituva" flat icon>
              <i class='bx bxl-facebook' style="font-size: 18px !important;"></i>
            </vs-button>
          </div>
        </div>
      <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
        <template #logo><!-- ...img logo --></template>
            <vs-sidebar-item  id="home" >
              <div @click="test_home()">home</div>
              <template  #icon><i class='bx bx-home'></i></template>
            </vs-sidebar-item>
            <vs-sidebar-item  id="abouts" >
              <div @click="test_abouts()">about</div>
              <template  #icon><i class='bx bx-grid-alt'></i></template>
            </vs-sidebar-item>
            <vs-sidebar-item  id="servic" >
              <div @click="test_servic()">Serviços</div>
              <template  #icon><i class='bx bxs-spreadsheet'></i></template>
            </vs-sidebar-item>
            <vs-sidebar-item  id="depoiment" >
              <div @click="test_click()">Depoimentos</div>
              <template  #icon><i class='bx bxs-message-dots'></i></template>
            </vs-sidebar-item>
            <vs-sidebar-item  id="contact" >
              <div @click="test_adaptados()">Adaptados</div>
              <template  #icon><i class='bx bx-handicap'></i></template>
            </vs-sidebar-item>
            <vs-sidebar-item  id="galery" >
              <div @click="test_click()">galery</div>
              <template  #icon><i class='bx bxs-image'></i></template>
            </vs-sidebar-item>
          </vs-sidebar>
      </div>
        <input type="submit" ref="home"  maxlength="0"  />
          <p ref="home"></p>
        <BannerInicial />
        <p ref="abouts"></p>
          <input type="submit" ref="about"  maxlength="0"  />
        <About />
        <p ref="servic"></p>
          <input type="submit" ref="services"  maxlength="0"  />
        <NossosPasseios />
        <p ref="adaptados"></p>
          <input type="submit" ref="Contact"  maxlength="0"  />
        <PVCSection />
          <!--    <Services />  -->
        <input type="submit" ref="Depoiments"  maxlength="0"  />
        <p ref="depoiments"></p>
        <Depoiments />
        <p ref="teste"></p>
        <input type="submit" ref="gallery"  maxlength="0"  />
        <GalleryFilter />
        <FooterSection />
    </div>
</template>

<script>
import GalleryFilter from '@/views/GalleryFilter.vue'
import NossosPasseios from '@/components/NossosPasseios.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Depoiments from '@/components/Depoiments.vue'
import BannerInicial from '@/components/BannerInicial.vue'
import FooterSection from '@/components/Footer.vue'
import PVCSection from '@/components/PVCSection.vue'
import {EventBus} from "@/eventbus"
import { AutoPlay } from "@egjs/flicking-plugins";


  export default {
    data:() => ({
        options: [],
        plugins: [new AutoPlay()],
        active: false,
              activeSidebar: false

    }),
    components: {
      'GalleryFilter': GalleryFilter,
      'NossosPasseios': NossosPasseios,
      'About': About,
      'Services': Services,
      'Depoiments': Depoiments,
      'BannerInicial': BannerInicial,
      'FooterSection': FooterSection,
      'PVCSection': PVCSection,
     },
    methods: {
      test_click(){
      const el = this.$refs.teste
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        }
      },
      test_servic(){
      const el = this.$refs.servic
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        }
      },
      test_depoiments(){
      const el = this.$refs.depoiments
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        }
      },
      test_abouts(){
      const el = this.$refs.abouts
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        }
      },
      test_home(){
      const el = this.$refs.home
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        }
      },
      test_adaptados(){
      const el = this.$refs.adaptados
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        }
      },
      setFocus: function(){
        this.$refs.home.focus();
      },
      setFocusAbout(){
      //  this.$refs.about.focus();
      },
      setFocusServices: function(){
        this.$refs.services.focus();
        console.log('tu entro aq rapa');
      },
      setFocusDepoiment: function(){
        this.$refs.Depoiments.focus();
      },
      setFocusGallery: function(){
        this.$refs.gallery.focus();
      },
      setFocusContact: function(){
        this.$refs.Contact.focus();
      },
    },
    created(){
      EventBus.$on('focus', () => {this.setFocus()}),
      EventBus.$on('focusabout', () => {this.setFocusAbout()}),
      EventBus.$on('focusservices', () => {this.setFocusServices()}),
      EventBus.$on('focusdepoiment', () => {this.setFocusDepoiment()}),
      EventBus.$on('focusgallery', () => {this.setFocusGallery()}),
      EventBus.$on('focuscontact', () => {this.setFocusContact()})
    },
  }
 </script>
