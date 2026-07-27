import fs from 'fs';
import { parseStringPromise } from 'xml2js';

export async function readXML(filePath :string) {
    const xmlData = fs.readFileSunc(filePath, 'utf-8');
    const result = await parseStringPromise(xmlData);
    return result;
}