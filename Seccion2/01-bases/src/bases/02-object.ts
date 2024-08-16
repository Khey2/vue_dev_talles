

//Objetos literales son objetos asi {}
const person = {
    name: "mig",
    age: 24,
    email: 'msil@hotmail.com',
    address: {
        city: "new yor",
        zip: 1625,
        lat: 14.8267,
        lng: 34.837
    }
} 
//as const

// PUEDES CAMBIAR LAS PROPS DE PERSON, mas no redefinir el objeto
// si le añades as const estas haciendo de tipo const todas las 
// props internas
// del objeto literal 

//person = {}; // comportamiento por defecto const person
//person.age = 9; // comportamiento al añadir as const al final ( tipando props del obj )


// ademas, hay problemas de referencia en memoria

//! PROBLEMAS DE REFERENCIA
// const person2 = person;

// person2.name= "CHANGE E";

//! todos los objetos en js pasan por referencia, ESTAS COPIANDO
//! LA REFERENCIA del person a person2, ambos apuntan a la misma
//! referencia en memoria ( porque copiaste la ref ), ambos apuntan
//! al valor real...
// console.table({person, person2})


//? ... es el operador spreed "embarrar/propaga", este operador "propaga"
//? las propiedades del anterior objeto al nuevo , evitando el problema
//? de ref en memoria
// const person3 = { ...person}
// person3.name="person3";
// console.table( { person, person3} )

//! el problema de spreed es que solo las propiedades con valores PRIMITIVOS
//! se colnan bien.. los objetos internos tendran el problema de referencia...
//! por lo que cambiar el una prop del obj address afectara la variable original
// const person3 = { ...person}
// person3.name = "NO PROBLEM REFS"
// person3.address.city="CITY REF PROBLEM";
// console.log( { person, person3} )

//? una solucion es que copies los obj internos con spreed
// const person2 = { ...person, address: {...person.address }}

//? MANERA 2, disponible desde 2022, hace una copia de todos los obj arrays internos
//? sin problemas de referencia
const person2 = structuredClone(person);