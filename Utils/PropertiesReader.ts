// utils/PropertiesReader.ts

import PropertiesReader from 'properties-reader';
import path from 'path';

const filePath = path.join(__dirname, '../config/config.properties');

const properties = PropertiesReader(filePath);

export const config = {
    baseUrl: properties.get('baseUrl') as string,
    username: properties.get('username') as string,
    password: properties.get('password') as string,
    browser: properties.get('browser') as string,
    devEnv: properties.get('devEnv') as string
};