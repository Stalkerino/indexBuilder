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
class EnumClass {
    constructor() { }
    writeEnum(ArrayFile, index) {
        let finalFile = '';
        for (var i = index; i < ArrayFile.length; i++) {
            finalFile += ArrayFile[i].replace('export ', 'export declare ') + '\n';
            if (ArrayFile[i].trim() === '}')
                break;
        }
        // console.log(finalFile);
        fs.appendFile('/home/stalk/Projets/Node/indexBuilder/test.ts', finalFile, function (err) {
            if (err) {
                return console.log(err);
            }
        });
        watchers_1.default.refreshDts(); // Refresh the variable of the d.ts file
    }
}
exports.EnumClass = EnumClass;
//# sourceMappingURL=enumClass.js.map