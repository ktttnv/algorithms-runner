<template>
<div class="menu">
    <UserMenu />
    <AdminMenu />
</div>
</template>

<script lang="ts">
import {
    Options,
    Vue
} from "vue-class-component";
import UserMenu from "./UserMenu.vue";
import AdminMenu from "./AdminMenu.vue";

@Options({
    components: {
        UserMenu,
        AdminMenu,
    },
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
    display: flex;
    flex-direction: column;

}

h3 {
    color: #409dfe;
}
</style>
