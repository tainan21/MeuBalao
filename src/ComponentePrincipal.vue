<template>
  <div>
    <div class="barshow">
      <MenuVue />
      <MenuVueBottom />
      <router-view/>
    </div>
  </div>
</template>

<script>
//import MenuVue from '@/components/menu/MenuVue.vue'
import MenuVue from '@/components/menu/menuSide.vue'
import MenuVueBottom from '@/components/menu/menuBottom.vue'
  export default {
    components: {
      'MenuVue': MenuVue,
      'MenuVueBottom': MenuVueBottom,
    },
  }
 </script>
 <style>
@media (max-width: 599px)
{
  .barshow{
    display: none;
   }
}
@media (min-width: 600px)
{
  .topbarshowphone{
    display: none;
   }
}
</style>

