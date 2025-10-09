// JS principal do Squad
console.log('Sistema Lava Jato carregado!');

function formatarMoeda(valor){
  return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(valor);
}

function validarEmail(email){
  const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Exemplo básico de uso no DOM
document.addEventListener('DOMContentLoaded',()=>{
  const app=document.getElementById('app');
  if(app){
    const p=document.createElement('p');
    p.textContent='Dica: rode "npm run check" antes de abrir PR.';
    app.appendChild(p);
  }
});
