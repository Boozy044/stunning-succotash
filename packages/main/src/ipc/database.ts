import {createConnection} from 'mysql2/promise';
import {getDatabase} from '/@/ipc/localstorage';

import type {Responses} from 'vk-io';

const getConnection = async () => {
  const databaseSettings = getDatabase();

  return await createConnection({
    host: databaseSettings.host || 'localhost',
    user: databaseSettings.user || 'root',
    database: databaseSettings.name || 'parser',
    password: databaseSettings.password || 'root',
  });
};

export const saveUsersInDatabase = async (group_id: string, users: Responses.UsersGetResponse) => {
  try {
    const connection = await getConnection();

    const newUsers = users.map(value => {
      const user = [
        value['id'],
        value['first_name'],
        value['last_name'],
        value['deactivated'],
        value['is_closed'],
        value['about'],
        value['activities'],
        value['bdate'],
        value['books'],
        value['city'],
        value['connections'],
        value['contacts'],
        value['country'],
        value['domain'],
        value['education'],
        value['games'],
        value['interests'],
        value['military'],
        value['movies'],
        value['music'],
        value['nickname'],
        value['personal'],
        value['quotes'],
        value['relation'],
        value['schools'],
        value['screen_name'],
        value['sex'],
        value['site'],
        value['status'],
        value['tv'],
        value['universities'],
        group_id,
      ];
      return user;
    });

    await connection.query(
      'INSERT INTO `b-vk` (`vk_id`, `first_name`, `last_name`, `deactivated`, `is_closed`, `about`, `activities`, `bdate`, `books`, `city`, `connections`, `contacts`, `country`, `domain`, `education`, `games`, `interests`, `military`, `movies`, `music`, `nickname`, `personal`, `quotes`, `relation`, `schools`, `screen_name`, `sex`, `site`, `status`, `tv`, `universities`, `t`) VALUES ?',
      [newUsers],
    );
  } catch (error) {
    console.error(error);
  }
};
