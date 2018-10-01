"use strict";
// Thirs script is to build a dts file while a new mothod has been written in a file in the folder src
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
const glob = __importStar(require("glob"));
// Import Watchers
const watchers_1 = __importDefault(require("./watchers"));
// Path to the Index.d.ts to write
exports.indexdts = '/home/stalk/Projets/Node/indexBuilder/test.ts';
// Path to the src Folder
exports.path = "/home/stalk/Projets/Node/fcom-zoho/src";
class Main {
    constructor() {
        console.log('[Index Live Builder Active] - Waiting for file changements...');
        this._glob = new glob.Glob(exports.path + "/**/**/*.ts", { ignore: exports.path + '/*.d.ts' }, (err, files) => {
            return this._getFiles(files);
        });
    }
    _getFiles(files) {
        watchers_1.default.watchers(files);
    }
}
new Main();
//
// filesWithDirectory = walkSync('./src');
//
// filesWithDirectory.forEach((pathFile) => {
//   fs.watchFile(pathFile, (curr, prev) => {
//     console.log(pathFile + ' file has been changed');
//     analyzeFileBeingModified(pathFile);
//   });
// });
//# sourceMappingURL=index.js.map