<template>
  <div id="app">
	<div class="title-container">
		<div>
			<h1 class="heading">Balonismo</h1>
		</div>
		<div class="filters">
			<span class="filters_button" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">TODAS</span>
			<span class="filters_button" v-bind:class="{ active: currentFilter === 'BAL' }" v-on:click="setFilter('BAL')">BALONISMO</span>
			<span class="filters_button" v-bind:class="{ active: currentFilter === 'CLI' }" v-on:click="setFilter('CLI')">CLIENTES</span>
			<span class="filters_button" v-bind:class="{ active: currentFilter === 'EXP' }" v-on:click="setFilter('EXP')">EXPERIÊNCIAS</span>
		</div>
	</div>
	<transition-group class="projects" name="projects" >
		<div class="project" v-if="currentFilter === project.category || currentFilter === 'ALL'" v-bind:key="project.title" v-for="project in projects">
			<vs-card type="2">
    <template #title>
      <h3>{{project.title}}</h3>
    </template>
    <template shadow #img >
      <div @click="active=!active">
        <img v-bind:src="project.image">
        <div class="center">
          <vs-dialog blur v-model="active">
            <template #header>
              <h4 class="not-margin"><b>{{project.title}}</b></h4>
            </template>
            <img v-bind:src="project.image" class="img-fluid" alt="Responsive image" style="width: 100%; height: 400px; background-size: cover; object-fit: cover;"></img>
            <template #footer>
              <div class="footer-dialog">
                  <h2 class="Product_Info-Title"><b>{{project.title}}</b></h2>
                  <h2 class="Product_Info-Description">Informações sobre a imagem</h2>
              </div>
            </template>
          </vs-dialog>
        </div>
      </div>
    </template>
      <template #text>
        <p>{{project.desc}}</p>
    </template>
    <template #interactions>
      <vs-button primary shadow icon @click="active=!active">
        <i class='bx bx-low-vision'></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary @click="active=!active">
        <i class='bx bx-info-circle' ></i>
      </vs-button>
    </template>
  </vs-card>
    
		</div>
	</transition-group>
  

</div>

</template>

<script>
  import imagema from "@/assets/images/imagem1.jpg"
  import imagemb from "@/assets/images/imagem2.jpg"
  export default {
    data:() => ({
      options: [],
      active: false,
      currentFilter: 'ALL',
      projects: [
        {title: "Artwork", image: imagema, desc: "texto alternativo", category: 'BAL'},
        {title: "Charcoal", image: imagemb, desc: "", category: 'BAL'},
      ]
    }),
	methods: {
		setFilter: function(filter) {
			this.currentFilter = filter;
		}
	},
  mounted() {
  	this.previews = _.shuffle(this.previews);
  },
  }
  </script>


<style lang="scss" scoped>
html,body {
	margin:0;
	font-family: 'Dawning of a New Day', cursive;
}

.title-container {
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
}

.Product_Info-Title{
    color: rgb(0, 0, 0);
    font-family: Poppins,sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    margin: 15px 10px;
    word-break: break-word;
}
.Product_wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.Product{
    &_Button{
            display: flex;
            align-items: center;
            background: var(--bg-color);
            justify-content: center;
            color: white;
        }
    &_Info{
        &-Price{
            color:rgb(48, 51, 60);
            margin-top: 10px;
            font-size: 16px;
            font-weight: bold;
            line-height: 120%;
        }
        &-Title{
            word-break: break-word;
        }
        &-Description{
            font-size: 16px;
            margin-top: 10px;
            font-size: 14px;
            font-weight: 500;
            line-height: 150%;
            color: rgb(127, 143, 159);
        }
    }
    &_Image{
      background: #000;
      color: white;
      border-radius: 4px;
      margin-bottom: 20px;
      transition: all .35s ease-in-out;
      width: 100%; 
      background-size: cover; 
      object-fit: cover;
      & img{
        width: 200px;
        height: 200px;
        cursor: pointer;
        &:hover{ 
          width: 120%;
          transition: all .35s ease-in-out;
        }
      }
      &:hover{ 
        width: 120%;
        transition: all .35s ease-in-out;
      }
  }
}

.title {
	font-family: 'Dawning of a New Day', cursive;
	font-size:30pt;
	font-weight:normal;
}

.project-title {
font-size:16pt	
}

.projects {
	margin-bottom:50px;
	margin-top:25px;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
}

.projects-enter {
	transform: scale(0.5) translatey(-80px);
	opacity:0;
}

.projects-leave-to{
	transform: translatey(30px);
	opacity:0;
}

.projects-leave-active {
	position: absolute;
	z-index:-1;
}

.circle {
	text-align:center;
	position:absolute;
	bottom:-38px;
	left:40px;
	width:100px;
	height:100px;
	border-radius:50px;
/* 	border:1px solid black; */
	display:flex;
	box-shadow: 0px -4px 3px 0px #494d3257;
	justify-content:center;
	align-items:center;
	background-color:#fff;
/* 	box-shadow:0px -3px 3px #484848a6; */
}

.project {
	transition: all .35s ease-in-out;
	margin: 10px;
	border-radius:3px;
	display:flex;
	flex-direction:column;
	align-items:center;
}

.project-image-wrapper {
	position:relative;
}

.gradient-overlay {
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:150px;
	opacity:0.09;
	background: 
		linear-gradient(to bottom, rgba(0,210,247,0.65) 0%,rgba(0,210,247,0.64) 1%,rgba(0,0,0,0) 100%), 
		linear-gradient(to top, rgba(247,0,156,0.65) 0%,rgba(247,0,156,0.64) 1%,rgba(0,0,0,0) 100%);
	border-bottom-left-radius:10px;
	border-bottom-right-radius:10px;
	border-top-left-radius:3px;
	border-top-right-radius:3px;
}


</style>