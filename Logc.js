// const imageUrl = "https://www.xe.com/currencyconverter/convert/?Amount=1&From=PEN&To=USD";
// document.querySelector('#myImage').src = imageUrl;

let miUrl = "https://www.xe.com/currencyconverter/convert/?Amount=1&From=PEN&To=USD";

let miImagen = document.getElementById("miImagen");

miImagen.src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + encodeURIComponent(miUrl);

// funciones para redirigir a las apps webs
function redirectToFacebook(){
  // Verificar si el usuario está en un dispositivo móvil
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Si está en un dispositivo móvil, intentar abrir en la aplicación de Facebook
    window.location.href = 'fb://profile/100004002709161';
    setTimeout(function() {
      window.location.href = 'https://www.facebook.com/kevin.pazsoldanochoa';
    }, 200);
  } else {
    // Si no está en un dispositivo móvil, abrir en el navegador
    window.open('https://www.facebook.com/kevin.pazsoldanochoa', '_blank');
  }
}

function redirectToInstagram() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var igScheme = 'instagram://user?username=kevin_pazsoldan_ochoa';
  var igWebUrl = 'https://www.instagram.com/kevin_pazsoldan_ochoa';
  
  if (isMobile) {
    window.location.href = igScheme;
    setTimeout(function() {
      window.location.href = igWebUrl;
    },200);
  } else {
    window.open(igWebUrl, '_blank');
  }
}

function redirectToTwitter() {
  // Verificar si el usuario está en un dispositivo móvil
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var twScheme = 'twitter://user?screen_name=SoldanOchoa';
  var twWebUrl = 'https://twitter.com/SoldanOchoa';
  if (isMobile) {
    window.location.href = twScheme;
    setTimeout(function(){
      window.location.href = twWebUrl;
    },200);
  } else {
     window.open(twWebUrl, '_blank');
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
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var lkScheme = 'linkedin://profile/kevin-paz-soldan-ochoa-ba94a1223';
  var lkWebUrl = 'https://www.linkedin.com/in/kevin-paz-soldan-ochoa-ba94a1223'; 
  if (isMobile) {
    window.location.href = lkScheme;
    setTimeout(function(){
      window.location.href = lkWebUrl;
    },200);
  } else {
    window.open(lkWebUrl,'_blank')
  }
}

function redirectToGithub(){
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var ghScheme = 'github://user?username=PazSoldanOchoaKev';
  var ghWebUrl = 'https://github.com/PazSoldanOchoaKev';
  if (isMobile) {
    window.location.href = ghScheme;
    setTimeout(function(){
      window.location.href = ghWebUrl;
    },200);
  } else {
    window.open(ghWebUrl,'_blank');
  }
}


const Token = "EAAIC0VsLAZAABAIpbWHsqKhZAKcJLILpiZAq0hVZBIWD0ZCQ0bWQiwZAB6DP4fLNHMlsAipAMIoYxZA2m3UNZBOpRuZA3PfBeZBohoErVgjzNglBmkZCySVI4v8jWOFyCc1GfCxEYQI3n4cyHThVLIMluKeLC0MLNeYTeSUGnh73H52IfYaZCT2AmdBUc11DQ99GZC0SueRNzIruZBIhq2qpRKqsLPprCVjHZAb0p2i6WpsAFwoZBZAG2f4csqFEJ";
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