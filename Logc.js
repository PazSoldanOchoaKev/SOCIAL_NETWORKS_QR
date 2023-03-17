// const imageUrl = "https://www.xe.com/currencyconverter/convert/?Amount=1&From=PEN&To=USD";
// document.querySelector('#myImage').src = imageUrl;

let miUrl = "https://www.xe.com/currencyconverter/convert/?Amount=1&From=PEN&To=USD";

let miImagen = document.getElementById("miImagen");

// miImagen.src = `https://chart.googleapis.com/chart?chs=150x150&amp;cht=qr&amp;chl=${miUrl}`;

miImagen.src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + encodeURIComponent(miUrl);

function redirectToFacebook(){
  // Verificar si el usuario está en un dispositivo móvil
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Si está en un dispositivo móvil, intentar abrir en la aplicación de Facebook
    window.location.href = 'fb://profile/kevin.pazsoldanochoa';
  } else {
    // Si no está en un dispositivo móvil, abrir en el navegador
    window.open('https://www.facebook.com/kevin.pazsoldanochoa', '_blank');
  }
}


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
function redirectToTwitter() {
  // Verificar si el usuario está en un dispositivo móvil
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Si está en un dispositivo móvil, intentar abrir en la aplicación de Twitter
    window.location.href = 'twitter://user?screen_name=SoldanOchoa';
  } else {
    // Si no está en un dispositivo móvil, abrir en el navegador
    window.open('https://twitter.com/SoldanOchoa', '_blank');
  }
}

function redirectToWhatsApp() {
  // Número de teléfono al que se enviará el mensaje
  var phoneNumber = '+51932233734';
  // Mensaje a enviar
  var message = 'Hola, estoy interesado en ti <3';
  // Enlace que se utilizará para redirigir al usuario a WhatsApp
  var link = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
  // Abrir enlace
  window.open(link, '_blank');
}

function redirectToLinkedIn(){
  // Verificar si el usuario está en un dispositivo móvil
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Si está en un dispositivo móvil, intentar abrir en la aplicación de LinkedIn
    window.location.href = 'linkedin://profile/kevin-paz-soldan-ochoa-ba94a1223';
  } else {
    // Si no está en un dispositivo móvil, abrir en el navegador
    window.open('https://www.linkedin.com/in/kevin-paz-soldan-ochoa-ba94a1223', '_blank');
  }
}

function redirectToGithub(){
  // Verificar si el usuario está en un dispositivo móvil
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Si está en un dispositivo móvil, intentar abrir en la aplicación de GitHub
    window.location.href = 'github://user?username=PazSoldanOchoaKev';
  } else {
    // Si no está en un dispositivo móvil, abrir en el navegador
    window.open('https://github.com/PazSoldanOchoaKev', '_blank');
  }
}


const Token = "EAAIC0VsLAZAABALxBtU4sqq3ckLib90A2IJTZCzoOYpQwNUMcuZCOSPpCEPkjXq2KJv7eRBKoNZCaZAZAZAszaVt348dJqeFJ7aU75gxZAjwHth4l6Hja6EKwl05thUOQyYeaf8meCMqZA7dWG9UV0ty2bPly0MYi9EVzAzhVZCG36Hsoz1TjHvJ1ueUUyrqbKnuJTsiq7yqKBqgZDZD"
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


