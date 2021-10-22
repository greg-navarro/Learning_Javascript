// a module is reuseable 
// one module per file
// won't cause variable collisions

// EXPORTING modules
// you can export one object per module, or many
// 'export' can export any js type for another module
export const print=(message) => log(message, new Date());
export const log=(p) => console.log("douchebag")
// 'export default' is used for exporting a single main variable
export default new Date();
// 'export default' can be used in place of 'export' when you only wish to export one type

// IMPORTING modules
// 'object destructuring' can be used to import many things
import { print, log } from "./text-helpers";
import freel from "./mt-freel";
import * as fns from './ball-masters'; // import all objects from ball masters

print("asdf");
log("asdf");

freel.print();


// CommonJS
// uses 'module.exports' to export 
// uses the 'require("./asdfasdf")' syntax for importing
 module.exports = {print, log}

 const { log, print } = requrie("./txt-helpers");

