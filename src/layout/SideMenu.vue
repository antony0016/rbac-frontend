<template>
  <el-menu
    :collapse="menuSwitch.isFold"
    :default-active="nowPath"
    class="el-menu-vertical-fix"
  >
    <el-menu-item
      v-for="(item, index) in routedSideMenuItems" :key="index" v-show="item.isShow"
      :index="item.to" @click="goto(item.to, item.name)" class="el-sub-menu">
      <el-icon>
        <location/>
      </el-icon>
      <template #title>
        <span>{{ item.name }}</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { Location } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";

import useViewControllerStore from "../store/ViewControllerStore";
import router from "../router";

const viewControllerStore = useViewControllerStore();

const { menuSwitch, sideMenuItems, nowPath } = storeToRefs(viewControllerStore);

const routedSideMenuItems = computed(() => {
  const items = sideMenuItems.value.filter(item => item.id == menuSwitch.value.topBarId)
  return items[0].subMenu;
})

const goto = (path: string, name: string) => {
  // nowPath.value = path;
  router.push(path).then(r => r);
}
</script>

<style scoped>
.el-menu-vertical-fix:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-sub-menu {
  height: 3em;
}
</style>
