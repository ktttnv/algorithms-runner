<template>
<div class="header">
    <DarkMode></DarkMode>
    <div class="title-name">
        <h1>{{ msg }}</h1>
    </div>
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
.title-name {
    height: 70px;
}

h1 {
    color: #409dfe;
}
</style>
