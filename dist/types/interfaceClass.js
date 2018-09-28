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
class InterfaceClass {
    constructor() { }
    writeInterface(ArrayFile, index) {
        let finalFile = '';
        for (var i = index; i < ArrayFile.length; i++) {
            finalFile += ArrayFile[i] + '\n';
            if (ArrayFile[i] === '}')
                break;
        }
        console.log(finalFile);
        fs.appendFile("/home/stalk/Projets/Node/indexBuilder/test.ts", finalFile, function (err) {
            if (err) {
                return console.log(err);
            }
        });
    }
}
exports.InterfaceClass = InterfaceClass;
//# sourceMappingURL=interfaceClass.js.map