// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos =[];

function sortearAmigo(){
    let amigoSecreto=amigos[Math.floor(Math.random()*amigos.length)];
    document.getElementById("resultado").innerHTML = amigoSecreto;
}

function agregarAmigo(){
    getAmigo();
    mostrarAmigos();
    return amigos;
}

function getAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    if(nombreAmigo == ""){
        alert("Debe ingresar un nombre");
    }else{
        document.getElementById("amigo").value = "";
        amigos.push(nombreAmigo);
        return nombreAmigo;
    }
}

function mostrarAmigos(){
    document.getElementById("listaAmigos").innerHTML = "";
    amigos.forEach (amigo => {
        document.getElementById("listaAmigos").innerHTML += amigo + "<br>";
    });
}