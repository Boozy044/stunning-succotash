export {};
import type {IpcRendererEvent, IpcRenderer} from 'electron';

declare global {
  interface Window {
    api: {
      saveSettings: (settings: string) => Promise<any>;
      getSettings: () => Promise<any>;
      startParsingVk: (groupId: string) => Promise<any>;

      notify: {
        saveSettings: (callback: (event: IpcRendererEvent, args: any[]) => void) => IpcRenderer;
        groupInfo: (callback: (event: IpcRendererEvent, args: any[]) => void) => IpcRenderer;
        countPages: (callback: (event: IpcRendererEvent, args: any[]) => void) => IpcRenderer;
        stopParser: (callback: (event: IpcRendererEvent, args: any[]) => void) => IpcRenderer;
        onError: (callback: (event: IpcRendererEvent, args: any[]) => void) => IpcRenderer;
      };
    };
  }
}
