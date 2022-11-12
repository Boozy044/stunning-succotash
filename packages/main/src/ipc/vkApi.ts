import {API} from 'vk-io';
import {getVkToken} from '/@/ipc/localstorage';

export const api = new API({
  token: getVkToken() || '98b906fd98b906fd98b906fd6898c2095e998b998b906fdf94c4a597ae017249ccfaf0e',
  language: 'ru',
});
