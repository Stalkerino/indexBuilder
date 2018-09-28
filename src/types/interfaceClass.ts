import * as fs from 'fs';

export class InterfaceClass {
  constructor() { }

  public writeInterface(ArrayFile: string[], index: number) {
    let finalFile: string = '';
    for (var i: number = index; i < ArrayFile.length; i++) {
      finalFile += ArrayFile[i] + '\n';
      if (ArrayFile[i] === '}')
        break;
    }
    console.log(finalFile);
    fs.appendFile("/home/stalk/Projets/Node/indexBuilder/test.ts", finalFile, function(err) {
      if(err) {
        return console.log(err);
      }
    });
  }
}