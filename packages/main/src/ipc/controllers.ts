import { ipcMain } from 'electron';
import type { IpcMainInvokeEvent } from 'electron';
import { saveSettings, getSettings } from '/@/ipc/localstorage';
import { api } from '/@/ipc/vkApi';
import { saveUsersInDatabase } from '/@/ipc/database';

ipcMain.handle('saveSettings', (event: IpcMainInvokeEvent, settings: string) => {
  try {
    saveSettings(settings);
    event.sender.send('saveSettingsNotify');
  } catch (error) {
    event.sender.send('error', error);
  }
});

ipcMain.handle('getSettings', (event: IpcMainInvokeEvent) => {
  try {
    return getSettings();
  } catch (error) {
    event.sender.send('error', error);
  }
});

ipcMain.handle('startParsingVk', async (event: IpcMainInvokeEvent, groupId: string) => {
  try {
    const groupInfo = await api.groups.getById({
      group_id: groupId,
      fields: [
        'activity',
        'members_count',
        'city',
        'contacts',
        'counters',
        'country',
        'description',
        'links',
        'site',
        'status',
        'verified',
        'wiki_page',
        'finish_date',
      ],
    });

    event.sender.send('groupInfoNotify', groupInfo[0]);

    const countPages = Math.ceil(groupInfo[0].members_count / 1000);

    for (let i = 0; i < countPages; i++) {
      const test2 = await api.groups.getMembers({
        group_id: groupId,
        offset: i * 1000,
      });

      const test = await api.users.get({
        user_ids: test2.items,
        fields: [
          'about',
          'activities',
          'bdate',
          'books',
          'city',
          'connections',
          'contacts',
          'country',
          'domain',
          'education',
          'games',
          'interests',
          'military',
          'movies',
          'music',
          'nickname',
          'personal',
          'quotes',
          'relation',
          'schools',
          'screen_name',
          'sex',
          'site',
          'status',
          'tv',
          'universities',
        ],
      });

      saveUsersInDatabase(groupId, test);
    }

    event.sender.send('stopParsingNotify');

  } catch (error) {
    event.sender.send('error', error);
  }
});
