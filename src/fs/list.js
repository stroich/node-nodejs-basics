import { readdir } from 'fs/promises';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectFolder = path.join(__dirname, 'files');

const list = async () => {
    try {
        const files = await readdir(projectFolder);
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();
