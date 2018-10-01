import * as fs from 'fs';
import {indexdts} from '../index';
import watchers from '../watchers'

export class EnumClass {
  constructor() { }

  public writeEnum(ArrayFile: string[], index: number) {
    let finalFile: string = '';
    for (var i: number = index; i < ArrayFile.length; i++) {
      finalFile += ArrayFile[i].replace('export ', 'export declare ') + '\n';
      if (ArrayFile[i].trim() === '}')
        break;
    }
    // console.log(finalFile);
    fs.appendFile('/home/stalk/Projets/Node/indexBuilder/test.ts', finalFile, function(err) {
      if(err) {
        return console.log(err);
      }
    });

    watchers.refreshDts(); // Refresh the variable of the d.ts file
  }
}