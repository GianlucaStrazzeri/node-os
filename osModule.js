

    const os= require("node:os");
    const tipo= (os.type());
    const systemMemory=(os.totalmem()); //Returns the total amount of system memory in bytes as an integer.
    let totalSystemMemoryGigaByte=systemMemory/1073741824;
const freeSystemMemory=(os.freemem()); //Returns the amount of free system memory in bytes as an integer.
let freeSystemMemoryGigabyte=freeSystemMemory/1073741824;

const osModule={
    Tipo: tipo,
    Version: version,
    MemoriaLibre: freeSystemMemoryGigabyte,
    MemoriaTotal: totalSystemMemoryGigaByte,
}

console.log(`Tipo: ${tipo}
Versión: ${os.version()}
Memoria Libre: ${freeSystemMemoryGigabyte}
Memoria total: ${totalSystemMemoryGigaByte}`);

    
    export default osModule;