<template>
<div>
<section class="pricing" id="pricing">
    <div class="title-container">
        <h1 class="heading"> Nossos Passeios </h1>
    </div>
    <div class="box-container">
        <div class="box"
        data-aos="zoom-in"
        data-aos-ease="ease"
        data-aos-duration="1000"
        data-aos-delay='300'>
              <div class="box-img">
               <Flicking :options="{ horizontal: true }" :plugins="plugins1">
                    <img src="@/assets/images/vooemgrupo.jpeg" style="width: 240px; height: 240px; object-fit: cover;" alt="">
                    <img src="@/assets/images/vooemgrupo.jpeg" style="width: 240px; height: 240px; object-fit: cover;" alt="">
                </Flicking>
              </div>

            <h3 class="title">Voo em Grupo</h3>
            <ul>
                <li> <i class="fas fa-check"></i> 1000+ voos </li>
                <li> <i class="fas fa-check"></i> No transaction fees </li>
                <li> <i class="fas fa-times"></i> unlimited storage </li>
                <li> <i class="fas fa-times"></i> +40 de balões  </li>
            </ul>
            <a href="https://wa.me/5515997150101?text=Ola" class="btn">Confira agora</a>
        </div>
        <div class="box"
        data-aos="zoom-in"
        data-aos-ease="ease"
        data-aos-duration="1000"
        data-aos-delay='300'>
            <div class="box-img">
               <Flicking :options="{ horizontal: true }" :plugins="plugins2">
                  <img src="@/assets/images/voopublicitario.jpeg" style="width: 240px; height: 240px; object-fit: cover;" alt="">
                  <img src="@/assets/images/voopublicitario.jpeg" style="width: 240px; height: 240px; object-fit: cover;" alt="">
                </Flicking>
            </div>
            <h3 class="title">Voo publicitário</h3>
            <ul>
                <li> <i class="fas fa-check"></i> 1000+ voos </li>
                <li> <i class="fas fa-check"></i> No transaction fees </li>
                <li> <i class="fas fa-check"></i> unlimited storage </li>
                <li> <i class="fas fa-times"></i> +40 de balões  </li>
            </ul>
            <a href="https://wa.me/5515997150101?text=Ola" class="btn">Confira agora</a>
        </div>
        <div class="box"
        data-aos="zoom-in"
        data-aos-ease="ease"
        data-aos-duration="1000"
        data-aos-delay='300'
        >
            <div class="box-img">
               <Flicking :options="{ horizontal: true }" :plugins="plugins3">
                <img src="@/assets/images/voocasal.jpeg" style="width: 240px; height: 240px; object-fit: cover;" alt="">
                <img src="@/assets/images/voocasal.jpeg" style="width: 240px; height: 240px; object-fit: cover;" alt="">
                </Flicking>
            </div>
            <h3 class="title">Voo de Casal</h3>
            <ul>
                <li> <i class="fas fa-check"></i> Totalmente Novo! </li>
                <li> <i class="fas fa-check"></i> No transaction fees </li>
                <li> <i class="fas fa-check"></i> unlimited storage </li>
                <li> <i class="fas fa-check"></i> 1 balão no céu </li>
            </ul>
            <a href="https://wa.me/5515997150101?text=Ola" class="btn">Confira agora</a>
        </div>
    </div>
    </section>
  </div>
</template>
<script>
import { AutoPlay } from "@egjs/flicking-plugins";


export default {
  data: () => { return {
      plugins1: [new AutoPlay({ duration: 6000, stopOnHover: false })],
      plugins2: [new AutoPlay({ duration: 6000, stopOnHover: false })],
      plugins3: [new AutoPlay({ duration: 6000, stopOnHover: false })],
    }
  }
}
</script>
