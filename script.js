window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("tornaSu").style.display = "block";
  } else {
    document.getElementById("tornaSu").style.display = "none";
  }
}


document.getElementById('tornaSu').addEventListener('click', function(){
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;  Opera
});

const containerEl = document.querySelector('.container');

const careers = ['Silvia Cavuoti', 'la tua Estetista', 'la tua Make-up Artist', 'la tua Consulente di Bellezza'];

let careerIndex = 0;

let characterIndex = 0;

updateCareer();

function updateCareer() {
  containerEl.innerHTML = `<h1 class="h1Animation">Io sono ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
  
  characterIndex++
  if(characterIndex > careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
    if(careerIndex === careers.length) {
      careerIndex = 0;
    }
  }
  setTimeout(updateCareer, 150);
}






