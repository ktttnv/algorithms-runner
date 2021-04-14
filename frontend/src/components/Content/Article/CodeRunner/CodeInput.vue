<template>
<div class="input-code">

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
export default class InputCode extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.input-code {
    height: 200px;
    border-style: solid;
    border-color: rgb(27, 89, 160);
    border-width: 2px;
    background-color: rgb(255, 254, 254);
    
}
</style>
