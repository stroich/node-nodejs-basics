import fs from 'fs';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectFolderCopy = path.join(__dirname, 'files-copy');
const projectFolder = path.join(__dirname, 'files');

const copy = async () => {
    fs.promises.access(projectFolderCopy, fs.constants.R_OK).then(() => {
        throw new Error('FS operation failed');
    }).catch((err) => {
        if (err.code === 'ENOENT') {
            fs.promises.readdir(projectFolder)
                .catch(() => {
                    throw new Error('FS operation failed');
                })
                .then((files) => {
                    fs.promises.mkdir(projectFolderCopy)
                        .then(() => {
                            files.forEach((file) => {
                                const projectFile = path.join(projectFolder, file);
                                const projectFileCopy = path.join(projectFolderCopy, file);
                                fs.promises.copyFile(projectFile, projectFileCopy);
                            });
                        })
                })
        } else {
            throw new Error('FS operation failed');
        }
    })
};

await copy();
