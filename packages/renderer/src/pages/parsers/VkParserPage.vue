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
            @click="onStartParsing"
          >
            Начать
          </el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row
      :gutter="12"
    >
      <el-card
        v-for="item in pairedGroups"
        :key="item.name"
      >
        <span>Вконтакте</span>
      </el-card>
    </el-row>
    <el-row
      :gutter="12"
    ></el-row>
  </el-main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useTitle } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { useVkParserStore } from '/@/stores/vkParserStore';

useTitle('Парсер Вконтакте');

const vkParserStore = useVkParserStore();
const { groupId, pairedGroups } = storeToRefs(vkParserStore);
const { startParsing } = vkParserStore;

const form = reactive({
  group_id: groupId,
});

const onStartParsing = () => {
  startParsing();
};
</script>

<style scoped>

</style>
