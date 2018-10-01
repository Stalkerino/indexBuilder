import * as fs from 'fs';
import {indexdts} from '../index';
import watchers from '../watchers'

export class ClassClass {
  constructor() { }

  public writeClass(ArrayFile: string[], index: number) {
    let finalFile: string = '';
    let bracketVerifier: number = 0;
    for (var i: number = index; i < ArrayFile.length; i++) {
      if (ArrayFile[i].includes('export class')) { // If Class
        finalFile += ArrayFile[i].replace('export ', 'export declare ') + '\n';
      }
      if (ArrayFile[i].includes('public ')
        && ArrayFile[i].includes(':')
        && ArrayFile[i].includes(';')
        && !ArrayFile[i].includes('(')) { // If Public Var
        finalFile += ArrayFile[i] + '\n';
      }
      if (ArrayFile[i].includes('constructor')) { // If Constructor
        if (!ArrayFile[i].includes(('}')))
          bracketVerifier++;
        finalFile += ArrayFile[i].substring(0, ArrayFile[i].length - 2) + ';\n';
      }
      if (ArrayFile[i].includes('(') && ArrayFile[i].includes('public')) { // If Public Function
        if (!ArrayFile[i].includes(')'))
          finalFile += ArrayFile[i] + '); //TODO : Put the params in here\n';
        if (!ArrayFile[i].includes(('}')))
          bracketVerifier++;
        if (ArrayFile[i].includes('{'))
          finalFile += ArrayFile[i].substring(0, ArrayFile[i].length - 2) + ';\n';
      }
      if (ArrayFile[i].includes(': {') || ArrayFile[i].includes(':{'))
        bracketVerifier++;
      if (ArrayFile[i].trim() === '}' && bracketVerifier !== 0)
        bracketVerifier--;
      else if (ArrayFile[i].trim() === '}' && bracketVerifier === 0)
        break;
    }
    finalFile += '}\n';
    // console.log(finalFile);
    fs.appendFile('/home/stalk/Projets/Node/indexBuilder/test.ts', finalFile, function(err) {
      if(err) {
        return console.log(err);
      }
    });

    watchers.refreshDts(); // Refresh the variable of the d.ts file
  }
}