import path from 'path';
import { argv } from 'yargs';

const APP_ROOT_PATH = __dirname;
const PROJECT_ROOT_PATH = path.join(APP_ROOT_PATH, '..');

export const APP = {
    LIMIT: 16,
    PORT: 3000,
    ROOT_PATH: APP_ROOT_PATH,
    PROJECT_ROOT_PATH
};

export const MONGO_DB = {
    uri: `mongodb://127.0.0.1:${argv.dbport || '27017'}/`,
    username: argv.db_username || 'DB_username',
    password: argv.db_password || 'DB_password',
};