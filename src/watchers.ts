import * as fs from 'fs';
import * as readline from 'readline';

import {InterfaceClass} from "./types/interfaceClass";
import {ClassClass} from "./types/classClass";
import {EnumClass} from "./types/enumClass";
import {TypeClass} from "./types/typeClass";
import {ConstClass} from "./types/constClass";
import {indexdts} from './index';

export class Watchers {

  private _dtsFile: string;

  constructor() {
    this._dtsFile = '';
    this.refreshDts();
  }

  public watchers(fileList: string[]) {
    fileList.forEach((pathFile: string) => {
      fs.watchFile(pathFile, (curr, prev) => {
        console.log(pathFile + ' file has been changed - Building the d.ts ...');
        return this._readFile(pathFile);
      });
    });
  }

  public generator(fileList: string[]) {
    return new Promise(() => {
      fileList.forEach((pathFile: string) => {
        console.log(pathFile + ' - Building the d.ts ...');
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
        if (!this._checkIfLineExist(line, 'interface'))
          new InterfaceClass().writeInterface(fileInArray, index);
      } else if (line.includes('export class')) {
        if (!this._checkIfLineExist(line, 'class'))
          new ClassClass().writeClass(fileInArray, index);
      } else if (line.includes('export abstract class')) {
        if (!this._checkIfLineExist(line, 'class'))
          new ClassClass().writeClass(fileInArray, index);
      } else if (line.includes('export enum')) {
        if (!this._checkIfLineExist(line, 'enum'))
          new EnumClass().writeEnum(fileInArray, index);
      } else if (line.includes('export type')) {
        if (!this._checkIfLineExist(line, 'type'))
          new TypeClass().writeType(fileInArray, index);
      } else if (line.includes('export const')) {
        if (!this._checkIfLineExist(line, 'const'))
          new ConstClass().writeConst(fileInArray, index);
      }

    });
  }

  public refreshDts() {
    this._dtsFile = '';
    let reader = readline.createInterface({
      input: fs.createReadStream('/home/stalk/Projets/Node/indexBuilder/test.ts')
    });
    reader.on('line', (currentLine) => {
      this._dtsFile += currentLine;
    });
  }

  private _checkIfLineExist(line: string, type: string) {
    if (type === 'class') {
      return this._dtsFile.includes(line.replace('export ', 'export declare '));
    } else if (type === 'interface') {
      return this._dtsFile.includes(line);
    } else if (type === 'enum') {
      return this._dtsFile.includes(line.replace('export enum ', 'export declare enum '));
    } else if (type === 'type') {
      return this._dtsFile.includes(line.replace('export type ', 'export declare type '));
    } else if (type === 'const') {
      return this._dtsFile.includes(line.replace('export const ', 'export declare const '));
    }
  }

}

export default new Watchers();