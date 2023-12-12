let urlGit = "https://raw.githubusercontent.com/hernanveyret/cv/main/database/db.json"
let url = "http://localhost:5000/castellano"

const getData = (section) => {
  fetch(urlGit)
  .then(res => res.json())
  .then(data => {
    console.log(data[section])    
    inicio(data[section])
  })
}
document.addEventListener("DOMContentLoaded",getData("castellano"));

const idioma = (e) => {
  if(e.dataset.idioma === "arg"){    
    getData("castellano")
  }else{    
    getData("ingles")
  }
}
 
const inicio = (db) => {
  let $titleDp = document.getElementById("tituloDp");
  let $nombre = document.getElementById("name");
  let $edad = document.getElementById("edad");
  let $nacimiento = document.getElementById("fNacimiento");
  let $dni = document.getElementById("dni");
  let $eCivil = document.getElementById("eCivil");
  let $hijos = document.getElementById("hijos");
  let $direccion = document.getElementById("direccion");
  let $telefono = document.getElementById("tel");
  let $email = document.getElementById("email");
  let $instagram = document.getElementById("instagram");
  let $linkedIn = document.getElementById("linkedIn");
  let $gitHub = document.getElementById("gitHub");
  
  $titleDp.textContent = db[0].datosPersonales.titulo;
  $nombre.textContent = db[0].datosPersonales.nombre;
  $edad.textContent = db[0].datosPersonales.edad;
  $nacimiento.textContent = db[0].datosPersonales.fechaNacimiento;
  $dni.textContent = db[0].datosPersonales.dni;
  $eCivil.textContent = db[0].datosPersonales.estadoCivil;
  $hijos.textContent = db[0].datosPersonales.hijos;
  $direccion.textContent = db[0].datosPersonales.direccion;
  $telefono.textContent = db[0].datosPersonales.whatsapp;
  $email.textContent = db[0].datosPersonales.email;

  $instagram.innerHTML = `<a href="${db[0].datosPersonales.instagram}" target="_blank"><img src="./img/insta.png" alt="Icono Instagram"/></a><a href="${db[0].datosPersonales.linkedin}" target="_blank"><img src="./img/in.png" alt="Icono Linkedin"/></a><a href="${db[0].datosPersonales.github}" target="_blank"><img src="./img/gitHub.png" alt="Icono GitHub"/></a>`
}
