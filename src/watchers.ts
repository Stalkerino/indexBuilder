import * as fs from 'fs';
import * as readline from 'readline';

import {InterfaceClass} from "./types/interfaceClass";

export class Watchers {
  constructor() {}

  public watchers(fileList: string[]) {
    fileList.forEach((pathFile: string) => {
      fs.watchFile(pathFile, (curr, prev) => {
        console.log(pathFile + ' file has been changed');
        return this._readFile(pathFile);
      });
    });
  }

  private _readFile(file: string) {
    let fileConverted: string[] = [];
    let reader = readline.createInterface({
      input: fs.createReadStream(file)
    });

    reader.on('line', (currentLine) => {
      fileConverted.push(currentLine);
    }).on('close', () => {
      this._checkType(fileConverted);
    })
  }

  private _checkType(fileInArray: string[]) {
    fileInArray.forEach((line, index) => {
      if (line.includes('export interface')) {
        new InterfaceClass().writeInterface(fileInArray, index);
      } else if (line.includes('export class')) {
        console.log('The line : ' + line + ' is a class');
      } else if (line.includes('export enum')) {
        console.log('The line : ' + line + ' is an enum');
      }
    });
  }

}