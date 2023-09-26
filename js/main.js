// strings
let prenom = 'Alex';
let nom = 'Chautemps';

/*console.log("je m'appelle : " + prenom + " " + nom)
console.log(`je m'appelle : ${prenom} et ${nom}`)*/

// numbers
let age = 30;
let anneeExperience = 9;

let a = 0.1;
let b = 0.2;

// boolean
let isWorking = true;

// null & undefined
let variablePourLeFutur = null;
let variablePourLeFutur2;

// functions

function parler(message1, message2 = 'rien à dire', callback) {
  console.log(message1);
  console.log(message2);
  if (callback) callback();
}

/* parler("salut", "ça va ?")
parler("au revoir", "Bonne journée", function(){
  console.log("je suis une fonction de callback")
})

parler("salut")*/

function parler2({ message1, message2 }) {
  console.log(message1);
  console.log(message2);
}

/* parler2({
  message1: "salut",
  message2: "ça va ?"
}) */

function checkLaVieillesse(age) {
  if (age > 70) {
    return true;
  } else {
    return false;
  }
}

/* console.log(checkLaVieillesse(30))
console.log(checkLaVieillesse(80)) */

// tableaux

/*const simpsons = ["Homer", "Marge", ["Bart", "Lisa", "Maggie"]]

// boucles

simpsons.forEach((simpson) => {
  // si simpson === array
  if(Array.isArray(simpson)){
    simpson.forEach((enfant) => {
      console.log(enfant)
    })
  } else {
    console.log(simpson)
  }
}) */

const simpsons = [
  {
    age: 50,
    name: 'Homer',
  },
  {
    age: 48,
    name: 'Marge',
  },
  [
    { age: 14, name: 'Bart' },
    { age: 13, name: 'Lisa' },
    { age: 2, name: 'Maggie' },
  ],
];


let marge = simpsons.find((simpson) => {
  return simpson.name === "Marge"
})

console.log(marge.age)



// objects 
let utilisateur = {
  name :"Alex",
  age : 30,
  isWorking : true,
}

console.log(utilisateur.name)
const KEY_TO_FIND = "name"


console.log(utilisateur[KEY_TO_FIND])



