<template>
<div class="content">
    <Article />
    <Menu />
</div>
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import Article from "./Article/Article.vue";
import Menu from "./Menu/Menu.vue";

@Options({
    components: {
        Article,
        Menu,
    },
})
export default class Content extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped></style>
