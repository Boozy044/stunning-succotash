<template>
  <div class="common-layout">
    <el-header>
      <el-menu
        default-active="/"
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

<script setup lang="ts"></script>

<style scoped></style>
