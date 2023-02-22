//your JS code here. If required.
let animals = ['camel','cheetah','elephant','gorilla','koala','lion','polar_bear','tiger','wolf']

let photoGrid = document.querySelector('.grid')

for (let i = 0; i < animals.length; i++) {

    console.log(animals[i]);
    let animal = `<img src="https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/${animals[i]}.jpg" alt="${animals[i]}">`

   photoGrid.innerHTML += animal;

}