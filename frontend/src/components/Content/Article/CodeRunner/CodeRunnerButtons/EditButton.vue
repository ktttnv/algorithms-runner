<template>
<div class="edit-button">
    <el-tooltip class="item" effect="light" content="Edit code" placement="bottom-end">
        <el-button type="primary" icon="el-icon-edit"></el-button>
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
export default class EditButton extends Vue {
    msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped></style>
