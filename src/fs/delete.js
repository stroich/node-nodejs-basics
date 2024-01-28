import { rm } from 'fs/promises';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const deletedFilePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    await rm(deletedFilePath).catch(()=>{
        throw new Error('FS operation failed');
    })
};

await remove();
