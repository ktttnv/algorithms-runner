<template>
<div class="admin-menu">
    <div class="admin-menu-title">Admin Menu</div>
    <el-menu>
        <el-menu-item index="1">
            <i class="el-icon-data-analysis"></i>
            <span>Analytics</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-folder-opened"></i>
            <span>Edit 1</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-edit"></i>
            <span>Edit 2</span>
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
export default class AdminMenu extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.admin-menu {
    margin: 10px;
    display: flex;
    flex-direction: column;
}

.admin-menu-title {
    margin: 10px;;
}

h3 {
    color: #409dfe;
}
</style>
