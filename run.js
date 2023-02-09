const title = document.getElementById("title");
const paragraph_1 = document.getElementById("pa1");
const paragraph_2 = document.getElementById("pa2");
const paragraph_3 = document.getElementById("pa3");
const projects = document.getElementById("projects");
const link1 = document.getElementById("link1");
const linksub1 = document.getElementById("linksub1");
const transbutton = document.getElementById("transbutton");
const copy_button = document.getElementsByClassName("copy");

//function uses for copying text
function copy(text, num){
    //text = text you want to copy
    //fakeText = a text boxed uses to copy the text that just gets deleted
    //num = number of button being pressed (i.e. button #1 , #2, #3)
    const fakeText = document.createElement('textarea');
    fakeText.value = text;
    document.body.appendChild(fakeText);
    fakeText.focus();
    fakeText.select();
    document.execCommand('copy');
    document.body.removeChild(fakeText);
    // copyMessage(num);
}

function trans(lang) {
    if (lang === 1){
        title.innerHTML = "Hola, soy Duncan Hass";
        paragraph_1.innerHTML = "¡Bienviendos a mi sitio web! Puede encontrar todo sobre mí, Duncan Hass, aquí. Puede encontrar mis proyectos, sociales, y información general.";
        paragraph_2.innerHTML = "Si no me conoces yo soy un jovén americano que le encanta leer, escribir, pasar tiempo con ortas, jugar con amigos, y programar (es el razón que hice este sitio). Estoy aprendiendo español (todo el español de este sitio ha estado traducido por mí). He estado aceptado en el programme de IB (International Baccalaureate) También juego al tenis para mi segundaría";
        paragraph_3.innerHTML = "Si quieres contectarme, entonces puede usar estos:";
        copy_button.value = "Copiar";
        link1.innerHTML = "Encriptadora";
        linksub1.innerHTML = "Una básica, rápida, y facil encriptadora";
        transbutton.innerHTML = "English";
        projects.innerHTML = "Proyectos";
        transbutton.onclick = () => {trans(0);}
    }
    if (lang === 0){
        title.innerHTML = "Hello, I am Duncan Hass";
        paragraph_1.innerHTML = "Welcome to my website! Here you can find everything relating to me, Duncan Hass. You can find my projects, socials, and just genral info.";
        paragraph_2.innerHTML = "If you do not already know who I am, I am a 14-year-old American who loves to read, write fiction, talk with others, play games with friends, and code (as you may be able to see). I am currently learning Spanish (I offer a Spanish translation to this website) and I have been accepted into the IB (International Baccalaureate) programme. I also play tennis at a local level. ";
        paragraph_3.innerHTML = "If you want to contact me, then you can use these:";
        copy_button.value = "Copy";
        link1.innerHTML = "Encryptor";
        linksub1.innerHTML = "A simple, fast, and esay-to-use encryptor and decoder!";
        transbutton.innerHTML = "Español";
        projects.innerHTML = "Projects";
        transbutton.onclick = () => {trans(1);}
    }
}