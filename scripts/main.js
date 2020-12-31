let myImage = document.querySelector('img');
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');
let imagen = document.getElementById("DImagen");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/gatito.jpg') {
    myImage.setAttribute('src', 'images/perrito.jpg');
    miTitulo.textContent = "Perrito Lindo";
    imagen.setAttribute("href", "images/perrito.jpg");
    imagen.setAttribute("download", "perrito.jpg");
  } else {
    myImage.setAttribute('src', 'images/gatito.jpg');
    miTitulo.textContent = "Gatito Lindo";
    imagen.setAttribute("href","images/gatito.jpg");
    imagen.setAttribute("download","gatito.jpg");
  }
};

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Buen día, ' + miNombre;
  }
}

if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Buen día, ' + nombreAlmacenado;
};

miBoton.onclick = function () {
  estableceNombreUsuario();
};