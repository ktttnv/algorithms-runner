<template>
  <div class="home">
    <img alt="Header image" src="../assets/header.jpg" height="350"/>
    <HelloWorld msg="Welcome to Algorithm Runner App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
