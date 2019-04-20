const registration = document.getElementById("welcome");
const trivName = document.getElementById("main-headline");
      trivName.style.cursor = "pointer";
const categories = document.getElementById("categories");
const Equestions = document.getElementById("E-questions");
const Lquestions = document.getElementById("L-questions");
const results = document.getElementById("results");
const goToHome = () => {
    location.reload();
};

const correctAns = 1;
const incorrectAns = 0;
let score = NaN;

const phrases = [
    "imgs/no-point.jpg",
    "imgs/one-point.jpg",
    "imgs/two-points.jpg",
    "imgs/three-points.jpg"
];

let phrase = "";

trivName.style.display = "none";
categories.style.display = "none";


const LetsPlay = document.getElementById("lets-play").addEventListener("click", () => {
    registration.style.display = "none";
    trivName.style.display = "block";
    categories.style.display = "block";

    const divGreeting = document.getElementById("greeting");
    let userName = document.getElementById("user-name").value;
    userName = userName.slice(0, 1).toUpperCase() + userName.slice(1, 11).toLowerCase();
    const tempGreeting = `
    <h3>Hola, ${userName}</h3>
    <br>
    `
    divGreeting.innerHTML = tempGreeting;
});



const EuroOpts = document.getElementById("europe-options").addEventListener("click", () => {
    categories.style.display = "none";
    Equestions.style.display = "block";

    const divEuroQ = document.createElement("DIV");
          divEuroQ.id = "euro-Equestions";

    const euroQs = [
      "¿Cuál de los siguientes personajes no es representante ni exponente del existencialismo?",
      "Auguste Comte es considerado el creador del positivismo. ¿Cuál de todas las frases resume perfectamente su movimiento filosófico?",
      "¿Quién es considerado el primer filósofo de Occidente?"
    ];

    const euroQTemp = `
        <figure>
            <img src="./imgs/marx.jpg" alt="Peruvian Thinker" width="300">
        </figure>
        <div class="and">
          <p> ${euroQs[0]}</p>
             <div id="feq">
               <input type="radio" name="a" value=${incorrectAns}>CAMUS
               <input type="radio" name="a" value=${correctAns}>KANT
               <input type="radio" name="a" value=${incorrectAns}>SARTRÉ
              </div>
          <br><br>
          <p>${euroQs[1]}</p>
              <div id="seq">
               <input type="radio" name="b" value=${incorrectAns}>El conocimiento científico es aquel conociemient permitido por Dios por medio deL método científico.
               <input type="radio" name="b" value=${incorrectAns}>La ciencia es el conociemiento sintetizado y expuesto a los saberes filosóficos por medio del positivismo
               <input type="radio" name="b" value=${correctAns}>El conocimiento auténtico es el conocimiento científico
              </div>

          <br><br>
          <p>${euroQs[2]}</p>
              <div id="teq">
               <input type="radio" name="c" value=${correctAns}>TALES DE MILETO
               <input type="radio" name="c" value=${incorrectAns}>SÓCRATES
               <input type="radio" name="c" value=${incorrectAns}>PITÁGORAS
              </div>
          <br><br>

          <input type="button" id="see-euro-results" class="go-to-results" value="¡TERMINAR!">
        </div>
    `

    divEuroQ.innerHTML = euroQTemp;
    Equestions.style.display = "block";
    Equestions.innerHTML = "";
    Equestions.appendChild(divEuroQ);


    let answerFEQ = "";
    let answerSEQ = "";
    let answerTEQ = "";


    document.getElementById('feq').addEventListener('click', (e) => {
      answerFEQ = e.target.value;
    });

    document.getElementById('seq').addEventListener('click', (e) => {
      answerSEQ = e.target.value;
    });

    document.getElementById('teq').addEventListener('click', (e) => {
      answerTEQ = e.target.value;
    });


    document.getElementById("see-euro-results").addEventListener("click", () => {
        Equestions.style.display = "none";

        score = parseInt(answerFEQ) + parseInt(answerSEQ) + parseInt(answerTEQ);

        if(score === 3){
            phrase = phrases[3];
        } else if (score === 2) {
            phrase = phrases[2];
        } else if (score === 1) {
            phrase = phrases[1];
        } else {
            phrase = phrases[0];
        }


        let userName = document.getElementById("user-name").value;
        userName = userName.slice(0, 1).toUpperCase() + userName.slice(1, 11).toLowerCase();


        const divEuroR = document.createElement("DIV");
              divEuroR.id = "ending";
        const resultsTemp = `    
            <figure>
             <img src=${phrase} alt="" id="photo">
            </figure>

            <div id="sentence">
             <h3>${userName} marcaste ${score} de manera correcta según nuestras respuestas predispuestas.</h3>
            </div>

            <div>
             <input type="button" id="go-to-categories" value="VUELVE A JUGAR">
             <input type="button" id="go-to-home" value="SALIR">
            </div>
        `

        divEuroR.innerHTML = resultsTemp;
        results.style.display = "block";
        results.innerHTML = "";
        results.appendChild(divEuroR);

        document.getElementById("go-to-home").addEventListener("click", goToHome);

        const goToCategories = () => {
            results.style.display = "none";
            categories.style.display = "block";
            LatinOpts.style.display = "none";
        };
        document.getElementById("go-to-categories").addEventListener("click", goToCategories);
    });
});

const LatinOpts = document.getElementById("latin-options").addEventListener("click", () => {
    categories.style.display = "none";
    Lquestions.style.display = "block";

    const divLatinQ = document.createElement("DIV");
          divLatinQ.id = "latinamer-Lquestions";
    
    const latinQs = [
        "A Manuel Gonzáles Prada es un reconocido filósofo latinoamericano del periodo positivista. Sabiendo esto, ¿Cuál de las siguientes es obra de Gonzáles Prada?",
        "¿Cuál fue la primera filosofía impuesta en latinoamérica con la Invasión de España?",
        "¿Cuál de los siguientes personajes no es exponente de la filosofía latinoamericana?"
    ]

    const latinQTemp = `
    <figure>
        <img src="./imgs/gprada.jpg" alt="Peruvian Thinker" width="300">
    </figure>
    <div class="and">
      <p>${latinQs[0]}</p>
          <div id="flq">
           <input type="radio" name="A" value=${correctAns}>PAJINAS LIBRES
           <input type="radio" name="A" value=${incorrectAns}>CARTA A LOS ESPAÑOLES AMERICANOS
           <input type="radio" name="A" value=${incorrectAns}>FILOSOFÍA EN LA COSMOVISIÓN ANDINA
          </div>

      <br><br>
      <p>${latinQs[1]}</p>
          <div id="slq">
           <input type="radio" name="B" value=${incorrectAns}>POSITIVISMO
           <input type="radio" name="B" value=${incorrectAns}>EXISTENCIALISMO
           <input type="radio" name="B" value=${correctAns}>NEOESCOLÁSTICA
          </div>

      <br><br>
      <p>${latinQs[2]}</p>
          <div id="tlq">
           <input type="radio" name="C" value=${incorrectAns}>Leopoldo Zea
           <input type="radio" name="C" value=${correctAns}>Gómez Suárez de Figueroa
           <input type="radio" name="C" value=${incorrectAns}>Salazar Bondy
          </div>

      <br><br>
      <input type="button" id="see-latin-results" class="go-to-results" value="¡TERMINAR!">
    </div>
    `

    divLatinQ.innerHTML = latinQTemp;
    Lquestions.style.display = "block";
    Lquestions.innerHTML = "";
    Lquestions.appendChild(divLatinQ);

    let answerFLQ = "";
    let answerSLQ = "";
    let answerTLQ = "";

    document.getElementById('flq').addEventListener('click', (e) => {
        answerFLQ = e.target.value;
    });
  
    document.getElementById('slq').addEventListener('click', (e) => {
        answerSLQ = e.target.value;
    });
  
    document.getElementById('tlq').addEventListener('click', (e) => {
        answerTLQ = e.target.value;
    });
  
  
    document.getElementById("see-latin-results").addEventListener("click", () => {
        Lquestions.style.display = "none";

        score = parseInt(answerFLQ) + parseInt(answerSLQ) + parseInt(answerTLQ);

        if(score === 3){
            phrase = phrases[3];
        } else if (score === 2) {
            phrase = phrases[2];
        } else if (score === 1) {
            phrase = phrases[1];
        } else {
            phrase = phrases[0];
        }


        let userName = document.getElementById("user-name").value;
        userName = userName.slice(0, 1).toUpperCase() + userName.slice(1, 11).toLowerCase();

        const divLatinR = document.createElement("DIV");
              divLatinR.id = "ending";
        const resultsTemp = `    
            <figure>
             <img src=${phrase} alt="" id="photo">
            </figure>

            <div id="sentence">
             <h3>${userName} marcaste ${score} de manera correcta según nuestras respuestas predispuestas.</h3>
            </div>

            <div>
             <input type="button" id="go-to-categories" value="VUELVE A JUGAR">
             <input type="button" id="go-to-home" value="SALIR">
            </div>
        `

        divLatinR.innerHTML = resultsTemp;
        results.style.display = "block";
        results.innerHTML = "";
        results.appendChild(divLatinR);

        document.getElementById("go-to-home").addEventListener("click", goToHome);

        const goToCategories = () => {
            results.style.display = "none";
            Equestions.style.display = "none";
            categories.style.display = "block";
        };
        document.getElementById("go-to-categories").addEventListener("click", goToCategories);
    });
});

trivName.addEventListener("click", goToHome);