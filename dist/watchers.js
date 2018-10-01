"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const readline = __importStar(require("readline"));
const interfaceClass_1 = require("./types/interfaceClass");
const classClass_1 = require("./types/classClass");
const enumClass_1 = require("./types/enumClass");
class Watchers {
    constructor() {
        this._dtsFile = '';
        this.refreshDts();
    }
    watchers(fileList) {
        fileList.forEach((pathFile) => {
            fs.watchFile(pathFile, (curr, prev) => {
                console.log(pathFile + ' file has been changed - Building the d.ts ...');
                return this._readFile(pathFile);
            });
        });
    }
    _readFile(file) {
        let fileConverted = [];
        let reader = readline.createInterface({
            input: fs.createReadStream(file)
        });
        reader.on('line', (currentLine) => {
            fileConverted.push(currentLine);
        }).on('close', () => {
            this._checkType(fileConverted);
        });
    }
    _checkType(fileInArray) {
        fileInArray.forEach((line, index) => {
            if (line.includes('export interface')) {
                if (!this._checkIfLineExist(line, 'interface'))
                    new interfaceClass_1.InterfaceClass().writeInterface(fileInArray, index);
            }
            else if (line.includes('export class')) {
                if (!this._checkIfLineExist(line, 'class'))
                    new classClass_1.ClassClass().writeClass(fileInArray, index);
            }
            else if (line.includes('export enum')) {
                if (!this._checkIfLineExist(line, 'enum'))
                    new enumClass_1.EnumClass().writeEnum(fileInArray, index);
            }
        });
    }
    refreshDts() {
        this._dtsFile = '';
        let reader = readline.createInterface({
            input: fs.createReadStream('/home/stalk/Projets/Node/indexBuilder/test.ts')
        });
        reader.on('line', (currentLine) => {
            this._dtsFile += currentLine;
        });
    }
    _checkIfLineExist(line, type) {
        if (type === 'class') {
            return this._dtsFile.includes(line.replace('export ', 'export declare '));
        }
        else if (type === 'interface') {
            return this._dtsFile.includes(line);
        }
        else if (type === 'enum') {
            return this._dtsFile.includes(line.replace('export ', 'export declare '));
        }
    }
}
exports.Watchers = Watchers;
exports.default = new Watchers();
//# sourceMappingURL=watchers.js.map