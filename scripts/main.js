let myImage = document.querySelector('img');
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/gatito.jpg') {
    myImage.setAttribute('src', 'images/perrito.jpg');
    miTitulo.textContent = "Perrito Lindo";
  } else {
    myImage.setAttribute('src', 'images/gatito.jpg');
    miTitulo.textContent = "Gatito Lindo";
  }
};

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
  }
}

if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Buen dia, ' + nombreAlmacenado;
};

miBoton.onclick = function () {
  estableceNombreUsuario();
};