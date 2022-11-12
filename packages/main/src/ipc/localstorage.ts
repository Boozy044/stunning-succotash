const Store = require('electron-store');

const store = new Store();

export const saveSettings = (settings: string) => {
  store.set('settings', JSON.parse(settings));
};

export const getSettings = () => {
  if (!store.store.settings) {
    return {
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
    };
  }
  return store.get('settings');
};

export const getVkToken = () => {
  return store.get('settings.parsers.vkToken');
};

export const getDatabase = () => {
  return store.get('settings.database');
};
