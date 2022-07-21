const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decr");
const reset = document.getElementById("reset");

let numero = 0;

sumar.addEventListener("click", ()=>{
        numero++;
        contador.innerHTML = numero;
    if(numero>= 1)
        document.getElementById("contar").style.color="green"
    
    if(numero === 0)
        document.getElementById("contar").style.color="white"

});

restar.addEventListener("click", ()=>{
        numero--;
        contador.innerHTML = numero;
    if(numero<0)
        document.getElementById("contar").style.color="red"

    if(numero === 0)
        document.getElementById("contar").style.color="white"

});

reset.addEventListener("click", ()=>{
        numero = 0;
        contador.innerHTML = numero;
    if(numero === 0)
        document.getElementById("contar").style.color="white"
});

