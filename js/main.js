function circulo() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
    document.querySelector("#titulo").innerHTML = "Circulo";
}

function rectangulo() {
    let figura = document.querySelector("#figura");
    figura.classList.toggle("rectangulo");  
    document.querySelector("#titulo").innerHTML = "Rectangulo";  
}

function moveRight() {
    let figura = document.getElementById("figura");
    figura.classList.toggle("moveRight");
    alert("se va a mover a la derecha")
    document.querySelector("#titulo").innerHTML = "Derecha"; 
}

function moveLeft() {
    let figura = document.querySelector("#figura");
    figura.classList.toggle("moveLeft");
    alert("se va a mover a la izquierda")
    document.querySelector("#titulo").innerHTML = "Izquierda"; 
}

function bgFigura() {
    let colorFondo = prompt("¿Que color desea poner en la figura?");
    document.getElementById("figura").style.backgroundColor = colorFondo;
}

function fondoPantalla() {
    let color = prompt("¿Que color desea poner en la sección?");
    document.getElementById("columnas").style.backgroundColor = color;
}

function fondoPantallaBody() {
    let color = prompt("¿Que color desea poner en la pantalla?");
    let figura = document.getElementById("cuerpo");
    figura.style.background = color;
}

function luna(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("luna-creciente");
    document.querySelector("#titulo").innerHTML = "Luna Creciente";
}

function moveTop(){
    let figura = document.querySelector("#figura");
    figura.classList.toggle("top");
    alert("se va a mover para arriba")
    document.querySelector("#titulo").innerHTML = "Arriba"; 
}

function moveBottom(){
    let figura = document.querySelector("#figura");
    figura.classList.toggle("bottom");
    alert("se va a mover para abajo")
    document.querySelector("#titulo").innerHTML = "Abajo"; 
}

function estrella(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("estrella");
    document.querySelector("#titulo").innerHTML = "Estrella";
}

function mostrarGif(){
    let imgGif = document.getElementById("figura");
    imgGif.style.backgroundImage = 'url(img/dragonball.gif)';
    imgGif.style.backgroundSize = 'cover';
    imgGif.style.backgroundPosition = 'center';
    document.querySelector("#titulo").innerHTML = "Gif Goku";
}

function fondoDegradado(){
    let fondo = document.getElementById("figura");
    fondo.classList.toggle("fondoDegradado");
    document.querySelector("#titulo").innerHTML = "Degradado";
}

function moveDiagonal(){
    direccion = prompt("El movimiento se va a realizar según la opción que elija: \n 1) derecha abajo \n 2) derecha arriba \n 3) izquierda abajo \n 4) izquierda arriba")
    let diagonal = document.getElementById("figura");

        if(direccion === "1"){
            diagonal.classList.toggle("moveDiagonal");
        } else if(direccion === "2"){
            diagonal.classList.toggle("moveDiagonal3");
        } else if(direccion === "3"){
            diagonal.classList.toggle("moveDiagonal2");
        } else if(direccion === "4"){
            diagonal.classList.toggle("moveDiagonal4");
        } else{
            alert("la opción ingresada es invalida")
        }
        document.querySelector("#titulo").innerHTML = "Diagonal";
}

function panelLateral(){
    let panel =document.getElementById("panelLateral");
    panel.classList.toggle("active");
    document.querySelector("#titulo").innerHTML = "Panel Lateral"; 
}

function panelSuperior(){
    let panel =document.getElementById("panelSuperior");
    panel.classList.toggle("active");
    document.querySelector("#titulo").innerHTML = "Panel Superior";
}

function imgFondo(){
    let fondo= document.querySelector("#cuerpo");
    fondo.classList.toggle("cambiarImagen");
}