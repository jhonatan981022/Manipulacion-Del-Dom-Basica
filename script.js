let h1 = document.querySelector("h1");
let form = document.querySelector("#form");
let input1 = document.querySelector("#calculo1");
let input2 = document.querySelector("#calculo2");
let boton = document.querySelector("#btncalcular");
let pResultado = document.querySelector("#resultado");

boton.addEventListener("click", sumarInputValues);

function sumarInputValues() {
    /* event.preventDefault(); */
    let sumaInputs = input1.value + input2.value;
    pResultado.innerText = "El resultado es " + sumaInputs;
}
 
 





































/* console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Visca el<br> Barca"; */
/* h1.innerText = "Visca <br> Barca" */
/* console.log(h1.getAttribute("class")); En este caso saber que Clase hay en el h1.
h1.setAttribute("class", "rojo"); En este caso modificamos la Clase "azul" por "rojo"*/

/* h1.classList.add("rojo"); Añade una clase
h1.classList.remove("azul"); Elimina una clase

input.value = "Messiiii";

let img = document.createElement("img");
img.setAttribute("src", "https://i.pinimg.com/564x/67/51/5c/67515c0b63fcde21da1605f28b7d5229.jpg")

pid.append(img); */