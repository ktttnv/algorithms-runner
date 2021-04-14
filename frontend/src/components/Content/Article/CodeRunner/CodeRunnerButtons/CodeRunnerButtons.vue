<template>
<div class="code-runner-buttons">
    <EditButton class="edit-code-button"/>
    <RunButton class="run-code-button"/>
</div>
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import EditButton from "./EditButton.vue";
import RunButton from "./RunButton.vue";

@Options({
    components: {
        EditButton,
        RunButton,
    },
    props: {
        msg: String,
    },
})
export default class CodeRunnerButtons extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.code-runner-buttons {
    display: flex;
    justify-content: flex-end;
}

.edit-code-button {
    margin: 0 10px;
}
</style>
