<template>
<div class="menu">
    <div>Menu</div>
    <el-menu default-active="2">
        <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span>Home</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-s-data"></i>
            <span>Algorithms</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-info"></i>
            <span>About</span>
        </el-menu-item>
    </el-menu>
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
export default class Menu extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.menu {
    margin: 10px;
    width: calc(33% - 24px);
    display: inline-block;
}

h3 {
    color: #409dfe;
}
</style>
