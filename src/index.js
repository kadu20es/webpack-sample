import { nome as nome2, sobrenome as sobrenome2, funcaoSomar as soma2, Pessoa } from './modules/modulo1';
import '../public/assets/css/style.css';

console.log(`${nome2} ${sobrenome2}`);

console.log(soma2(5, 8));

const alguem = new Pessoa('Carlos', 'Eduardo');
console.log(alguem);