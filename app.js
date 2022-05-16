let name;
let country;
// let p = document.getElementById("output");

// const nameChanged = function(event){
//     name = event.target.value;
//     changeInput();
//     }

// const countryChange = function(event){
//     country = event.target.value;
//     changeInput();
// }

const changeInput = function(){
    const text = `Je heet ${name} en je komt uit ${country}`;
    p.textContent = text;
}

nameChanged.addEventlistener("change", function()){
    name= event.target.value;
    changeInput();
}

countryChanged.addEventlistener("change", function(){
    country = event.target.value;
    changeInput();
})

const changeInput = function(){
    const text = `Je heet ${name} en je komt uit ${country}`;
    p.textContent = text;
}