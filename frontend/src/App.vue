<template>
<div class="container">
    <Header msg="Algorithm Runner" />
    <Content />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <Footer msg="Hi, I'm a footer" />
</div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Content from "./components/Content/Content.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
    name: "App",
    components: {
        Header,
        Content,
        Footer,
    },
};
</script>

<style lang="scss">
.container {
    width: 960px;
    margin: 0 auto;
    background-color: rgb(230, 248, 255);
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
