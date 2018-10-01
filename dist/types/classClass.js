"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const watchers_1 = __importDefault(require("../watchers"));
class ClassClass {
    constructor() { }
    writeClass(ArrayFile, index) {
        let finalFile = '';
        let bracketVerifier = 0;
        for (var i = index; i < ArrayFile.length; i++) {
            if (ArrayFile[i].includes('extends ') && ArrayFile[i].includes('.')) {
                ArrayFile[i] = ArrayFile[i].replace(ArrayFile[i].slice(ArrayFile[i].indexOf('extends ') + 8, ArrayFile[i].indexOf('.') + 1), '');
            }
            if (ArrayFile[i].includes('export class')) { // If Class
                finalFile += ArrayFile[i].replace('export ', 'export declare ') + '\n';
            }
            else if (ArrayFile[i].includes('export abstract ')) { // If Class Abstract
                finalFile += ArrayFile[i].replace('export abstract ', 'export declare abstract ') + '\n';
            }
            if (ArrayFile[i].includes('extends '))
                finalFile += '//TODO: Add the var from the other class \n';
            if (ArrayFile[i].includes('public ')
                && ArrayFile[i].includes(':')
                && ArrayFile[i].includes(';')
                && !ArrayFile[i].includes('(')) { // If Public Var
                finalFile += ArrayFile[i] + '\n';
            }
            if (ArrayFile[i].includes('constructor')) { // If Constructor
                if (!ArrayFile[i].includes(('}')))
                    bracketVerifier++;
                finalFile += ArrayFile[i].substring(0, ArrayFile[i].length - (ArrayFile[i].length - ArrayFile[i].indexOf(')') - 1))
                    .replace('=', '').replace('{', '').replace('}', '') + ';\n';
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
        fs.appendFile('/home/stalk/Projets/Node/indexBuilder/test.ts', finalFile, function (err) {
            if (err) {
                return console.log(err);
            }
        });
        watchers_1.default.refreshDts(); // Refresh the variable of the d.ts file
    }
}
exports.ClassClass = ClassClass;
//# sourceMappingURL=classClass.js.map