import fs from 'fs';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const pathNewFile = path.join(__dirname, 'files', 'fresh.txt');

    fs.access(pathNewFile, function(error){
        if (error) {
            fs.writeFile(pathNewFile, 'I am fresh and young', (err)=>{
                if(err){
                    throw err;
                }
            })
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await create();
