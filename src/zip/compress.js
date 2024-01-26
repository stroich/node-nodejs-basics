import fs from 'fs';
import zlib from "zlib";
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const pathFile = join(__dirname, 'files', 'fileToCompress.txt');
    const pathZipFile = join(__dirname, 'files', 'archive.gz');
    const readStream = fs.createReadStream(pathFile);
    const writeStream = fs.createWriteStream(pathZipFile);
    const compressStream = zlib.createGzip();
    readStream.pipe(compressStream).pipe(writeStream);
};

await compress();
