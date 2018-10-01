import * as fs from 'fs';
import {indexdts} from '../index';
import watchers from '../watchers'

export class ConstClass {
  constructor() { }

  public writeConst(ArrayFile: string[], index: number) {
  let finalFile: string = '';
    if (ArrayFile[index].includes('{')) // If Const Object
      if (ArrayFile[index].includes('}')) // Same line object
        finalFile = ArrayFile[index] + '\n';

      fs.appendFile('/home/stalk/Projets/Node/indexBuilder/test.ts', finalFile, function(err) {
        if (err) {
          return console.log(err);
        }
      });


    watchers.refreshDts(); // Refresh the variable of the d.ts file
  }
}