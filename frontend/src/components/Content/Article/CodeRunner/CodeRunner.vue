<template>
<div class="code-runner">
    <CodeInput class="code-input-runner"/>
    <InputField class="input-field-runner"/>
    <OutputField class="output-field-runner"/>
    <CodeRunnerButtons class="buttons-runner"/>
</div>
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import CodeInput from "./CodeInput.vue";
import InputField from "./InputField.vue";
import OutputField from "./OutputField.vue";
import CodeRunnerButtons from "./CodeRunnerButtons/CodeRunnerButtons.vue";

@Options({
    components: {
        CodeInput,
        InputField,
        OutputField,
        CodeRunnerButtons,
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
    margin-bottom: 30px;
    border-style: solid;
    border-color: rgb(27, 89, 160);
    border-width: 2px;
    background-color: rgb(255, 247, 234);
}

.code-input-runner {
    margin: 20px 10px;
}

.input-field-runner {
    margin: 10px;
}

.output-field-runner {
    margin: 10px;
}

.buttons-runner {
    margin: 10px;
}
</style>
