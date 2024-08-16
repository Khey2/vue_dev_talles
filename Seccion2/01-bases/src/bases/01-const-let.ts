

//var, no usar
var firstName: string ="name test";

//mas rapido, lo mejor
const secondName: string = "test";

//variables que puedan cambiar.
let  thirdName: string = "third";

export const fullname: string = `${firstName.toLocaleUpperCase() } ${ secondName }`;

// console.log( {secondName, thirdName} )
// console.table( {secondName, thirdName} )
// altGR + } + }
// console.log(`${ firstName } jj`)



// CONST y let trae el beneficio de que si el contexto cambiara..
// no lo imprime... almacena en SCOPES ( de llaves {} ) la definicion de variables
// si no tiene llaves esta disponible a nivel d etodo
// el archivo


// VAR se sale de scope ( de las llaves ) y no se "destruye"
// cuando sales de un scope


//template iteral backtips 