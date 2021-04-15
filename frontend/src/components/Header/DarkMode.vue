<template>
<div class="dark-mode">
    <el-switch name="switchDarkMode" style="display: block" v-model="isDarkMode" active-color="#0D0D45" inactive-color="#ABA9F3" active-icon-class="el-icon-moon" inactive-icon-class="el-icon-sunny">
    </el-switch>
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
export default class Header extends Vue {
    msg!: string;
    isDarkMode = false;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.dark-mode {
    text-align: right;
}
</style>
