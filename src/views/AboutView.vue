<template>
  <div id="app">
    <button @click="scrollToElement">scroll to last</button>
    <p v-for="n of 200" :key="n" :ref="n === 100 ? 'last' : undefined">
      {{ n }}
    </p>
        <button @click="scrollToElement">scroll to last</button>

     <p v-for="n of 200" :key="n" :ref="n === 300 ? 'last' : undefined">
      {{ n }}
    </p>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    scrollToElement() {
      const [el] = this.$refs.last;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
#app {
	font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  line-height: 2rem;
  color: #2c3e50;
  width: 800px;
  margin: 0 auto;
}
.verde{
    width: 100vw;
    height: 100vh;
    background: green;
}
.amarelo{
    width: 100vw;
    height: 100vh;
    background: yellow;
}
.vermelho{
    width: 100vw;
    height: 100vh;
    background: red;
}

.scroll-to-top {
  padding: 30px 0;
  position: absolute;
  right: 0;
}

.scroll-to-top button {
  border: none;
  background: transparent;
  cursor: pointer;
}

</style>
