let primero = document.querySelector("form input");
primero.focus();
let reg_puntuacion = /^[1-5]$/;

function validar() {
  // variables para comprobar
  let f_pelicula = document.querySelector("#f_pelicula");
  f_pelicula.classList.remove("error");
  document.querySelector("#msj-pelicula").classList.remove("error-activo");
  document.querySelector("#msj-pelicula").classList.add("error-inactivo");
  let f_puntuacion = document.querySelector("#f_puntuacion");
  f_puntuacion.classList.remove("error");
  document.querySelector("#msj-puntuacion").classList.remove("error-activo");
  document.querySelector("#msj-puntuacion").classList.add("error-inactivo");
  let f_comentario = document.querySelector("#f_comentario");
  f_comentario.classList.remove("error");
  document.querySelector("#msj-comentario").classList.remove("error-activo");
  document.querySelector("#msj-comentario").classList.add("error-inactivo");
  // bandera
  let hubo_error = false;

  //validaciones
  if (f_pelicula.value == "") {
    f_pelicula.classList.add("error");
    document.querySelector("#msj-pelicula").classList.add("error-activo");
    document.querySelector("#msj-pelicula").classList.remove("error-inactivo");
    hubo_error = true;
  }

  if (f_puntuacion.value == "" || !reg_puntuacion.test(f_puntuacion.value)) {
    f_puntuacion.classList.add("error");
    document.querySelector("#msj-puntuacion").classList.add("error-activo");
    document
      .querySelector("#msj-puntuacion")
      .classList.remove("error-inactivo");
    hubo_error = true;
  }

  if (f_comentario.value != "") {
    if (f_comentario.value.length < 10 || f_comentario.value.length > 200) {
      f_comentario.classList.add("error");
      document.querySelector("#msj-comentario").classList.add("error-activo");
      document
        .querySelector("#msj-comentario")
        .classList.remove("error-inactivo");
      hubo_error = true;
    }
  }

  if (hubo_error) {
    return false;
  } else {
    let comentarios_ok = document.querySelector("#comentarios-ok");
    comentarios_ok.innerHTML = "";
    let parrafoHTML = document.createElement("p");

    parrafoHTML.innerHTML =
      f_pelicula.value +
      ", puntuacion: " +
      f_puntuacion.value +
      ". Coemntario: " +
      f_comentario.value +
      ".";
    comentarios_ok.appendChild(parrafoHTML);
    document.forms["f_peliculas"].reset();
    primero.focus();
  }
  return false;
}
