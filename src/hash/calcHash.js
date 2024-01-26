import fs from 'fs';
import crypto from "crypto";
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const pathFile = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const stream = fs.createReadStream(pathFile);
    const hash = crypto.createHash('sha256');

    stream.on('data', data => {
        hash.update(data);
    });

    stream.on('end', () => {
        const hexData = hash.digest('hex');
        console.log(hexData);
    });
};

await calculateHash();
