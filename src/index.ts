// Thirs script is to build a dts file while a new mothod has been written in a file in the folder src

import * as fs from 'fs';
import * as readline from 'readline';
import * as glob from 'glob';

// Import Watchers
import {Watchers} from "./watchers";

// Path to the Index.d.ts to write
const indexdts = './src/index.d.ts';

// Path to the src Folder
const path = "/home/stalk/Projets/Node/fcom-zoho/src";

class Main {
  private _glob: any;
  private files: any;

  constructor() {
    this._glob = new glob.Glob(path + "/**/**/*.ts", {ignore: path + '/*.d.ts'}, (err, files) => {
      return this._getFiles(files)
    });
  }

  private _getFiles(files: string[]) {
    new Watchers().watchers(files);
  }

}

new Main();



//
// filesWithDirectory = walkSync('./src');
//
// filesWithDirectory.forEach((pathFile) => {
//   fs.watchFile(pathFile, (curr, prev) => {
//     console.log(pathFile + ' file has been changed');
//     analyzeFileBeingModified(pathFile);
//   });
// });