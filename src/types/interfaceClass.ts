import * as fs from 'fs';
import {indexdts} from '../index';
import watchers from '../watchers'

export class InterfaceClass {
  constructor() { }

  public writeInterface(ArrayFile: string[], index: number) {
    let finalFile: string = '';
    let bracketCounter: number = 0;
    for (var i: number = index; i < ArrayFile.length; i++) {
      finalFile += ArrayFile[i] + '\n';
      if (ArrayFile[i].trim().includes(':{'))
        bracketCounter++;
      if (ArrayFile[i].trim() === '}' && bracketCounter > 0)
        bracketCounter--;
      else if (ArrayFile[i] === '}')
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