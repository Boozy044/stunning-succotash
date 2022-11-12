import {ref, computed} from 'vue';
import {defineStore} from 'pinia';

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref({
    database: {
      host: '',
      user: '',
      password: '',
      name: '',
    },
    parsers: {
      vkToken: '',
    },
    mailing: {},
  });

  const vkToken = computed(() => settings.value.parsers.vkToken);

  function saveSettings() {
    window.api.saveSettings(JSON.stringify(settings.value));
  }

  async function getSettings() {
    settings.value = await window.api.getSettings();
    console.log('test: ', await window.api.getSettings());
  }

  function clearSettings() {
    console.log(settings);
  }

  return {settings, vkToken, saveSettings, clearSettings, getSettings};
});
