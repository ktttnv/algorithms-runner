<template>
<div class="footer">
    <h3>{{ msg }}</h3>
</div>
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";

@Options({
    props: {
        msg: String,
    },
})
export default class Footer extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.footer {
    display: flex;
    height: 70px;
    background-color: #097df8;
}

h3 {
    color: #e5effa;
    margin: auto;
}
</style>
