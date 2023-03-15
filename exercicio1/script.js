const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
} 

const deixarMaiusculo = (object) => {
    const newObject = {}
    //newObject.nome = `Felipe`
    //newObject[`nome`] = `Felipe`
    //console.log(newObject)

for (let propriedade in object){
    newObject[propriedade] = objeto[propriedade].toUpperCase()
}
return newObject
}
console.log(deixarMaiusculo(objeto))

const retornaTexto = (object) => {
    return `O nome é ${object.nome}, a profissão é ${object.profissao}, o username é ${object.username} e a senha é ${object.senha}.`
}   
console.log(retornaTexto(objeto))




//for of e para array
//for in para objeto















