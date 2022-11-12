<template>
  <div class="common-layout">
    <el-header>
      <el-menu
        :default-active="route.path"
        class="el-menu-demo"
        mode="horizontal"
        router
      >
        <el-menu-item
          index="/"
          route="/"
        >
          Главная
        </el-menu-item>
        <el-sub-menu index="/parsers">
          <template #title>Парсеры</template>
          <el-menu-item
            index="/vk"
            route="/parsers/vk"
          >
            Парсер Вконтакте
          </el-menu-item>
          <el-menu-item
            index="/inst"
            route="/parsers/inst"
          >
            Парсер Инстаграм
          </el-menu-item>
          <el-menu-item
            index="/twogis"
            route="/parsers/twogis"
          >
            Парсер 2 гис
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item
          index="/settings"
          route="/settings"
        >
          Настройки
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <slot />
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style scoped></style>
