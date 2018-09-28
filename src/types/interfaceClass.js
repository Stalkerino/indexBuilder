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
        for (var i = index; i < ArrayFile.length; i++) {
            console.log(ArrayFile[i]);
            fs.writeFile("/home/stalk/Projets/Node/indexBuilder/test.ts", ArrayFile[i].toString() + '\n', function (err) {
                if (err) {
                    return console.log(err);
                }
            });
            if (ArrayFile[i] === '}')
                break;
        }
    }
}
exports.InterfaceClass = InterfaceClass;
//# sourceMappingURL=interfaceClass.js.map