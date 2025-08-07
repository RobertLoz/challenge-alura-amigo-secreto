
let amigos = [];
const nombre = document.getElementById('amigo');

function agregarAmigo() {  
    if(!nombre.value) {
        alert('Porfavor ingrese un nombre');
    } else {
        amigos.push(nombre.value);
        document.querySelector('#amigo').value = '';
        console.log(amigos);
    }

}


