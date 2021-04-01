<template>
  <div class="home">
    <img alt="Header image" src="../assets/header.jpg" height="350" />
    <Header msg="Welcome to Algorithm Runner App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "../components/Header/Header.vue"; // @ is an alias to /src

@Options({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>
