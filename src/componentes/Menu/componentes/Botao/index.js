import React from 'react';

function Botao(props){
//props =>{className: "o que alguém passar", href:"/"}, é um objeto e traz pra gente várias coisas que a gente vai pegar do nosso componente
console.log(props);
return(
<a className={props.className} href={props.href}>
{props.children}
</a>
//{props.children} pega o texto que foi colocado no botão

);

}

export default Botao; // Para importar em outros lugares