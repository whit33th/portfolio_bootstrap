const phraseElement = document.querySelector(".load-phrase");
const phrase = "Looking for new opportunities: dkaminskyi@edu.cdv.pl";
let index = 0;

function typePhrase() {
    if (index < phrase.length) {
        phraseElement.innerHTML += phrase.charAt(index);
        index++;
        setTimeout(typePhrase, 80);
    }
}

window.onload = typePhrase;

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var homeSection = document.querySelector('#aboutme');
    var homeSectionOffsetTop = homeSection.offsetTop;
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    

    if (scrollPosition >= homeSectionOffsetTop) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('skills-tabs-tab-hard-skills').addEventListener('click', function () {
    document.getElementById('skills-tabs-tab-hard-skills').setAttribute('aria-selected', 'true');
    document.getElementById('skills-tabs-tab-soft-skills').setAttribute('aria-selected', 'false');
    document.getElementById('skills-tabs-tabpane-hard-skills').classList.add('active', 'show');
    document.getElementById('skills-tabs-tabpane-soft-skills').classList.remove('active', 'show');
});

document.getElementById('skills-tabs-tab-soft-skills').addEventListener('click', function () {
    document.getElementById('skills-tabs-tab-soft-skills').setAttribute('aria-selected', 'true');
    document.getElementById('skills-tabs-tab-hard-skills').setAttribute('aria-selected', 'false');
    document.getElementById('skills-tabs-tabpane-soft-skills').classList.add('active', 'show');
    document.getElementById('skills-tabs-tabpane-hard-skills').classList.remove('active', 'show');
});

// Pobierz referencje do pól wejściowych i elementu wyświetlającego wynik
const graficzneInput = document.getElementById('graficzne');
const zarzadczeInput = document.getElementById('zarzadcze');
const programistyczneInput = document.getElementById('programistyczne');
const inneInput = document.getElementById('inne');
const wynikElement = document.getElementById('wynik');

// Dodaj nasłuchiwanie na zdarzenie zmiany wartości pól wejściowych
graficzneInput.addEventListener('input', obliczStawke);
zarzadczeInput.addEventListener('input', obliczStawke);
programistyczneInput.addEventListener('input', obliczStawke);
inneInput.addEventListener('input', obliczStawke);

// Funkcja do obliczania całkowitej stawki
function obliczStawke() {
    const graficzneStawka = Math.max(parseFloat(graficzneInput.value) || 0, 0);
    const zarzadczeStawka = Math.max(parseFloat(zarzadczeInput.value) || 0, 0);
    const programistyczneStawka = Math.max(parseFloat(programistyczneInput.value) || 0, 0);
    const inneStawka = Math.max(parseFloat(inneInput.value) || 0, 0);

  const graficzneStawkaZaGodzine = parseFloat(document.getElementById('graficzne').nextElementSibling.textContent);
  const zarzadczeStawkaZaGodzine = parseFloat(document.getElementById('zarzadcze').nextElementSibling.textContent);
  const programistyczneStawkaZaGodzine = parseFloat(document.getElementById('programistyczne').nextElementSibling.textContent);
  const inneStawkaZaGodzine = parseFloat(document.getElementById('inne').nextElementSibling.textContent);

  const sumaStawek = (graficzneStawka * graficzneStawkaZaGodzine) + (zarzadczeStawka * zarzadczeStawkaZaGodzine) + (programistyczneStawka * programistyczneStawkaZaGodzine) + (inneStawka * inneStawkaZaGodzine);
  wynikElement.classList.add("active");
  wynikElement.textContent = `Total rate: ${sumaStawek} USD`;

  if(sumaStawek == 0){
    wynikElement.textContent = ''; 
    wynikElement.classList.remove("active");      
  }
 

}

function toggle(){
   
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}



function add(){
    var popup = document.getElementById('popup');
    popup.classList.add('active');
}

// var privacyCheckbox = document.getElementById("Privacy-and-security");
// var lawfulUsageCheckbox = document.getElementById("Lawful-Usage");
// var intellectualPropertyCheckbox = document.getElementById("Intellectual-Property");

// function checkAndExecute() {
//   if (privacyCheckbox.checked && lawfulUsageCheckbox.checked && intellectualPropertyCheckbox.checked) {
//     // Если все флажки нажаты, выполнить необходимые действия
//     var popup = document.getElementById('blur');
//     popup.classList.toggle('active');
//     var RulePerm = document.getElementById('RulePerm');
//     RulePerm.classList.add('active');
//   } else {
//     // Если какой-либо флажок не нажат, вывести сообщение об ошибке
//     alert("Please accept all the rules.");
//   }
// }


  


  

