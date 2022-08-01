<template>
  <div id="app">
	<div class="title-container">
		<div>
			<h1 class="heading">Balonismo</h1>
		</div>
		<div class="filters">
			<span class="" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">TODAS</span>
			<span class="" v-bind:class="{ active: currentFilter === 'BAL' }" v-on:click="setFilter('BAL')">BALONISMO</span>
			<span class="" v-bind:class="{ active: currentFilter === 'CLI' }" v-on:click="setFilter('CLI')">CLIENTES</span>
			<span class="" v-bind:class="{ active: currentFilter === 'EXP' }" v-on:click="setFilter('EXP')">EXPERIÊNCIAS</span>
		</div>
	</div>
	<transition-group class="projects" name="projects" >
		<div class="project" v-if="currentFilter === project.category || currentFilter === 'ALL'" v-bind:key="project.title" v-for="project in projects">
			<div class="project-image-wrapper">
				<img class="project-image" v-bind:src="project.image">
				<div class="gradient-overlay"></div>
			</div>
		</div>
	</transition-group>
</div>

</template>

<script>
  import imagema from "@/assets/images/imagem1.jpg"
  import imagemb from "@/assets/images/imagem2.jpg"
  import imagemc from "@/assets/images/imagem3.jpg"
  import imagemd from "@/assets/images/imagem4.jpg"
  import imageme from "@/assets/images/imagem5.jpg"
  import imagemf from "@/assets/images/imagem6.jpg"
  import imagemg from "@/assets/images/imagem7.jpg"
  import imagemh from "@/assets/images/imagem8.jpg"
  import imagemi from "@/assets/images/imagem9.jpg"
  import imagemj from "@/assets/images/imagem10.jpg"
  import imagemk from "@/assets/images/imagem11.jpg"
  import imagemm from "@/assets/images/imagem12.jpg"
  import imagemn from "@/assets/images/imagem13.jpg"
  import imagemo from "@/assets/images/imagem14.jpg"
  import imagemp from "@/assets/images/imagem15.jpg"
  import imagemq from "@/assets/images/imagem16.jpg"
  import imagemr from "@/assets/images/imagem17.jpg"
  import imagems from "@/assets/images/imagem18.jpg"
  export default {
    data:() => ({
      currentFilter: 'ALL',
      projects: [
        {title: "Artwork", image: imagema, category: 'BAL'},
        {title: "Charcoal", image: imagemb, category: 'BAL'},
        {title: "Sketching", image: imagemc, category: 'EXP'},
        {title: "Acrillic", image: imagemd, category: 'CLI'},
        {title: "Pencil", image: imageme, category: 'EXP'},
        {title: "Pen", image: imagemf, category: 'BAL'},
        {title: "Inking", image: imagemg, category: 'CLI'},
        {title: "", image: imagemh, category: 'BAL'},
        {title: "", image: imagemi, category: 'BAL'},
        {title: "", image: imagemj, category: 'BAL'},
        {title: "", image: imagemk, category: 'BAL'},
        {title: "", image: imagemm, category: 'BAL'},
        {title: "", image: imagemn, category: 'BAL'},
        {title: "", image: imagemo, category: 'BAL'},
        {title: "", image: imagemp, category: 'BAL'},
        {title: "", image: imagemq, category: 'BAL'},
        {title: "", image: imagemr, category: 'BAL'},
        {title: "", image: imagems, category: 'EXP'},
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
	margin:10px;
	box-shadow:0px 2px 8px lightgrey;
	border-radius:3px;
	width:180px;
	height:200px;
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

.project-image {
	width:100%;
	height:150px;
	border-bottom-left-radius:5px;
	border-bottom-right-radius:5px;
	border-top-left-radius:3px;
	border-top-right-radius:3px;
}
</style>