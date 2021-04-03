<template>
<div class="content">
    <h3>{{ msg }}</h3>
    <Menu />
</div>
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import Menu from "./Menu/Menu.vue";

@Options({
    components: {
        Menu,
    },
    props: {
        msg: String,
    },
})
export default class Content extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped></style>
