let amigos = [];
const nombre = document.getElementById('amigo');


function agregarAmigo() {  
    if(!nombre.value) {
        alert('Porfavor ingrese un nombre');
    } else {
        amigos.push(nombre.value);
        document.querySelector('#amigo').value = '';
        console.log(amigos);
        MostrarLista();
    }
}

function MostrarLista() {
    const lista = document.querySelector('#listaAmigos');
    lista.innerHTML= '';
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const li = document.createElement('li')
        li.textContent = amigo;
        lista.appendChild(li);
        
    }
}

function sortearAmigo() {
    
    if(amigos.length > 0) {
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceSorteado];
    const mostrarSorteado = document.getElementById('resultado');
    mostrarSorteado.innerHTML= nombreSorteado;
    }
    
}

