import fs from 'fs';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newPath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    await fs.promises.rename(oldPath, newPath).catch(()=>{
        throw new Error('FS operation failed');
    })
};

await rename();
