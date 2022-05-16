let name;
let country;
let p = document.getElementById("output");

let nameChanged = document.querySelector("#nameChanged");
let countryChanged = document.querySelector("#countryChanged")


// const nameChanged = function(event){
//     name = event.target.value;
//     changeInput();
//     }

// const countryChange = function(event){
//     country = event.target.value;
//     changeInput();
// }

// const changeInput = function(){
//     const text = `Je heet ${name} en je komt uit ${country}`;
//     p.textContent = text;
// }

nameChanged.addEventListener("change", function(){
    name= event.target.value;
    changeInput();
})

countryChanged.addEventListener("change", function(){
    country = event.target.value;
    changeInput();
})

const changeInput = function(){
    const text = `Je heet ${name} en je komt uit ${country}`;
    p.textContent = text;
}