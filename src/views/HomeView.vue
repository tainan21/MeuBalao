<template>
  <div>

<!-- home section starts  -->
<section class="home" id="home">
        <input type="submit" ref="home"  maxlength="0"  />
        <Flicking :options="{ circular: true, horizontal: true }" :plugins="plugins">
        <div class="content banner-rotate">
              <h3 data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-delay="300">Voe com a  <span class="text-gradient">Meu Balão</span></h3>
              <a href="https://wa.me/5515997150101?text=Ola" class="btn"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-delay="300">Confira Agora!</a>
        </div>   
        <div class="content banner-rotate">
              <h3 data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-delay="300">Melhor Voo <span class="text-gradient">Boituva</span></h3>
              <a href="https://wa.me/5515997150101?text=Ola" class="btn"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-delay="300">Chame!</a>
        </div>  
        <div class="content banner-rotate">
              <h3 data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-delay="300">O melhor voo <span class="text-gradient">Boituva</span></h3>
              <a href="https://wa.me/5515997150101?text=Ola" class="btn"
              data-aos="zoom-in"
              data-aos-easing="ease-in"
              data-aos-duration="1000"
              data-aos-delay="300">Chame!</a>
        </div>          
        </Flicking>
    <Flicking :options="{ circular: true, horizontal: false }">
      <div class="image image-balon" data-aos="zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
          data-aos-delay="300">
          <img src="@/assets/images/home-img.png" style="width: 100%; height: 100%; object-fit: cover;" alt="">
      </div>
       <div class="image image-balon"         data-aos="zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
          data-aos-delay="300">
          <img src="@/assets/images/home-img-ant.png" style="width: 100%; height: 100%;" alt="">
      </div>
    </Flicking>


</section>
<!-- home section ends -->

<!-- about section starts  -->

<section class="about" id="about">
    <h1 class="heading"> Sobre nós </h1>
    <div class="column">
        <div class="image">
            <img src="@/assets/images/home-img.png" alt="">
        </div>
        <div class="content">
            <input type="submit" ref="about"  maxlength="0"  />
                <div class="displayBox" data-aos="zoom-in" data-aos-duration="1500">
                    <h3>Um sonho ao nosso, diretamente para vocês</h3>
                <p>Em 2013 em uma viajem a Turquia, eu fiz um voo de balão na capadócia, naquela manhã uma semente estava plantada em meu coração, uma paixão pelo balonismo. Anos depois eu tive oportunidade de conhecer o balonismo de Boituva,</p>
                <div class="buttons">
                    <a href="https://wa.me/5515997150101?text=Ola" class="btn"> <i class=" bx bxl-whatsapp icont-rest" ></i> Whatsapp </a>
                    <a href="https://www.instagram.com/meubalaoboituva/" class="btn"> <i class="bx bxl-instagram icont-rest"></i> Instagram </a>
                </div>
            </div>            
        </div>
    </div>

</section>

<!-- about section ends -->


<!-- Serviços section starts  -->

<section class="features" id="features">

    <h1 class="heading"> Serviços </h1>
    <input type="submit" ref="services"  maxlength="0"  />

    <div class="box-container">

        <div class="box "  
        data-aos="slide-right"
        data-aos-easing="ease-in"
        data-aos-duration="1000"
        data-aos-delay="300">
            <img src="@/assets/images/f-icon1.png" alt="">
            <h3>Voo Em Grupo</h3>
            <p>O voo em grupo tem a capacidade entre 7 e 28 pessoas. É indicado para famílias ou grupos de amigos. Crianças acompanhadas dos responsáveis também podem voar! O voo tem duração entre 50min e 1h10.</p>
            <a href="https://wa.me/5515997150101?text=Ola" class="btn">Saiba Mais!</a>
        </div>
        <!--
          <div class="box"
        data-aos="zoom-in"
        data-aos-ease="ease"
        data-aos-duration="1000"
        data-aos-delay='300'>
            <img src="@/assets/images/f-icon2.png" alt="">
            <h3>Adaptado a todos!</h3>
            <p>Somos os únicos em Boituva, com balões <b>PCD</b> abraçando e adaptado para todos! <b>Nossa maior preocupação é a sua felicidade, venha aproveitar conosco!</b></p>
            <a href="https://wa.me/5515997150101?text=Ola" class="btn">Saiba Mais!</a>
        </div>  
        -->
        <div class="box"
        data-aos="zoom-in"
        data-aos-ease="ease"
        data-aos-duration="1000"
        data-aos-delay='300'>
            <img src="@/assets/images/f-icon2.png" alt="">
            <h3>Voo Publicitário!</h3>
            <p></p>
            <a href="https://wa.me/5515997150101?text=Ola" class="btn">Saiba Mais!</a>
        </div>

        <div class="box"
        data-aos="zoom-in"
        data-aos-easing="ease-in"
        data-aos-duration="1000"
        data-aos-delay="300">
            <img src="@/assets/images/f-icon2.png" alt="">
            <h3>voo de casal</h3>
            <p>O voo em casal é realizado com até 2 passageiros. É indicado para casais ou pessoas que querem comemorar uma data especial, uma conquista ou até mesmo
                 um pedido de casamento! O voo acontece em  Boituva e tem duração entre 50min e 1h10.</p>
            <a href="https://wa.me/5515997150101?text=Ola" class="btn">Saiba Mais!</a>
        </div>

    </div>

</section>


<!-- pricing section starts  -->

<section class="pricing" id="pricing">
    <input type="submit" ref="passeios"  maxlength="0"  />
    <div class="title-container">
        <h1 class="heading"> Nossos Passeios </h1>
    </div>
    <input type="submit" ref="search"  maxlength="0"  />
    <div class="box-container">
        <div class="box"
        data-aos="zoom-in"
        data-aos-ease="ease"
        data-aos-duration="1000"
        data-aos-delay='300'>
              <div class="box-img">
               <Flicking :options="{ horizontal: true }" :plugins="plugins">
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
               <Flicking :options="{ horizontal: true }" :plugins="plugins">
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
               <Flicking :options="{ horizontal: true }" :plugins="plugins">
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


<!-- pricing section ends -->


<!-- features section ends -->


<!-- newsletter  -->

<!--
<div class="newsletter">
  
    <h1 class="heading">Siga-nos para mais informações</h1>
    <p>Deixe seu instagram que iremos te seguir para mais informações :). Ou siga para receber novidades!</p>
    <form action="">
        <input type="email" placeholder="Deixe seu Instagram">
        <input type="submit" value="Instagram">
    </form>
  
</div>
-->
<!-- review section starts  -->

<section class="review" id="review">

    <div class="title-container">
	    <h1 class="heading"> Depoimento de Clientes </h1>
	</div>
    <input type="submit" ref="depoiment"  maxlength="0"  />

    <div class="box-container">
        <Flicking :options="{  horizontal: true }">
          <div class="box box-coments panel"
            data-aos="zoom-in"
            data-aos-ease="ease"
            data-aos-duration="1000"
            data-aos-delay='300'>
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="@/assets/images/pic1.png" alt="Comentário 1 Boituva - Balonismo">
                <h3>Suyane Francyne</h3>
                <div class="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                </div>
                <div class="comment">
                    Empresa responsável, com equipamentos novos e excelentes, equipe qualificada com um diferencial em acessibilidade e respeito aos clientes.
                </div>
            </div>
        </div>
        <div class="box box-coments panel"
            data-aos="zoom-in"
            data-aos-ease="ease"
            data-aos-duration="1000"
            data-aos-delay='300'
            >
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="@/assets/images/pic1.png" alt="Comentário 1 Boituva - Balonismo">
                <h3>Suyane Francyne</h3>
                <div class="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                </div>
                <div class="comment">
                    Empresa responsável, com equipamentos novos e excelentes, equipe qualificada com um diferencial em acessibilidade e respeito aos clientes.
                </div>
            </div>
        </div>
        <div class="box box-coments panel"
            data-aos="zoom-in"
            data-aos-ease="ease"
            data-aos-duration="1000"
            data-aos-delay='300'>
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="@/assets/images/pic2.png"  alt="Comentário 2 Boituva - balonismo">
                <h3>Arthur souza</h3>
                <div class="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                </div>
                <div class="comment">
                    Experiência sem igual. Sensacional o passeio e a receptividade de todos. Recomendo. A vista é íncrivel!
                </div>
            </div>
        </div> 
        <div class="box box-coments panel"
            data-aos="zoom-in"
            data-aos-ease="ease"
            data-aos-duration="1000"
            data-aos-delay='300'>
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="@/assets/images/pic2.png"  alt="Comentário 2 Boituva - balonismo">
                <h3>Arthur souza</h3>
                <div class="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                </div>
                <div class="comment">
                    Experiência sem igual. Sensacional o passeio e a receptividade de todos. Recomendo. A vista é íncrivel!
                </div>
            </div>
        </div>    
           <div class="box box-coments panel"
            data-aos="zoom-in"
            data-aos-ease="ease"
            data-aos-duration="1000"
            data-aos-delay='300'>
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="@/assets/images/pic2.png"  alt="Comentário 2 Boituva - balonismo">
                <h3>Arthur souza</h3>
                <div class="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                </div>
                <div class="comment">
                    Experiência sem igual. Sensacional o passeio e a receptividade de todos. Recomendo. A vista é íncrivel!
                </div>
            </div>
        </div>      
      </Flicking>

       
    </div>

</section>

<!-- review section ends -->

<!-- GalleryFilter section starts -->

<input type="submit" ref="gallery"  maxlength="0"  />
<GalleryFilter /> 

<!-- GalleryFilter section ends -->


<div class="footer"
            data-aos="zoom-in"
            data-aos-ease="ease"
            data-aos-duration="1000"
            data-aos-delay='300'>
    <div class="box-container">

        <div class="box">
            <h3>Nosso Contato</h3>
            <div class="info">
                <i class="bx bx-phone"></i>
                <p> (15) 99715-0101 </p>
            </div>
            <div class="info">
                <i class="bx bx-envelope"></i>
                <p> meubalaobtv@gmail.com </p>
            </div>
            <div class="info">
                <i class="bx bx-map"></i>
                <p> Boituva  </p>
            </div>
        </div>
        <div class="box">
            <h3 class="">Sobre</h3>
            <p>Em 2013 Em Uma Viajem A Turquia, Eu Fiz Um Voo De Balão Na Capadócia, Naquela Manhã Uma Semente Estava Plantada Em Meu Coração, Uma Paixão Pelo Balonismo. Anos Depois Eu Tive Oportunidade De Conhecer O Balonismo De Boituva.</p>
        </div>
    </div>
    <h1 class="center text-center" style="text-align: center;"> &copy; copyright @ 2021 by TaiCode </h1>
</div>


<!-- contact section starts  -->
<!--
<section class="contact" id="contact">

    <div class="image">
        <img src="@/assets/images/contact-img.png" alt="">
    </div>

    <form action="">

        <h1 class="heading">Contate-nos</h1>
        <input type="submit" ref="contact"  maxlength="0"  />

        <div class="inputBox">
            <input type="text" required>
            <label>name</label>
        </div>

        <div class="inputBox">
            <input type="email" required>
            <label>email</label>
        </div>

        <div class="inputBox">
            <input type="number" required>
            <label>phone</label>
        </div>

        <div class="inputBox">
            <textarea required name="" id="" cols="30" rows="10"></textarea>
            <label>message</label>
        </div>

        <input type="submit" class="btn" value="send message">

    </form>

</section>
-->
<!-- contact section edns -->

<!-- footer section starts 

<div class="footer"
            data-aos="zoom-in"
            data-aos-ease="ease"
            data-aos-duration="1000"
            data-aos-delay='300'>

    <div class="box-container">

        <div class="box">
            <h3>Nosso Contato</h3>
            <div class="info">
                <i class="bx bx-phone"></i>
                <p> (15) 99715-0101 </p>
            </div>
            <div class="info">
                <i class="bx bx-envelope"></i>
                <p> meubalaobtv@gmail.com </p>
            </div>
            <div class="info">
                <i class="bx bx-map"></i>
                <p> Boituva  </p>
            </div>
        </div>
        <div class="box">
            <h3 class="">Links</h3>
            <a href="#">home</a>
            <a href="#">Sobre</a>
            <a href="#">Services</a>
            <a href="#">Depoimentos</a>
            <a href="#">Galeria</a>
            <a href="#">Contato</a>
        </div>
        <div class="box">
            <h3 class="">Siga</h3>
            <a href="https://www.facebook.com/meubalaoboituva"><i class='bx bxl-facebook-square icont-rest'></i>facebook</a>
            <a href="https://www.instagram.com/meubalaoboituva/"><i class='bx bxl-instagram icont-rest'></i>instagram</a>
        </div>
        <div class="box">
            <h3 class="">Sobre</h3>
            <p>Em 2013 Em Uma Viajem A Turquia, Eu Fiz Um Voo De Balão Na Capadócia, Naquela Manhã Uma Semente Estava Plantada Em Meu Coração, Uma Paixão Pelo Balonismo. Anos Depois Eu Tive Oportunidade De Conhecer O Balonismo De Boituva.</p>
        </div>
    </div>
    <h1 class="center text-center" style="text-align: center;"> &copy; copyright @ 2021 by TaiCode </h1>

</div>
 -->
  </div>
</template>

<script>
import GalleryFilter from '@/views/GalleryFilter.vue'
import {EventBus} from "@/eventbus"
import { AutoPlay } from "@egjs/flicking-plugins";


  export default {
    data:() => ({
        options: [],
        plugins: [new AutoPlay()],
        active: false
    }),
    components: {
      'GalleryFilter': GalleryFilter
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
<style lang="scss" scoped>
    .title-container {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

.home{
    background:url(@/assets/images/ceu.jpg) no-repeat;
//    background-image: url(https://img.freepik.com/fotos-gratis/natureza-anoitecer-nuvem-paisagem-colorida_1203-5705.jpg?w=740&t=st=1659215220~exp=1659215820~hmac=571604d…);
    min-height: 550px;
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