<template>
<div class="code-runner">
    <InputCode />
    <InputField />
    <OutputField />
</div>
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import InputCode from "./InputCode.vue";
import InputField from "./InputField.vue";
import OutputField from "./OutputField.vue";

@Options({
    components: {
        InputCode,
        InputField,
        OutputField,
    },
    props: {
        msg: String,
    },
})
export default class CodeRunner extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.code-runner {
    margin-top: 15px;
    border-style: solid;
    border-color: blue;
    border-width: 2px;
    background-color: aquamarine;

}
</style>
