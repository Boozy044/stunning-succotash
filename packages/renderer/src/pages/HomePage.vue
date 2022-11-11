<template>
  <el-main>
    <el-row :gutter="12">
      <el-col>
        <h3>Парсеры</h3>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="8">
        <router-link
          class="el-card-link"
          to="/parsers/vk"
        >
          <el-card
            shadow="hover"
          >
            <div class="el-card-wrapper">
              <span>Вконтакте</span>
              <el-image
                style="width: 30px; height: 30px"
                :src="VkLogo"
                fit="cover"
              />
            </div>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="8">
        <router-link
          class="el-card-link"
          to="/parsers/vk"
        >
          <el-card
            shadow="hover"
          >
            <div class="el-card-wrapper">
              <span>Инстаграм</span>
              <el-image
                style="width: 30px; height: 30px"
                :src="InstaLogo"
                fit="cover"
              />
            </div>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="8">
        <el-card
          class="box-card"
          shadow="never"
        >
          Скоро...
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script setup lang="ts">
import VkLogo from '/@/assets/img/logo/vk.png';
import InstaLogo from '/@/assets/img/logo/instagram.png';
</script>

<style scoped lang="scss">
.el-card {
  cursor: pointer;

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-link {
    text-decoration: none;
  }
}
</style>
