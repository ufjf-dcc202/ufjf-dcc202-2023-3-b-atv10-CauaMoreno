import {getJoao, getMaria, deJoaoParaMaria, deMariaParaJoao, setJoao, setMaria} from '/src/joaoEMaria.js'

let maria = getMaria();
let joao = getJoao();

console.log(`Maria possuía ${maria} maçãs e João possuía ${joao}.`);

deJoaoParaMaria();
maria = getMaria();
joao = getJoao();

console.log(`Mas Maria estava com muita fome e João deu suas maçãs para ela. Assim, Maria ficou com ${maria} frutas e João ficou com ${joao}.`);