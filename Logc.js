// const imageUrl = "https://www.xe.com/currencyconverter/convert/?Amount=1&From=PEN&To=USD";
// document.querySelector('#myImage').src = imageUrl;

let miUrl = "https://www.xe.com/currencyconverter/convert/?Amount=1&From=PEN&To=USD";

let miImagen = document.getElementById("miImagen");

// miImagen.src = `https://chart.googleapis.com/chart?chs=150x150&amp;cht=qr&amp;chl=${miUrl}`;

miImagen.src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + encodeURIComponent(miUrl);

function redirectToInstagram(){
  // Verificar si el usuario está en un dispositivo móvil
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Si está en un dispositivo móvil, intentar abrir en la aplicación de Instagram
    window.location.href = 'instagram://user?username=kevin_pazsoldan_ochoa';
  } else {
    // Si no está en un dispositivo móvil, abrir en el navegador
    window.open('https://www.instagram.com/kevin_pazsoldan_ochoa/', '_blank');
  }

}
const Token = "EAAIC0VsLAZAABAHuldl4jZBa4rgeu05DTZBJFiPgxBDvqE0QvlfnJ95igNtPii4mau2xy0e16VLG6NEp2ZAcSPT4VvVufeEwfhmI7ipzV4SXhorIPaGtxZAqI3uohh5FE52Lrkh2R9FKWUEuGWqpHWxWi67NKm13xo1VI1mgDqLTACf6MqBu6vZAiPh3S26xd8lDMW9QHg4gZDZD"
fetch(`https://graph.facebook.com/me?fields=name&access_token=${Token}`)
  .then(response => response.json())
  .then(data => {
    console.log(data); // aquí puedes ver los datos que te devuelve la API, incluyendo tu nombre
    const name = data.name; // aquí guardas tu nombre en una variable
    // aquí puedes usar JavaScript para mostrar el nombre en tu HTML, por ejemplo:
    document.getElementById('nombre').textContent = name; // muestra el nombre en un elemento HTML con id="nombre"
  })
  .catch(error => {
    console.error('Error:', error);
  });


