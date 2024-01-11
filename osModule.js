function sistemaOperativo()=>{
    const os= require("node:os");
    console.log(process);
    console.log(process.argv);
    console.log(process.cwd());
}

export  default sistemaOperativo();


//console.log(os.version());  //Windows 10 Pro

//console.log(os.platform()); //win 32
//Returns a string identifying the operating system platform for which the Node.js
// binary was compiled. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.

//console.log(os.cpus());
//model: 'Intel(R) Core(TM) i3-7100U CPU @ 2.40GHz',
//speed: 2400,
//times: {
 // user: 20243312,
 // nice: 0,
 // sys: 14280359,
 // idle: 64240406,
 // irq: 1550218

//console.log(os.totalmem()); Returns the total amount of system memory in bytes as an integer.

//os.freemem() Returns the amount of free system memory in bytes as an integer.

//os.machine() Returns the machine type as a string On Windows, RtlGetVersion()
// is used, and if it is not available, GetVersionExW() will be used.