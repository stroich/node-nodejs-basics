import {readFile} from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const files = await readFile(filePath, 'utf8');
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();
