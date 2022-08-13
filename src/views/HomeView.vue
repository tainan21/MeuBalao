<template>
    <div>
        <input type="submit" ref="home"  maxlength="0"  />
        <BannerInicial />
        <input type="submit" ref="about"  maxlength="0"  />
        <About />
       <input type="submit" ref="services"  maxlength="0"  />
        <NossosPasseios />
        <input type="submit" ref="about"  maxlength="0"  />
        <PVCSection />
        <input type="submit" ref="Contact"  maxlength="0"  />
     <!--    <Services />  -->
        <input type="submit" ref="Depoiments"  maxlength="0"  />
        <Depoiments />
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
        active: false
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
      setFocus: function(){
        this.$refs.home.focus();
      },
      setFocusAbout: function(){
        this.$refs.about.focus();
      },
      setFocusServices: function(){
        this.$refs.services.focus();
      },
      setFocusDepoiment: function(){
        this.$refs.depoiment.focus();
      },
      setFocusGallery: function(){
        this.$refs.gallery.focus();
      },
      setFocusContact: function(){
        this.$refs.contact.focus();
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
