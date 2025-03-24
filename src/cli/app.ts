import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { FunkoGenres } from "../enums/funkoGenres.js";
import { FunkoType } from "../enums/funkoType.js";
import { CFunko } from "../models/cFunko.js";
import { CFunkoManager } from "../models/cFunkoManager.js";

yargs(hideBin(process.argv)) // ocultamos los argumentos del proceso de node
  .command(
    "add",
    "Agrega un funko a la colección",
    (yargs) => {
        return yargs.options({
          user: { type: "string", demandOption: true },
          id: { type: "number", demandOption: true },
          name: { type: "string", demandOption: true },
          description: { type: "string", demandOption: true },
          type: { type: "string", demandOption: true },
          genre: { type: "string", demandOption: true },
          franchise: { type: "string", demandOption: true },
          number: { type: "number", demandOption: true },
          exclusive: { type: "boolean", demandOption: true },
          specialFeature: { type: "string", demandOption: true },
          marketValue: { type: "number", demandOption: true },
        });
      },
    (argv) => {
      const funko = new CFunko(
        argv.id,
        argv.name,
        argv.description,
        argv.type as FunkoType,
        argv.genre as FunkoGenres,
        argv.franchise,
        argv.number,
        argv.exclusive,
        argv.specialFeature,
        argv.marketValue
      );
      const funkoManager = new CFunkoManager(argv.user);
      funkoManager.add(funko);
    }
  )
  .help()
  .parse();