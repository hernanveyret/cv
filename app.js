///let url = "https://raw.githubusercontent.com/hernanveyret/cv/main/database/db.json"
let url = "./database/db.json"
//let url = "http://localhost:5000/castellano"

const getData = (section) => {
  
  fetch(url)
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
  // Datos Personales
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

  // Estudios Cursados
  let $titleEst = document.getElementById("tituloesT");
  let $secundaro = document.getElementById("secundario");
  let $primario = document.getElementById("primario");

  $titleEst.textContent = db[1].estudios.titulo
  $secundaro.textContent = db[1].estudios.secundario
  $primario.textContent = db[1].estudios.primario

  // Cursos
  let $titleCurso = document.getElementById("tituloCursos");
  let $htmlcss = document.getElementById("html-css");
  let $javascript = document.getElementById("javascript");
  let $react = document.getElementById("react");
  let $github = document.getElementById("github");
  let $rv = document.getElementById("rv");
  let $reparacion = document.getElementById("reparacion");

  $titleCurso.textContent = db[1].estudios.tituloCursos
  $htmlcss.textContent = db[1].estudios.cursohtmlycss
  $javascript.textContent = db[1].estudios.cursojavascript
  $react.textContent = db[1].estudios.cursoreact
  $github.textContent = db[1].estudios.cursogit
  $rv.textContent = db[1].estudios.cursoRv
  $reparacion.textContent = db[1].estudios.cursonotebook

  //Idioma
  let $titleIdioma = document.getElementById("tituloIdioma");
  let $portugues = document.getElementById("idiomaUno");

  $titleIdioma.textContent = db[2].idiomas.titulo
  $portugues.textContent = db[2].idiomas.idiomaUno
  
  //Experiencia Laboral
  let laboral = document.getElementById("experienciaLaboral");
  let $titutloExpL = document.getElementById("titleExpL");
  $titutloExpL.innerHTML = db[3].experienciaLaboral[0].tituloSeccion
  laboral.innerHTML = '';
  const templateL = document.getElementById("templateL").content
  const fragmento = document.createDocumentFragment()
  
  let ex = db[3].experienciaLaboral
  
  ex.forEach(e => {
    templateL.querySelector("h4").textContent = e.titulo;
    templateL.querySelector(".descripcion").textContent = e.descripcion;
    templateL.querySelector(".fecha").textContent = e.fecha;

    let $clone = document.importNode(templateL,true)
    fragmento.appendChild($clone)    
  })
    laboral.appendChild(fragmento)
 
    // Proyectos
    let pro = db[4].proyectos
    let tituloP = document.getElementById("titleProy");
    tituloP.innerHTML = db[4].proyectos[0].tituloProyecto;    
    let $proyectos =  document.getElementById("proyectos");
      $proyectos.innerHTML = "";
      let html = "";

      pro.forEach(e => {
        html += `<article>`
        html += `<div class="dtPersonales cards cardsP">`
        html += `<div class="imagenP">`
        html += `<img src="${e.imagen}" alt="Pagina web" />`
        html += `</div>`
        html += `<div class="descipcionP">`
        html +=  `<h4>${e.titulo}</h4>`
        html +=  `<p>${e.descripcion}</p>`
        html +=  `<span><a href="${e.url}" target="_blank"><img src="./img/internet.png" alt="Icono GitHub" class="btn-ico" /</a><a href="${e.urlGit}" target="_blank"><img src="./img/gitHub.png" alt="Icono GitHub" class="btn-ico" /></a></span>`
        html += `</div>`
        html += `</div>`
        html += `</article>`
  })
  $proyectos.innerHTML += html
   
  //Prologo Final
  let textoFinal = document.getElementById("prologoFinal");
  textoFinal.innerHTML = "";
  textoFinal.innerHTML = db[5].prologo
}
