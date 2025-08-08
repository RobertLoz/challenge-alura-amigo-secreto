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

