<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>

<script setup lang="ts">
import {onMounted} from 'vue';
import {RouterView} from 'vue-router';
import AppLayout from '/@/layouts/AppLayout.vue';
import {useSettingsStore} from '/@/stores/settingsStore';

const settingsStore = useSettingsStore();
const {getSettings} = settingsStore;

onMounted(async () => {
  await getSettings();
});
</script>
