// Thirs script is to build a dts file while a new mothod has been written in a file in the folder src

import * as fs from 'fs';
import * as readline from 'readline';
import * as glob from 'glob';
// Import Watchers
import Watchers from "./watchers";

// Path to the Index.d.ts to write
export const indexdts: string = '/home/stalk/Projets/Node/indexBuilder/test.ts';

// Path to the src Folder
export const path = "/home/stalk/Projets/Node/fcom-zoho/src";

class Main {
  private _glob: any;
  private _files: any;

  constructor() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this._glob = new glob.Glob(path + "/**/**/*.ts", {ignore: path + '/*.d.ts'}, (err, files) => {
      this._files = files;
    });
    rl.question('What do you want to do ? [1] - Watch for changements | [2] - Generate in one shot : ', (answer) => {
      switch (answer) {
        case '1':
          console.log('[Index Live Builder Active] - Waiting for file changements...');
          Watchers.watchers(this._files);
          break;
        case '2':
          console.log('[Index Live Builder Active] - Generating the file d.ts in one shot...');
          fs.truncate('/home/stalk/Projets/Node/indexBuilder/test.ts', 0, function(){console.log('done')});
          Watchers.generator(this._files)
            .then(() => {
              console.log('[Index Live Builder Active] - Done');
              process.exit(0);
            });
          break;
        default:
          console.log('[Index Live Builder Active] - Wrong choice, exiting...');
      }

      rl.close();
    });
  }

}

new Main();