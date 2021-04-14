<template>
<div class="run-button">
    <el-button type="success">Run code</el-button>
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

<style lang="scss" scoped>
.run-button {
    margin: 10px 0;
    float: right;
}
</style>
