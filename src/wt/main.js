import {Worker, isMainThread} from 'worker_threads';
import os from 'os';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const pathWorker = path.join(__dirname, 'worker.js');
    const numCores = os.cpus().length;
    const workers = [];

    if (isMainThread) {
        for (let i = 0; i < numCores; i++) {
            const promise = new Promise((resolve) =>{
                const uniqueData = 10 + i;
                const worker = new Worker(pathWorker, { workerData: uniqueData });
                worker.on('message', (msg)=>{
                    resolve({ status: 'resolved', data: msg })
                })
                worker.on('error', ()=>{
                    resolve({ status: 'error', data: null })
                })
            })
            workers.push(promise);
        }
    }

    const result = await Promise.all(workers);
    console.log(result);
};

await performCalculations();
