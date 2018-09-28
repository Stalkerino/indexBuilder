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
class Watchers {
    constructor() { }
    watchers(fileList) {
        fileList.forEach((pathFile) => {
            fs.watchFile(pathFile, (curr, prev) => {
                console.log(pathFile + ' file has been changed');
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
                new interfaceClass_1.InterfaceClass().writeInterface(fileInArray, index);
            }
            else if (line.includes('export class')) {
                console.log('The line : ' + line + ' is a class');
            }
            else if (line.includes('export enum')) {
                console.log('The line : ' + line + ' is an enum');
            }
        });
    }
}
exports.Watchers = Watchers;
//# sourceMappingURL=watchers.js.map