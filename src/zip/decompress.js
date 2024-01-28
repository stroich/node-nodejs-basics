import fs from 'fs';
import zlib from "zlib";
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const pathFile = join(__dirname, 'files', 'fileToCompress.txt');
    const pathZipFile = join(__dirname, 'files', 'archive.gz');
    const readStream = fs.createReadStream(pathZipFile);
    const writeStream = fs.createWriteStream(pathFile);
    const decompressStream = zlib.createGunzip();
    readStream.pipe(decompressStream).pipe(writeStream);
};

await decompress();
