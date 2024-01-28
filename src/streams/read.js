import fs from 'fs';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const read = async () => {
    const pathFile = join(__dirname, 'files', 'fileToRead.txt');
    const stream = fs.createReadStream(pathFile);
    stream.on('data', (content) => {
        process.stdout.write(content);
    });
};

await read();
