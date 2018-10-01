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
class ConstClass {
    constructor() { }
    writeConst(ArrayFile, index) {
        let finalFile = '';
        if (ArrayFile[index].includes('{')) // If Const Object
            if (ArrayFile[index].includes('}')) // Same line object
                finalFile = ArrayFile[index] + '\n';
        fs.appendFile('/home/stalk/Projets/Node/indexBuilder/test.ts', finalFile, function (err) {
            if (err) {
                return console.log(err);
            }
        });
        watchers_1.default.refreshDts(); // Refresh the variable of the d.ts file
    }
}
exports.ConstClass = ConstClass;
//# sourceMappingURL=constClass.js.map