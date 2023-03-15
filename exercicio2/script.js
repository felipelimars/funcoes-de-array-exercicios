const arrayNumeros = [1,2,3,4,5,6,7,8]

const quintuplos = arrayNumeros.map((elemento)=>{
const calculo = elemento * 5
return calculo
}) 
console.log(quintuplos)


///2. Retorne um novo array contendo os números divididos por 2. 
///Guarde esse array dentro de uma variável `const metades`.

const callback = (item) =>
item / 2

const metade = quintuplos.map(callback)

console.log(metade)
