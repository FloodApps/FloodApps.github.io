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
    imagen.setAttribute("href", "images/gatito.jpg");
    imagen.setAttribute("download", "gatito.jpg");
  }
};

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if (!miNombre) {
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

window.onload = function () {

let videoYT = document.getElementById("videoYT")

videoYT.src = "https://www.youtube.com/embed/gxE4ngu78Ro";
document.getElementById("maps").src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13135.413946342771!2d-58.38310044999999!3d-34.6078662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1609616675024!5m2!1ses!2sar"

}