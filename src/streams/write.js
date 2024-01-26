import fs from 'fs';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const pathFile = join(__dirname, 'files', 'fileToWrite.txt');
    const writableStream = fs.createWriteStream(pathFile);
    process.stdin.pipe(writableStream);
};

await write();
