import  { fork } from 'child_process';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const pathChild = path.join(__dirname, 'files', 'script.js', );
    const child = fork(pathChild, args, { stdio: ['pipe', 'pipe', 'ignore', 'ipc' ] });
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};


spawnChildProcess(  ['some1', 'some2' ] );
