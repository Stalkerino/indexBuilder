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
const fs = __importStar(require("fs"));
const readline = __importStar(require("readline"));
const glob = __importStar(require("glob"));
// Import Watchers
const watchers_1 = __importDefault(require("./watchers"));
// Path to the Index.d.ts to write
exports.indexdts = '/home/stalk/Projets/Node/indexBuilder/test.ts';
// Path to the src Folder
exports.path = "/home/stalk/Projets/Node/fcom-zoho/src";
class Main {
    constructor() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this._glob = new glob.Glob(exports.path + "/**/**/*.ts", { ignore: exports.path + '/*.d.ts' }, (err, files) => {
            this._files = files;
        });
        rl.question('What do you want to do ? [1] - Watch for changements | [2] - Generate in one shot : ', (answer) => {
            switch (answer) {
                case '1':
                    console.log('[Index Live Builder Active] - Waiting for file changements...');
                    watchers_1.default.watchers(this._files);
                    break;
                case '2':
                    console.log('[Index Live Builder Active] - Generating the file d.ts in one shot...');
                    fs.truncate('/home/stalk/Projets/Node/indexBuilder/test.ts', 0, function () { console.log('done'); });
                    watchers_1.default.generator(this._files)
                        .then(() => {
                        console.log('[Index Live Builder Active] - Done');
                        process.exit(0);
                    });
                    break;
                default:
                    console.log('[Index Live Builder Active] - Wrong choice, exiting...');
            }
            rl.close();
        });
    }
}
new Main();
//# sourceMappingURL=index.js.map