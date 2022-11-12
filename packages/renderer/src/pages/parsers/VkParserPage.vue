<template>
  <el-main>
    <el-row
      :gutter="12"
      justify="center"
    >
      <el-form
        :model="form"
        label-position="top"
        label-width="120px"
      >
        <el-form-item label="Введите id группы">
          <el-input v-model="form.group_id" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :disabled="vkToken ? false : true"
            @click="onStartParsing"
          >
            Начать
          </el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row :gutter="12">
      <el-col
        v-for="item in pairedGroups"
        :key="item.name"
        :span="24"
      >
        <el-card
          class="card-group"
          shadow="never"
        >
          <template #header>
            <div class="card-header">
              <div class="card-header-info">
                <el-avatar
                  class="avatar"
                  shape="square"
                  :size="50"
                  :src="item.photo_100"
                />
                <span>{{ item.name }}</span>
              </div>
              <span>ID: {{ item.id }}</span>
            </div>
          </template>
          <div v-if="item.deactivated">
            <span>Не удалось получить участников группы, так как группа заблокирована!</span>
          </div>
          <div v-else>
            <p>{{ item.description }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="12"></el-row>
  </el-main>
</template>

<script setup lang="ts">
import {reactive} from 'vue';
import {useTitle} from '@vueuse/core';
import {storeToRefs} from 'pinia';
import {ElNotification, ElLoading} from 'element-plus';
import {useVkParserStore} from '/@/stores/vkParserStore';
import {useSettingsStore} from '/@/stores/settingsStore';

useTitle('Парсер Вконтакте');

const vkParserStore = useVkParserStore();
const {groupId, pairedGroups} = storeToRefs(vkParserStore);
const {startParsing, addPairedGroup} = vkParserStore;

const settingsStore = useSettingsStore();
const {vkToken} = storeToRefs(settingsStore);

const form = reactive({
  group_id: groupId,
});

let loading: any;

const onStartParsing = () => {
  loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  });
  startParsing();
};

window.api.notify.groupInfo((_event, value) => {
  addPairedGroup(value);
});

window.api.notify.stopParser(_event => {
  loading.close();
  ElNotification({
    title: 'Успешно',
    message: 'Парсинг закончен',
    type: 'success',
  });
});

window.api.notify.onError((_event, value) => {
  loading.close();
  ElNotification({
    title: 'Ошибка',
    message: `${value}`,
    type: 'error',
  });
});
</script>

<style scoped lang="scss">
.card-group {
  margin-bottom: 10px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-info {
    display: flex;
    align-items: center;

    & > .avatar {
      margin-right: 20px;
    }
  }
}
</style>
