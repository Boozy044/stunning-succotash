/**
 * @module preload
 */
import { contextBridge, ipcRenderer } from 'electron';
import type { IpcRendererEvent } from 'electron';
export { sha256sum } from './nodeCrypto';
export { versions } from './versions';

contextBridge.exposeInMainWorld('api', {
  saveSettings: (settings: string) => ipcRenderer.invoke('saveSettings', settings),
  getSettings: () => ipcRenderer.invoke('getSettings'),
  startParsingVk: (groupId: string) => ipcRenderer.invoke('startParsingVk', groupId),

  notify: {
    saveSettings: (callback: (event: IpcRendererEvent, value: any) => void) =>
      ipcRenderer.on('saveSettingsNotify', callback),

    groupInfo: (callback: (event: IpcRendererEvent, value: any) => void) =>
      ipcRenderer.on('groupInfoNotify', callback),
    countPages: (callback: (event: IpcRendererEvent, value: any) => void) =>
      ipcRenderer.on('countPagesNotify', callback),
    stopParser: (callback: (event: IpcRendererEvent, value: any) => void) =>
      ipcRenderer.on('stopParsingNotify', callback),

    onError: (callback: (event: IpcRendererEvent, value: any) => void) =>
      ipcRenderer.on('error', callback),
  },
});
