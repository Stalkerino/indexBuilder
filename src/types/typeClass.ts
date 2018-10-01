import * as fs from 'fs';
import {indexdts} from '../index';
import watchers from '../watchers'

export class TypeClass {
  constructor() { }

  public writeType(ArrayFile: string[], index: number) {
    let finalFile: string = '';
      finalFile += ArrayFile[index].replace('export ', 'export declare ') + '\n';
    // console.log(finalFile);
    fs.appendFile('/home/stalk/Projets/Node/indexBuilder/test.ts', finalFile, function(err) {
      if(err) {
        return console.log(err);
      }
    });

    watchers.refreshDts(); // Refresh the variable of the d.ts file
  }
}