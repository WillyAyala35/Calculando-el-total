precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const cantidad = document.querySelector(".cantidad");
/* console.log(cantidad.innerHTML);  */
const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");
const total = document.querySelector(".valor-total");
/* console.log(total.innerHTML); */

sumar.addEventListener('click', () => {
    /* console.log(cantidad.innerHTML); */
    cantidad.innerHTML = +cantidad.innerHTML+1
    total.innerHTML = +cantidad.innerHTML*+precioSpan.innerHTML
})

restar.addEventListener('click', () => {
    if (+cantidad.innerHTML>0) {
    cantidad.innerHTML = +cantidad.innerHTML-1
    total.innerHTML = +cantidad.innerHTML*+precioSpan.innerHTML    
    }
})