<template>
<div class="header">
    <DarkMode></DarkMode>
    <h1>{{ msg }}</h1>
    <Navigation></Navigation>
</div>
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import Navigation from "./Navigation.vue";
import DarkMode from "./DarkMode.vue";

@Options({
    components: {
        Navigation,
        DarkMode,
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

<style lang="scss" scoped>
h1 {
    color: #409dfe;
}
</style>
