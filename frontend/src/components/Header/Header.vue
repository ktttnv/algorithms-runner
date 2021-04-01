<template>
  <div class="header">
    <h1>{{ msg }}</h1>
    <Navigation></Navigation>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navigation from "./Navigation.vue"

@Options({
  components: {
    Navigation,
  },
  props: {
    msg: String,
  },
})
export default class Header extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
