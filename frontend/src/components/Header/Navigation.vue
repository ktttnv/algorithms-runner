<template>
  <div class="navigation">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">Algorithms</el-menu-item>
      <el-menu-item index="3">About</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Header extends Vue {
  msg!: string;
  activeIndex = "2";
  handleSelect(key: string, keyPath: string): void {
    console.log(key, keyPath);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
