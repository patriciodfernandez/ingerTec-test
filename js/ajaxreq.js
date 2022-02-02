var resultado = document.getElementById("info");
function ajax_get_json() {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var datos = JSON.parse(xmlhttp.responseText);
      resultado.innerHTML = datos.texto;
      console.log(datos);
    }
  };

  xmlhttp.open("GET", "data.json", true);
  xmlhttp.send();
}
