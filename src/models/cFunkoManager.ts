import * as fs from 'fs';
import { CFunko } from './cFunko.js';
import { FunkoType } from '../enums/funkoType.js';
import { FunkoGenres } from '../enums/funkoGenres.js';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url'; // esto es para poder usar __dirname en ES6 que sirve para obtener la ruta del archivo actual

export class CFunkoManager {
  accessor _userDir: string; // variable para almacenar la ruta del archivo
  constructor(private username: string) {
    const __filename = fileURLToPath(import.meta.url); // obtenemos la ruta del archivo actual
    const __dirname = path.dirname(__filename); // obtenemos el directorio del archivo actual
    this._userDir = path.join(__dirname, "../../data", username);
    if (!fs.existsSync(this._userDir)) { // si no existe la carpeta del usuario la creamos
      fs.mkdirSync(this._userDir); // creamos la carpeta del usuario.
      //Usamos sync porque es una operación que se ejecuta una sola vez por 
      // lo que no afecta la performance, asi que es sincrona
    }
  }
  private getFunkoPath(funkoId: number): string {
    return path.join(this._userDir, `${funkoId}.json`); // obtenemos la ruta del archivo del funko
  }

  public add(funko: CFunko): void {
    const funkoPath = this.getFunkoPath(funko.id); // obtenemos la ruta del archivo del funko
    if (fs.existsSync(funkoPath)) {
      console.log(
        chalk.red(
          `El funko con id ${funko.id} ya existe en la colección de ${this.username}`,
        ),
      );
      return;
    }
    fs.writeFileSync(funkoPath, JSON.stringify(funko, null, 2)); // guardamos el funko en un archivo json
    /*
    * JSON.stringify permite convertir un objeto a un string en formato JSON
    * El segundo argumento es un callback que permite modificar el string resultante. Como no necesitamos modificarlo, pasamos null
    * El tercer argumento es la cantidad de espacios que queremos que tenga la indentación del JSON
    */
    console.log(
      chalk.green(
        `El funko con id ${funko.id} fue agregado a la colección de ${this.username}`,
      ),
    );
    
  }

    

}

