<template>
<div class="input-field">
    <div class="input-label">Input</div>
    <div class="input"></div>
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
export default class InputFiled extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.input-label {
    margin: 0 0 5px 10px;
}

.input {
    height: 70px;
    border-style: solid;
    border-color: rgb(27, 89, 160);
    border-width: 2px;
    background-color: rgb(255, 254, 254);
    
}
</style>
