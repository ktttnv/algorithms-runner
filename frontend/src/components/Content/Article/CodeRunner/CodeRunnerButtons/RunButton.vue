<template>
<div class="run-button">
    <el-tooltip class="item" effect="light" content="Run code. What have you expected?" placement="bottom-start">
        <el-button type="success">Run code</el-button>
    </el-tooltip>
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
export default class RunButton extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped></style>
