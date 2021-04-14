<template>
<div class="user-menu">
    <div class="user-menu-title"><b>User Menu</b></div>
    <el-menu>
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
export default class UserMenu extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.user-menu {
    margin: 10px;
    display: flex;
    flex-direction: column;
}

.user-menu-title {
    margin: 10px;;
}

h3 {
    color: #409dfe;
}
</style>
