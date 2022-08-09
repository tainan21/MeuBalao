<template>
<div>

 <!--
  <div class="">
  
    <div class="teste12" id="home">
      <Flicking :options="{ circular: true }" :plugins="plugins">
      <div class="content home">
          <h3>Melhor Passeio de <span class="text-gradient">Boituva</span></h3>
          <a href="https://wa.me/5515997150101?text=Ola" class="btn">Confira Agora!</a>
          <input type="submit" ref="home"  maxlength="0"  />
      </div>
      <div class="image">
          <img src="@/assets/images/home-img.png" alt="">
      </div>
      </Flicking>
 
          <div class="image">
        <Flicking :options="{ circular: true, horizontal: false }" :plugins="plugins">
          <div class="weather-panel">
            <img src="@/assets/images/home-img.png" alt="">
            </div>
          <div class="weather-panel">
            <img src="@/assets/images/home-img.png" alt="">
          </div>
          <div class="weather-panel">
            <img src="@/assets/images/home-img.png" alt="">
          </div>
        </Flicking>
      </div>
 
    </div>
  </div> -->
         

  </div>
</template>
<script>
import { AutoPlay } from "@egjs/flicking-plugins";
export default {
  data() {
    return {
      plugins: [new AutoPlay()]
    }
  }
}
</script>

<style lang="scss" scoped>
    .title-container {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
.teste12{
  display: flex;
  align-items: center;
  justify-content: center;
}

.home{
    background:url(@/assets/images/ceu.jpg) no-repeat;
//    background-image: url(https://img.freepik.com/fotos-gratis/natureza-anoitecer-nuvem-paisagem-colorida_1203-5705.jpg?w=740&t=st=1659215220~exp=1659215820~hmac=571604d…);
    min-height: 400px;
    background-attachment: fixed;
    background-position: 50%;
    background-repeat: no-repeat;
    width: 100%;
    background-size: cover;
}

input{
  -webkit-appearance: none;
  opacity: 0;
}

.icont-rest{
    position: relative;
    bottom: -1.4px;
}

</style>