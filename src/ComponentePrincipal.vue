<template>
  <div>
    <div class="barshow">
      <MenuVue />
      <router-view/>
    </div>
  </div>
</template>

<script>
//import MenuVue from '@/components/menu/MenuVue.vue'
import MenuVue from '@/components/menu/menuSide.vue'
  export default {
    components: {
      'MenuVue': MenuVue,
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

