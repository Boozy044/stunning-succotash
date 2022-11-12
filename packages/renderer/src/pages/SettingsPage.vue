<template>
  <el-main>
    <el-row :gutter="12">
      <el-col>
        <h3>Настройки базы данных</h3>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col>
        <el-form
          :model="settings"
          label-position="top"
          label-width="120px"
        >
          <el-form-item label="Введите HOST базы данных">
            <el-input
              v-model="settings.database.host"
              placeholder="localhost"
              clearable
            />
          </el-form-item>
          <el-form-item label="Введите имя пользователя">
            <el-input
              v-model="settings.database.user"
              placeholder="root"
              clearable
            />
          </el-form-item>
          <el-form-item label="Введите пароль пользователя">
            <el-input
              v-model="settings.database.password"
              type="password"
              placeholder="root"
              show-password
              clearable
            />
          </el-form-item>
          <el-form-item label="Введите имя базыданных">
            <el-input
              v-model="settings.database.name"
              placeholder="example"
              clearable
            />
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row :gutter="12">
      <el-col>
        <h3>Настройки парсеров</h3>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col>
        <el-form
          :model="settings"
          label-position="top"
          label-width="120px"
        >
          <el-form-item label="Введите token вконтакте">
            <el-input
              v-model="settings.parsers.vkToken"
              placeholder="example"
            />
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row :gutter="12">
      <el-col>
        <h3>Настройки рассылки</h3>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col>
        <el-form
          :model="settings"
          label-position="top"
          label-width="120px"
        >
          <el-form-item label="Введите id группы">
            <el-input v-model="settings.database.host" />
          </el-form-item>
          <el-form-item label="Введите id группы">
            <el-input v-model="settings.database.user" />
          </el-form-item>
          <el-form-item label="Введите id группы">
            <el-input v-model="settings.database.password" />
          </el-form-item>
          <el-form-item label="Введите id группы">
            <el-input v-model="settings.database.name" />
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col>
        <el-button @click="clearSettings">Очистить</el-button>
        <el-button
          type="primary"
          @click="saveSettings"
        >
          Сохранить
        </el-button>
      </el-col>
    </el-row>
  </el-main>
</template>

<script setup lang="ts">
import {useTitle} from '@vueuse/core';
import { ElNotification } from 'element-plus';
import {storeToRefs} from 'pinia';
import { useSettingsStore } from '/@/stores/settingsStore';

useTitle('Настройки');

const settingsStore = useSettingsStore();
const {settings} = storeToRefs(settingsStore);
const {saveSettings, clearSettings} = settingsStore;

window.api.notify.saveSettings(() => {
  ElNotification({
    title: 'Успешно',
    message: 'Настройки сохранены!',
    type: 'success',
  });
});

</script>

<style scoped></style>
